import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Tab from "@/components/tabs/Tabs";
import * as Tabs from "@radix-ui/react-tabs";
import { PageOne } from "@/components/tableOne/PageOne";
import { PageTwo } from "@/components/tableTwo/PageTwo";
import { PageThree } from "@/components/tableThree/PageThree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Tab>
			<Tabs.Content value="tab1">
				<PageOne />
			</Tabs.Content>
			<Tabs.Content value="tab2">
				<PageTwo />
			</Tabs.Content>
			<Tabs.Content value="tab3">
				<PageThree />
			</Tabs.Content>
		</Tab>
	);
}
