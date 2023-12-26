"use client";
import React, { useState } from "react";

import classes from "./Change.module.css";
import { useFetch } from "@/hook/useFetch";
import { ShowModalDemo } from "../ui/Modal/ShowModal";
import AlertModal from "../ui/Modal/AlertModal";

export default function ChangePhone() {
	const [dataForm, setDataForm] = useState({});
	const { data, loading, error, fetchData } = useFetch();
	const [confirm, setConfirm] = useState(false);
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		await fetchData({
			method: "PUT",
			body: dataForm,
			link: "api/v1/phone",
		});
		setConfirm(true);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setDataForm((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};
	const onConfirm = () => {
		setConfirm(false);
	};
	return (
		<>
			{data && confirm && (
				<ShowModalDemo onConfirm={onConfirm} element={<AlertModal />} />
			)}
			<form onSubmit={submitHandler} className={classes.form}>
				<label htmlFor="phone">Phone</label>
				<input type="text" id="phone" name="phone" onChange={handleChange} />
				<button className="button" type="submit">
					Save Changes
				</button>
			</form>
		</>
	);
}
