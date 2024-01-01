"use client";
import React, { useState } from "react";

import classes from "./Change.module.css";
import { useFetch } from "@/hook/useFetch";
import { ShowModalDemo } from "../ui/Modal/ShowModal";
import AlertModal from "../ui/Modal/AlertModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { customerAction } from "@/redux/customer";

export default function ChangePhone() {
	const selection = useAppSelector((state) => state.customer);
	const [showError, setShowError] = useState(false);
	const dispatch = useAppDispatch();
	const [dataForm, setDataForm] = useState({
		phone: selection.phone,
	});
	const { data, loading, error, fetchData } = useFetch();
	const [confirm, setConfirm] = useState(false);
	const submitHandler = async (e: React.FormEvent) => {
		if (dataForm.phone.trim() === "") {
			setShowError(true);
			return;
		}
		e.preventDefault();
		dispatch(customerAction.storePhone({ phone: dataForm.phone }));

		await fetchData({
			method: "PUT",
			body: dataForm,
			link: "api/v1/phone",
		});
		setShowError(false);
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
				<label htmlFor="phone" className={showError ? "error" : ""}>
					Phone
				</label>
				<input
					type="text"
					id="phone"
					className={showError ? "error" : ""}
					name="phone"
					value={dataForm.phone}
					onChange={handleChange}
				/>
				<button className="button" type="submit">
					Save Changes
				</button>
			</form>
		</>
	);
}
