import React, { Profiler } from "react";
import { TableOne } from "../tableOne/TableOne";
import { columnGenerator } from "./Columns";
import { TableTwo } from "./TableTwo";

export const PageTwo = () => {
	function onRender(
		id,
		phase,
		actualDuration,
		baseDuration,
		startTime,
		commitTime
	) {
		// const { id, phase, actualDuration, baseDuration, startTime, commitTime } =
		// 	data;
		//     console.log('DATA', data)
		console.log("ID: ", id);
		console.log("actualDuration: ----------", actualDuration);
	}

	return (
		<Profiler id={"Collection"} onRender={onRender}>
			<Collection>
				<TableTwo columns={columnGenerator()} />
				<TableTwo columns={columnGenerator()} />
				<TableTwo columns={columnGenerator()} />
				<TableTwo columns={columnGenerator()} />
				<TableTwo columns={columnGenerator()} />
				<TableTwo columns={columnGenerator()} />
			</Collection>
		</Profiler>
	);
};

const Collection = (props) => {
	return props.children;
};
