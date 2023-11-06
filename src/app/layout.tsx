import "./globals.css";
import type { Metadata, NextPageContext } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type RootLayout = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme")?.value === "dark" ? false : true;

	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${inter.className} ${theme ? "" : "dark"}`}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
