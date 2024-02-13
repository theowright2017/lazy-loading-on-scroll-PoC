import React, { useState, useEffect, useRef, Profiler } from "react";

import {
	useReactTable,
	getFilteredRowModel,
	Table,
	Row,
	flexRender,
	getCoreRowModel,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { getItems, getItemsByPage } from "@/api/dataGenerator";

import styles from "../../styles/Table.module.scss";
import { getIsoDuration } from "@/api/denormalise";
import { useOnScroll } from "../hooks/useOnScroll";

export const TableTwo = (props) => {
	const [data, setData] = useState([]);
	const [totalCount, setTotalCount] = useState(0);

	const [columns] = useState([...props.columns]);

	const { hasScrolled, setHasScrolledTrue } = useOnScroll();

	const parentRef = useRef();

	useEffect(() => {
		const getData = async function () {
			try {
				const resp = await getItems(100);
				console.log("resp.data", resp.data.data);

				setData(resp.data.data);
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}, []);

	// useEffect(() => {
	// 	const worker = new Worker(
	// 		new URL("../../worker/dataLoadWorker.js", import.meta.url)
	// 	);

	// 	worker.postMessage({ startPage: 2 });

	// 	worker.onmessage = (event) => {
	// 		console.log("DATA", event.data);
	// 		setData((cur) => cur.concat(...event.data));
	// 	};

	// 	return () => worker.terminate();
	// }, []);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const virtualizer = useVirtualizer({
		count: 10000,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 25,
		overscan: 20,
	});

	function handleOnScroll() {
		const worker = new Worker(
			new URL("../../worker/dataLoadWorker.js", import.meta.url)
		);

		worker.postMessage({ firstAmount: 100 });

		worker.onmessage = (event) => {
			console.log("DATA", event.data);
			setData((cur) => cur.concat(...event.data));
			worker.terminate();
		};
	}

	const { rows } = table.getCoreRowModel();

	return (
		<div
			ref={parentRef}
			className={styles.container}
			style={{
				height: "150px",
				width: "600px",
				margin: "30px",
				border: "1px solid black",
				overflow: "auto",
			}}
			onScroll={
				hasScrolled
					? undefined
					: () => {
                        console.log('scroll%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
							if (!hasScrolled) {
                                setHasScrolledTrue();
                                handleOnScroll();
								
							} 
					  }
			}
		>
			<div style={{ height: `${virtualizer.getTotalSize()}px` }}>
				<table>
					<thead>
						{table.getHeaderGroups().map((headerGroup, index) => (
							<tr key={headerGroup}>
								{headerGroup.headers.map((header) => {
									return (
										<HeaderCell key={header.id} header={header}>
											<div className={styles.inner} style={{ width: "50px" }}>
												<HeaderValue header={header} />
											</div>
										</HeaderCell>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody>
						{virtualizer.getVirtualItems().map((virtualRow, index) => {
							const row = rows[virtualRow.index];

							if (row) {
								row.original.isoDuration = getIsoDuration(row.id).date;
							}
							return (
								<tr
									key={row ? row.id : virtualRow.index}
									style={{
										height: `${virtualRow.size}px`,
										transform: `translateY(${
											virtualRow.start - index * virtualRow.size
										}px)`,
									}}
								>
									{row ? (
										row.getVisibleCells().map((cell, cellIndex) => {
											return (
												<td key={cell.id}>
													<div style={{ backgroundColor: "lightblue" }}>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext()
														)}
													</div>
												</td>
											);
										})) : (
                                            <div>Loading....</div>
                                        )}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const HeaderCell = (props) => {
	return (
		<th
			key={props.header.id}
			style={{ width: props.header.getSize() }}
			className={styles.header_cell}
			{...props}
		>
			{props.children}
		</th>
	);
};

const HeaderValue = ({ header }) => {
	return (
		<div className={styles.header_value}>
			{flexRender(header.column.columnDef.header, header.getContext())}
		</div>
	);
};
