"use client";

import GalleryItem from "./GalleryItem";
import classes from "./Gallery.module.css";

const Gallery = (props: { data: { Id: string; getPath: string }[] }) => {
	return (
		<>
			<div className={classes["list-wrap"]}>
				{props.data.map((item) => (
					<GalleryItem image={item.getPath} key={item.Id} />
				))}
			</div>
		</>
	);
};

export default Gallery;
