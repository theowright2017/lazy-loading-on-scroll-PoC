import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columnGenerator = () => [
	columnHelper.accessor("name", {
		id: "name",
		cell: (info) => info.getValue(),
		header: () => <div>Name</div>,
	}),
	columnHelper.accessor("isoDuration", {
		id: "isoDuration",
		cell: (info) => info.getValue(),
		header: () => <div>ISO</div>,
	}),
];
