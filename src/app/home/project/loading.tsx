import React from "react";
import classes from "./loading.module.css";
import Heading from "@/components/ui/type/Heading";

export default function Loading() {
	return (
		<section className="container">
			<Heading first="Our" second="Project" />
			<div className={`${classes["list-wrap"]}`}>
				<div className={classes.project}>
					<div className={`${classes.img} loading`}></div>
					<div className={classes.content}>
						<div className={`${classes.title} loading`}></div>
						<div className={`${classes.desc} loading`}></div>
						<div className={`${classes.button} loading`}></div>
					</div>
				</div>
				<div className={classes.project}>
					<div className={`${classes.img} loading`}></div>
					<div className={classes.content}>
						<div className={`${classes.title} loading`}></div>
						<div className={`${classes.desc} loading`}></div>
						<div className={`${classes.button} loading`}></div>
					</div>
				</div>
				<div className={classes.project}>
					<div className={`${classes.img} loading`}></div>
					<div className={classes.content}>
						<div className={`${classes.title} loading`}></div>
						<div className={`${classes.desc} loading`}></div>
						<div className={`${classes.button} loading`}></div>
					</div>
				</div>
				<div className={classes.project}>
					<div className={`${classes.img} loading`}></div>
					<div className={classes.content}>
						<div className={`${classes.title} loading`}></div>
						<div className={`${classes.desc} loading`}></div>
						<div className={`${classes.button} loading`}></div>
					</div>
				</div>
				<div className={classes.project}>
					<div className={`${classes.img} loading`}></div>
					<div className={classes.content}>
						<div className={`${classes.title} loading`}></div>
						<div className={`${classes.desc} loading`}></div>
						<div className={`${classes.button} loading`}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
