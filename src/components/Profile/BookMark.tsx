import React, { useEffect, useState } from "react";

import classes from "./BookMark.module.css";

import ProjectList from "../Project/ProjectList";
import { useFetch } from "@/hook/useFetch";
import { HouseInfo, customPage } from "@/util/type";

export default function BookMark() {
	const [states, setStates] = useState<customPage<HouseInfo>>();
	const [page, setPage] = useState(0);
	const { data, loading, error, fetchData } = useFetch<customPage<HouseInfo>>();

	useEffect(() => {
		console.log("file: BookMark.tsx:16 ~ BookMark ~ page:", page);

		fetchData({ method: "GET", link: `api/v1/seen/${page}` });
	}, [page]);
	useEffect(() => {
		if (data)
			setStates((prev) => ({
				content: [...(prev?.content || []), ...(data?.content || [])],
				pageable: {
					pageNumber: data.pageable.pageNumber,
					pageSize: data.pageable.pageSize,
					totalPages: data.pageable.totalPages,
				},
			}));
	}, [data]);
	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight - 5) {
			if (page > (states?.pageable.totalPages || 0)) {
				return;
			}
			setPage(page + 1);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [states]);
	return (
		<>
			{error && <h1>{error}</h1>}

			<section className={`container ${classes.saved}`}>
				<h1>Seen Project</h1>
				{states && <ProjectList data={states.content} />}
			</section>
			{loading && <h1>Loading</h1>}
		</>
	);
}
