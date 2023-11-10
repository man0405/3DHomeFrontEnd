"use client";
import Heading from "@/components/ui/type/Heading";
import Function from "@/components/Function/Function";
import { Suspense } from "react";
import ProjectList from "@/components/Project/ProjectList";
import Loading from "./loading";

const DUMMY_DATA = {
	page: 1,
	per_page: 5,
	total: 5,
	data: [
		{
			id: 1,
			name: "Low Spurge",
			desc: "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
			image: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
		},
		{
			id: 2,
			name: "Ragweed",
			desc: "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
			image: "/assets/images/photo-1493606371202-6275828f90f3.webp",
		},
		{
			id: 3,
			name: "Little White Bird's-foot",
			desc: "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
			image: "/assets/images/photo-1515263487990-61b07816b324.webp",
		},
		{
			id: 4,
			name: "Bog Clermontia",
			desc: "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
			image: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",
		},
		{
			id: 5,
			name: "Fissidens Moss",
			desc: "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
			image: "/assets/images/photo-1580216643062-cf460548a66a.webp",
		},
	],
};

const ProjectPage = () => {
	return (
		<section className="container">
			<Heading first="Our" second="Project" />
			<Suspense fallback={<Loading />}>
				<ProjectList data={DUMMY_DATA.data} />
			</Suspense>
			<Function page={DUMMY_DATA.page} total={DUMMY_DATA.total} />
		</section>
	);
};

export default ProjectPage;
