import React, { Profiler } from "react";
import { TableOne } from "../tableOne/TableOne";
import { columnGenerator } from "./Columns";
import { TableThree } from "./TableThree";

export const PageThree = () => {
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
		<Profiler id={"Collection3"} onRender={onRender}>
			<Collection>
				<TableThree key={'1'} columns={columnGenerator()} />
				<TableThree key={'2'} columns={columnGenerator()} />
				<TableThree key={'3'} columns={columnGenerator()} />
				<TableThree key={'4'} columns={columnGenerator()} />
				<TableThree key={'5'} columns={columnGenerator()} />
				<TableThree key={'6'} columns={columnGenerator()} />
			</Collection>
		</Profiler>
	);
};

const Collection = (props) => {
	return props.children;
};
