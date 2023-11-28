import React from "react";
import classes from "./Profile.module.css";

export default function Profile() {
	return (
		<section className="container">
			<div className={classes.inf}>
				<div className={classes["back-ground"]}></div>
				<div className={classes.avatar}>
					<img src="/assets/images/photo-1545324418-cc1a3fa10c00.webp" alt="" />
					<div className={classes.content}>
						<div className={classes.name}>Omar Sulaiman</div>
						<div className={classes.phone}>+84 339228240</div>
					</div>
				</div>
			</div>
		</section>
	);
}
