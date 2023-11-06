import Project from "./Project";
import classes from "./ProjectList.module.css";
const ProjectList = (props: {
	data: { id: number; name: string; desc: string; image: string }[];
}) => {
	return (
		<div className={classes.list}>
			<ul>
				{props.data.map((item) => (
					<Project
						key={item.id}
						id={item.id}
						name={item.name}
						desc={item.desc}
						image={item.image}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;
