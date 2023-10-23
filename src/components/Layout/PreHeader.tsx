"use client";
import Link from "next/link";
import Image from "next/image";

import classes from "./PreHeader.module.css";
import PreNavigation from "./PreNavigation";
import { useAppSelector } from "@/redux/hooks";

const PreHeader = () => {
	const theme = useAppSelector((state) => state.theme.theme);
	console.log("file: PreHeader.tsx:11 ~ PreHeader ~ theme:", theme);

	const src = theme
		? "/assets/images/Bank.png"
		: "/assets/images/BankWhite.png";
	return (
		<header className={`${classes.header} container`}>
			<div className={classes.logo}>
				<Link href={"/"}>
					<Image src={src} alt="main logo" width={200} height={200} />
				</Link>
			</div>
			<div className={classes["header-menu"]}>
				<PreNavigation></PreNavigation>
			</div>
		</header>
	);
};

export default PreHeader;
