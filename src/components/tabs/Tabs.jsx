import * as Tabs from "@radix-ui/react-tabs";

const Tab = (props) => (
	<Tabs.Root className="TabsRoot" defaultValue="tab1">
		<Tabs.List className="TabsList" aria-label="Manage your account">
			<Tabs.Trigger className="TabsTrigger" value="tab1">
				Table One
			</Tabs.Trigger>
			{/* <Tabs.Trigger className="TabsTrigger" value="tab2">
				Table Two
			</Tabs.Trigger> */}
		</Tabs.List>
		{props.children}
	</Tabs.Root>
);

export default Tab;
