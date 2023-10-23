import { cookies } from "next/headers";

import PreMain from "@/components/Layout/PreMain";
import PreHeader from "@/components/Layout/PreHeader";
import Footer from "@/components/Layout/Footer";
import ThemeIcon from "@/components/Theme/ThemeIcon";

export default function Home() {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme")?.value === "dark" ? false : true;

	return (
		<>
			<PreHeader></PreHeader>
			<main>
				<ThemeIcon theme={theme} />
				<PreMain />
				<Footer />
			</main>
		</>
	);
}
