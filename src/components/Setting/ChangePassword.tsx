"use client";
import React, { useState } from "react";
import classes from "./Change.module.css";
import { useFetch } from "@/hook/useFetch";

export default function ChangePassword() {
	const [dataForm, setDataForm] = useState({});
	const { data, loading, error, fetchData } = useFetch();

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		fetchData({
			method: "PUT",
			body: dataForm,
			link: "api/v1/password",
		});
		console.log("file: ChangePassword.tsx:15 ~ submitHandler ~ res:", {
			data,
			loading,
			error,
		});
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setDataForm((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="oldPassword">Old Password</label>
			<input type="password" id="oldPassword" onChange={handleChange} />
			<label htmlFor="newPassword">New Password</label>
			<input type="password" id="newPassword" onChange={handleChange} />
			<label htmlFor="againNewPassword">Again New Password</label>
			<input type="password" id="againNewPassword" onChange={handleChange} />
			<button className="button" type="submit">
				Save Changes
			</button>
		</form>
	);
}
