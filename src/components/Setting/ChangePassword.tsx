"use client";
import React, { useState } from "react";
import classes from "./Change.module.css";
import { useFetch } from "@/hook/useFetch";
import { ShowModalDemo } from "../ui/Modal/ShowModal";
import AlertModal from "../ui/Modal/AlertModal";

export default function ChangePassword() {
	const [dataForm, setDataForm] = useState({});
	const { data, loading, error, fetchData } = useFetch();
	const [confirm, setConfirm] = useState(false);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		fetchData({
			method: "PUT",
			body: dataForm,
			link: "api/v1/password",
		});
		setConfirm(true);
	};
	const onConfirm = () => {
		setConfirm(false);
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
		<>
			{data && confirm && (
				<ShowModalDemo onConfirm={onConfirm} element={<AlertModal />} />
			)}
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
		</>
	);
}
