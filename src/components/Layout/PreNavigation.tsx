import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdApartment } from "react-icons/md";
import data from "../../../MOCK_DATA.json";

import classes from "./PreNavigation.module.css";
import Card from "../ui/Card/Card";

const PreNavigation = () => {
	return (
		<>
			<nav className={classes.navigation}>
				<ul className={classes.menu}>
					<li className={classes["menu-item"]}>
						<a href="#product">Product</a>
					</li>
					<li className={classes["menu-item"]}>
						<a href="#review">Review</a>
					</li>
					<li className={classes["menu-item"]}>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			<div className={classes["button-action"]}>
				<Link href={"/auth/signin"}>Sign In</Link>
				<Link href={"/auth/signup"}>Sign Up</Link>
			</div>
		</>
	);
};

export default PreNavigation;
