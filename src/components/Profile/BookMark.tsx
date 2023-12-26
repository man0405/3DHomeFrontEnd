import React, { useEffect } from "react";

import classes from "./BookMark.module.css";

import ProjectList from "../Project/ProjectList";
import { useFetch } from "@/hook/useFetch";
import { HouseInfo, customPage } from "@/util/type";

export default function BookMark() {
	const { data, loading, error, fetchData } = useFetch<customPage<HouseInfo>>();
	useEffect(() => {
		fetchData({ method: "GET", link: "api/v1/seen/0" });
	}, []);
	return (
		<section className={`container ${classes.saved}`}>
			<h1>Seen Project</h1>
			{data && <ProjectList data={data.content} />}
		</section>
	);
}
