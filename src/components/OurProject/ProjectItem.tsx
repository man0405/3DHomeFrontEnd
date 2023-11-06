import Image from "next/image";

import { IoMdSend } from "react-icons/io";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props: { id: number; name: string; image: string }) => {
	return (
		<li className={classes.item}>
			<div className={classes.overlay}></div>
			<h3 className={classes.name}>{props.name}</h3>
			<div className={classes.image}>
				<Image src={props.image} alt="project" width={500} height={500}></Image>
			</div>
			<div className={`${classes.es} button`}>
				<IoMdSend />
			</div>
		</li>
	);
};

export default ProjectItem;
