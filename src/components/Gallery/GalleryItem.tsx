import Image from "next/image";
import classes from "./GalleryItem.module.css";

const GalleryItem = (prop: { image: string }) => {
	return (
		<div className={classes.item}>
			<Image src={prop.image} alt="" width={300} height={300}></Image>
		</div>
	);
};

export default GalleryItem;
