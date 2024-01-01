"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";
import Gallery from "@/components/Gallery/Gallery";
import Heading from "@/components/ui/type/Heading";
import Function from "@/components/Function/Function";

import Loading from "./loading";
import { useFetch } from "@/hook/useFetch";
import { ApiResponse } from "@/util/type";

const DUMMY_DATA = {
	page: 1,
	per_page: 10,
	total: 5,
	data: [
		{
			id: 1,
			image: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
		},
		{
			id: 2,
			image: "/assets/images/photo-1493606371202-6275828f90f3.webp",
		},
		{
			id: 3,
			image: "/assets/images/photo-1515263487990-61b07816b324.webp",
		},
		{
			id: 4,
			image: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",
		},
		{
			id: 5,
			image: "/assets/images/photo-1580216643062-cf460548a66a.webp",
		},
		{
			id: 6,
			image: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
		},
		{
			id: 7,
			image: "/assets/images/photo-1493606371202-6275828f90f3.webp",
		},
		{
			id: 8,
			image: "/assets/images/photo-1515263487990-61b07816b324.webp",
		},
		{
			id: 9,
			image: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",
		},
		{
			id: 10,
			image: "/assets/images/photo-1580216643062-cf460548a66a.webp",
		},
	],
};

const GalleryPage = () => {
	const searchParams = useSearchParams()!;
	const { data, loading, fetchData, error } = useFetch<ApiResponse>();

	const page = searchParams.get("page") == null ? 1 : searchParams.get("page");
	useEffect(() => {
		fetchData({
			method: "GET",
			link: `image/library?page=${page}`,
		});
	}, [page]);

	return (
		<section className="container">
			<Heading first="Photo" second="Gallery" />
			{data && (
				<>
					<Suspense fallback={<Loading />}>
						<Gallery data={data?.response.content} />
					</Suspense>
					<Function
						page={data.response.pageable.pageNumber + 1}
						total={data.response.totalPages}
					/>
				</>
			)}
		</section>
	);
};

export default GalleryPage;
