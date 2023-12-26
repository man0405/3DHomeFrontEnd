import Project from "./Project";
import classes from "./ProjectList.module.css";
import { HouseInfo } from "@/util/type";
const ProjectList = (props: { data: HouseInfo[] }) => {
	return (
		<div className={classes.list}>
			<ul>
				{props.data.map((item) => (
					<Project
						key={item.id}
						id={item.id}
						name={item.name}
						desc={item.description}
						image={
							item.images[0]
								? item.images[0].getPath
								: "/assets/images/photo-1545324418-cc1a3fa10c00.webp"
						}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;
