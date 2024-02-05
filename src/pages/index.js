import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Tab from "@/components/tabs/Tabs";
import * as Tabs from "@radix-ui/react-tabs";
import { PageOne } from "@/components/tableOne/PageOne";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Tab>
			<Tabs.Content value="tab1">
				<PageOne />
			</Tabs.Content>
		</Tab>
	);
}
