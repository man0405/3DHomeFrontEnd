import Image from "next/image";
import Link from "next/link";
import { BsArrowBarRight } from "react-icons/bs";
import classes from "./ProjectDetail.module.css";

type Project = {
	id: number;
	name: string;
	address: string;
	description: string;
	image: string;
};

const ProjectDetail = (props: Project) => {
	return (
		<>
			<div className={classes.image}>
				<Image
					src={props.image}
					alt="project"
					width={300}
					height={300}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
				></Image>
			</div>
			<div className={classes.content}>
				<h5 className={classes.address}>{props.address}</h5>
				<h2 className={classes.name}>{props.name}</h2>
				<div className={classes.button}>
					<Link href={`${props.id}`}>Read More</Link>
					<BsArrowBarRight />
				</div>
			</div>
		</>
	);
};

export default ProjectDetail;
