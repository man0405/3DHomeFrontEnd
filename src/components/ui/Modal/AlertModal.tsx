import React from "react";
import classes from "./AlertModal.module.css";

export default function AlertModal(props: { onConfirm?: () => void }) {
	return (
		<div className={classes.card}>
			<button
				className={classes.dismiss}
				onClick={props.onConfirm}
				type="button"
			>
				×
			</button>

			<div className={classes.header}>
				<div className={classes["div_image_v"]}>
					<div className={classes.image}>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<path
									d="M20 7L9.00004 18L3.99994 13"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>{" "}
							</g>
						</svg>
					</div>
				</div>
				<div className={classes.content}>
					<span className={classes.title}>Done</span>
					<p className={classes.message}>
						Your account has been updated successfully
					</p>
				</div>
			</div>
		</div>
	);
}
