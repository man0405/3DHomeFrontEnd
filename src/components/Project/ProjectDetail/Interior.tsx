import React from "react";

import { BsArrowRight } from "react-icons/bs";

import classes from "./Interior.module.css";

export default function Interior(props: {
	img: string;
	category: string;
	name: string;
}) {
	return (
		<div className={`${classes.item} interior`}>
			<img
				src={props.img ? props.img : process.env.NEXT_PUBLIC_ERROR_IMAGE}
				alt=""
			/>
			<div className={classes.det}>
				<div className={classes.category}>
					<span>{props.category?.toUpperCase()}</span>
					<span>INTERIOR</span>
				</div>
				<div className={classes.more}>
					<span>{props.name}</span>
					<div className={classes.btn}>
						<BsArrowRight />
					</div>
				</div>
			</div>
		</div>
	);
}
