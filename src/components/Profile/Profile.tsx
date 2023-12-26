"use client";
import React, { useEffect } from "react";
import classes from "./Profile.module.css";

export default function Profile({
	name,
	phone,
}: {
	name: string;
	phone: string;
}) {
	return (
		<section className="container">
			<div className={classes.inf}>
				<div className={classes["back-ground"]}></div>
				<div className={classes.avatar}>
					<img src="/assets/images/photo-1545324418-cc1a3fa10c00.webp" alt="" />
					<div className={classes.content}>
						<div className={classes.name}>{name}</div>
						<div className={classes.phone}>{phone}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
