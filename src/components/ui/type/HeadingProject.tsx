import React from "react";
import classes from "./HeadingProject.module.css";
import { BsBookmarkFill } from "react-icons/bs";

export default function HeadingProject(props: {
	first: string;
	second: string;
	desc: string;
}) {
	return (
		<div className={classes.header}>
			<div className={classes.heading}>
				<h2>
					{props.first}
					<br />
					<span className="bold">{props.second}</span>
				</h2>
				<h4>{props.desc}</h4>
			</div>
			<div className={classes["book-mark"]}>
				<BsBookmarkFill />
			</div>
		</div>
	);
}