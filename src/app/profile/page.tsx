"use client";
import Profile from "@/components/Profile/Profile";
import BookMark from "@/components/Profile/BookMark";
import { useEffect, useState } from "react";
import { useFetch } from "@/hook/useFetch";
import Loader from "@/components/ui/Loader/Loader";
import { HouseInfo, customPage } from "@/util/type";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { customerAction } from "@/redux/customer";

const ProfilePage = () => {
	const { data, loading, error, fetchData } = useFetch<{
		name: string;
		phone: string;
	}>();
	const dispatch = useAppDispatch();
	const selection = useAppSelector((state) => state.customer);

	useEffect(() => {
		if (selection.name === "") {
			fetchData({
				method: "GET",
				link: "api/v1/info",
			});
		}
	}, []);

	useEffect(() => {
		if (data) {
			dispatch(customerAction.store(data));
		}
	}, [data]);

	return (
		<>
			{selection && (
				<>
					<Profile name={selection.name} phone={selection.phone} />
					<BookMark />
				</>
			)}
		</>
	);
};

export default ProfilePage;
