"use client";

import GalleryItem from "./GalleryItem";
import classes from "./Gallery.module.css";

const Gallery = (props: { data: { id: number; image: string }[] }) => {
	return (
		<>
			<div className={classes["list-wrap"]}>
				{props.data.map((item) => (
					<GalleryItem image={item.image} key={item.id} />
				))}
			</div>
		</>
	);
};

export default Gallery;
