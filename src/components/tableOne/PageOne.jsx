import React, {Profiler} from "react";
import { TableOne } from "./TableOne";
import { columnGenerator } from "./Columns";

export const PageOne = () => {
	function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
		// const { id, phase, actualDuration, baseDuration, startTime, commitTime } =
		// 	data;
        //     console.log('DATA', data)
		console.log("actualDuration: ----------", actualDuration);
	}
	return (
		<Profiler id={"TableOne"} onRender={onRender}>
			<TableOne columns={columnGenerator()} />
		</Profiler>
	);
};
