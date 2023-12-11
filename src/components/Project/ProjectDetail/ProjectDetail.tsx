"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./ProjectDetail.module.css";
import { BiArea } from "react-icons/bi";
import { GrDirections } from "react-icons/gr";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { TbToiletPaper } from "react-icons/tb";

import HeadingProject from "@/components/ui/type/HeadingProject";
import Interior from "./Interior";
import ShowModal from "@/components/ui/Modal/ShowModal";

const DUMMY_DATA = {
	owner: "Thinh Mai",
	avatar: "/assets/images/photo-1493606371202-6275828f90f3.webp",
	phone: "0339228240",
	email: "man@gmail.com",
	name: "DUMMY Project",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	src: "/assets/images/photo-1493606371202-6275828f90f3.webp",
	"process-1":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima voluptates, error nobis cumque voluptatem magni harum. Sed ipsum perferendis similique esse vel in reiciendis earum obcaecati ullam. Ullam, quam.",
	"process-2":
		"Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.",
	interior: [
		{
			id: 1,
			img: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
			category: "Modern",
			name: "Attack My Project",
			link: "/....",
		},
		{
			id: 2,
			img: "/assets/images/photo-1493606371202-6275828f90f3.webp",
			category: "Traditional",
			name: "Attack My Team",
			link: "/....",
		},
		{
			id: 3,
			img: "/assets/images/photo-1515263487990-61b07816b324.webp",

			category: "Japadi",
			name: "Attack My Japadi",
			link: "/....",
		},
		{
			id: 4,
			category: "Industrial",
			img: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",

			name: "Attack My Industrial",
			link: "/....",
		},
		{
			id: 5,
			category: "Contemporary",
			img: "/assets/images/photo-1580216643062-cf460548a66a.webp",

			name: "Attack My Contemporary",
			link: "/....",
		},
	],
};

export default function ProjectDetail() {
	const settings = {
		classesName: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "180px",
		slidesToShow: 2,
		speed: 500,
	};
	const first = DUMMY_DATA.name.split(" ")[0].toUpperCase();
	const second = DUMMY_DATA.name
		.slice(first.length + 1, DUMMY_DATA.name.length)
		.toUpperCase();

	const [modal, setModal] = useState(false);
	const onConfirm = () => {
		setModal(false);
	};
	const clickHandler = () => {
		setModal(true);
	};
	return (
		<>
			{modal && <ShowModal onConfirm={onConfirm} />}
			<HeadingProject first={first} second={second} desc={DUMMY_DATA.desc} />
			<div className={classes.detail}>
				<div className={`${classes.image} container`}>
					<Image
						src={DUMMY_DATA.src}
						alt="Hellos"
						width={1000}
						height={500}
					></Image>
				</div>
				<div className={`${classes["working-process"]} container`}>
					<div className={classes.subtile}>Working Process</div>
					<div className={classes.description}>
						<p>{DUMMY_DATA["process-1"]}</p>
						<p>{DUMMY_DATA["process-2"]}</p>
						<div className={classes.get}>
							<span>What You Get: </span>
							<ul>
								<li>Concept</li>
								<li>Design</li>
								<li>3D Modeling</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={classes.interior}>
					<div className={`${classes.subtile} container`}>Interior Service</div>

					<Slider {...settings}>
						{DUMMY_DATA.interior.map((item) => (
							<Interior {...item} key={item.id} />
						))}
					</Slider>
				</div>
				<div className={`container ${classes.price}`}>
					<div className={classes.subtile}>Price Detail</div>
					<div className={classes["more-inf"]}>
						<table className={classes.table}>
							<tbody>
								<tr>
									<td>
										<BiArea /> Land Size
									</td>
									<td>
										3000 m<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>
										<GrDirections /> Facing Direction
									</td>
									<td>Southeast</td>
								</tr>
								<tr>
									<td>
										<MdOutlineBedroomParent /> Bedrooms
									</td>
									<td>5</td>
								</tr>
							</tbody>
						</table>
						<table className={classes.table}>
							<tbody>
								<tr>
									<td>
										<IoPricetagOutline /> Price
									</td>
									<td>$ 3000 - $ 5000</td>
								</tr>

								<tr>
									<td>
										<BsBuilding /> Floor
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<TbToiletPaper /> Toilet
									</td>
									<td>4</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={` container ${classes.owner} `}>
					<div className={classes.avatar}>
						<img src={DUMMY_DATA.avatar} alt="" />
					</div>
					<div className={classes.info}>
						<div className={classes.name}>{DUMMY_DATA.owner}</div>
						<div className={classes.phone}>{DUMMY_DATA.phone}</div>
						<div className={classes.email}>{DUMMY_DATA.email}</div>
					</div>
				</div>
				<div className={`container ${classes.order}`}>
					<div className={classes.ready}>
						<h3>Ready to Order your Project ?</h3>
					</div>
					<div className={classes["get-order"]} onClick={clickHandler}>
						Get In Touch
						<IoChevronForward />
					</div>
				</div>
			</div>
		</>
	);
}
