"use client";
import Image from "next/image";
import Link from "next/link";

import { BiUserCircle } from "react-icons/bi";
import User from "../User/User";

import classes from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
	const path = usePathname();

	return (
		<header className={`${classes.header} container`}>
			<div className={classes.logo}>
				<Link href={"/home"}>
					<Image
						src={"/assets/images/Bank.png"}
						alt="Logo"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<nav>
				<ul className={classes.list}>
					{[
						{ id: 1, name: "main" },
						{ id: 2, name: "gallery" },
						{ id: 3, name: "project" },
						{ id: 4, name: "help" },
					].map((item) => (
						<li
							key={item.id}
							className={`${classes.item} ${
								path === "/home" + (item.name === "main" ? "" : `/${item.name}`)
									? classes.active
									: ""
							}`}
						>
							<Link href={`/home/${item.name === "main" ? "" : item.name}`}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={classes.user}>
				<BiUserCircle />
				<User />
			</div>
		</header>
	);
};

export default Header;
