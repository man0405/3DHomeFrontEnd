"use client";
import React, { useState } from "react";

import classes from "./Change.module.css";
import { useFetch } from "@/hook/useFetch";

export default function ChangePhone() {
	const [dataForm, setDataForm] = useState({});
	const { data, loading, error, fetchData } = useFetch();
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		await fetchData({
			method: "PUT",
			body: dataForm,
			link: "api/v1/phone",
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
			<label htmlFor="phone">Phone</label>
			<input type="text" id="phone" name="phone" onChange={handleChange} />
			<button className="button" type="submit">
				Save Changes
			</button>
		</form>
	);
}
