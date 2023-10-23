"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import classes from "./Banner.module.css";

const DUMMY_DATA = [
	"Happiness is spreading inspiration full of energy.",
	"Happiness is love and affection all around.",
	"Happiness is nurturing the collective nest throughout Vietnam.",
];

const Banner = () => {
	const [textTraverse, setTextTraverse] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const textToDisplay = DUMMY_DATA[currentIndex];
		let currentLength = 0;
		let isErasing = false;

		const timer = setInterval(() => {
			if (!isErasing) {
				if (currentLength < textToDisplay.length) {
					setTextTraverse(textToDisplay.slice(0, currentLength + 1));
					currentLength++;
				} else {
					isErasing = true;
				}
			} else {
				if (currentLength > 0) {
					setTextTraverse(textToDisplay.slice(0, currentLength - 1));
					currentLength--;
				} else {
					isErasing = false;
					setCurrentIndex((prevIndex) => (prevIndex + 1) % DUMMY_DATA.length);
				}
			}
		}, 100);
		return () => {
			clearInterval(timer);
		};
	}, [currentIndex]);

	return (
		<section className={classes.banner}>
			<div className={classes.overlay}></div>
			<div className={classes.image}>
				<Image
					src={"/assets/images/banner.jpg"}
					alt=""
					width={1920}
					height={1080}
				></Image>
			</div>
			<div className={classes.content}>
				<h1 className={classes.title}>A place filled with happiness</h1>
				<div className={classes.desc}>
					<span>{textTraverse}</span>
				</div>
			</div>
		</section>
	);
};

export default Banner;
