"use client";
import classes from "./User.module.css";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import {
	IoLogOut,
	IoSettingsSharp,
	IoInvertModeOutline,
} from "react-icons/io5";
import UserItem from "./UserItem";
import { MouseEvent } from "react";
import Cookies from "cookies";
import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const User = () => {
	const router = useRouter();
	const clickModeHandler = (e: MouseEvent) => {
		const html = document.querySelector("html");
		if (html) {
			html.classList.toggle("dark");
			setCookie("theme", html.classList.contains("dark") ? "dark" : "light");
		}
	};
	const clickLogOutHandler = async (e: MouseEvent) => {
		try {
			const response = await fetch(
				process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/logout",
				{
					method: "GET",
					credentials: "include",
				}
			);
			const data = await response.json();
			if (data.result === "true") {
				router.push("/auth/signin");
			}
		} catch (error) {
			console.log("file: User.tsx:36 ~ clickLogOutHandler ~ error:", error);
		}
	};
	return (
		<ul className={classes.list}>
			<UserItem>
				<BiSolidUserCircle />
				<Link href={"/profile"}>Your Profile</Link>
			</UserItem>
			<UserItem>
				<IoSettingsSharp />
				<Link href={"/setting"}>Setting</Link>
			</UserItem>
			<UserItem onClick={clickModeHandler}>
				<IoInvertModeOutline />
				<span>Mode</span>
			</UserItem>
			<UserItem onClick={clickLogOutHandler}>
				<IoLogOut />
				<span>Log Out</span>
			</UserItem>
		</ul>
	);
};

export default User;

// IoInvertModeSharp
