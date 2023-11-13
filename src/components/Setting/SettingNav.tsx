"use client";
import React from "react";
import Link from "next/link";
import classes from "./SettingNav.module.css";
import { usePathname } from "next/navigation";

export default function Setting() {
	const pathname = usePathname();
	return (
		<>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link
							href="/setting"
							className={`${pathname === "/setting" ? "navActive" : ""}`}
						>
							Profile
						</Link>
					</li>
					<li>
						<Link
							href="/setting/phone"
							className={`${pathname === "/setting/phone" ? "navActive" : ""}`}
						>
							Phone Number
						</Link>
					</li>
					<li>
						<Link
							href="/setting/password"
							className={`${
								pathname === "/setting/password" ? "navActive" : ""
							}`}
						>
							Password
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
