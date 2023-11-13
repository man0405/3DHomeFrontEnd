"use client";
import React from "react";
import classes from "./Change.module.css";

export default function ChangePhone() {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="phone">Phone</label>
			<input
				type="tel"
				id="phone"
				name="phone"
				pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
			/>
			<button className="button" type="submit">
				Save Changes
			</button>
		</form>
	);
}
