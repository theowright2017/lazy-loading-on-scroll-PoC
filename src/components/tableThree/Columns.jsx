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
	columnHelper.accessor("code", {
		id: "code",
		cell: (info) => info.getValue(),
		header: () => <div>Code</div>,
	}),
	columnHelper.accessor("prop1", {
		id: "prop1",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 1</div>,
	}),
	columnHelper.accessor("prop2", {
		id: "prop2",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 2</div>,
	}),
	columnHelper.accessor("prop3", {
		id: "prop3",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 3</div>,
	}),
	columnHelper.accessor("prop4", {
		id: "prop4",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 4</div>,
	}),
	columnHelper.accessor("prop5", {
		id: "prop5",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 5</div>,
	}),
	columnHelper.accessor("prop6", {
		id: "prop6",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 6</div>,
	}),
	columnHelper.accessor("prop7", {
		id: "prop7",
		cell: (info) => info.getValue(),
		header: () => <div>Prop - 7</div>,
	}),
];
