import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SettingNav from "@/components/Setting/SettingNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type HomeLayout = {
	children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayout) {
	return (
		<>
			<Header />
			<main className="container">
				<h1 style={{ marginTop: "3rem", fontWeight: 600, fontSize: "4.6rem" }}>
					Account Settings
				</h1>
				<section
					style={{
						marginTop: "2.4rem",
						display: "flex",
						alignItems: "flex-start",
						gap: "12rem",
					}}
				>
					<SettingNav />
					{children}
				</section>
			</main>
			<Footer />
		</>
	);
}
