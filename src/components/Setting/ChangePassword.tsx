"use client";
import React from "react";
import classes from "./Change.module.css";

export default function ChangePassword() {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="oldPassword">Old Password</label>
			<input type="password" id="oldPassword" />
			<label htmlFor="newPassword">New Password</label>
			<input type="password" id="newPassword" />
			<label htmlFor="againNewPassword">Again New Password</label>
			<input type="password" id="againNewPassword" />
			<button className="button" type="submit">
				Save Changes
			</button>
		</form>
	);
}
