"use client";
import Profile from "@/components/Profile/Profile";
import BookMark from "@/components/Profile/BookMark";
import { useEffect } from "react";
import { useFetch } from "@/hook/useFetch";
import Loader from "@/components/ui/Loader/Loader";

const ProfilePage = () => {
	const { data, loading, error, fetchData } = useFetch<{
		name: string;
		phone: string;
	}>();
	useEffect(() => {
		fetchData({
			method: "GET",
			link: "api/v1/info",
		});
	}, []);

	return (
		<>
			{error && <h1>{error}</h1>}
			{loading && <Loader />}
			{data && (
				<>
					<Profile name={data.name} phone={data.phone} />
					<BookMark />
				</>
			)}
		</>
	);
};

export default ProfilePage;
