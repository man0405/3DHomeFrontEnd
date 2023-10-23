"use client";
import { MdNightsStay, MdSunny } from "react-icons/md";

import classes from "./ThemeIcon.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { themeAction } from "@/redux/themeMode";
import { useEffect } from "react";

const ThemeIcon = ({ theme }: { theme: boolean }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(themeAction.set({ theme: theme }));
	}, [theme]);
	let appUseSelection = useAppSelector((state) => state.theme.theme);

	const toggleStyle = () => {
		dispatch(themeAction.toggle());
		document.body.classList.toggle("dark", appUseSelection);
	};

	return (
		<div className={classes["theme-icon"]} onClick={toggleStyle}>
			<MdSunny
				style={{ color: "#FDB813" }}
				className={`${classes.sun} ${appUseSelection ? classes.active : ""}`}
			/>
			<MdNightsStay
				style={{ color: "#5f79c2" }}
				className={`${classes.night} ${
					!appUseSelection ? classes.active : ""
				} `}
			/>
		</div>
	);
};

export default ThemeIcon;

// MdNightsStay  MdSunny
