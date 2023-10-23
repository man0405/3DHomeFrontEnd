import ProjectDetail from "./ProjectDetail";
import data from "../../../MOCK_DATA.json";

import classes from "./ProjectReview.module.css";

const ProjectReview = () => {
	return (
		<div className={`${classes["project-review"]} container`} id="product">
			<h1 className={classes.heading}>Recent Project Review</h1>
			<div className={classes["project-detail"]}>
				<ul>
					{data.map((data) => (
						<li key={data.id}>
							<ProjectDetail {...data} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectReview;
