import ProjectItem from "./ProjectItem";
import classes from "./OurProject.module.css";

const DUMMY_DATA = [
	{
		id: 1,
		name: "Thompson and Fisher",
		address: "109 Rieder Point",
		description:
			"luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
		image: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
	},
	{
		id: 2,
		name: "Wisoky-Okuneva",
		address: "979 Menomonie Park",
		description:
			"ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
		image: "/assets/images/photo-1493606371202-6275828f90f3.webp",
	},
	{
		id: 3,
		name: "Sporer LLC",
		address: "8764 Derek Lane",
		description:
			"curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut",
		image: "/assets/images/photo-1515263487990-61b07816b324.webp",
	},
	{
		id: 4,
		name: "Russel and Gulgowski",
		address: "071 8th Place",
		description:
			"vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in",
		image: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",
	},
];

const OurProject = () => {
	return (
		<section className={`${classes["our-project"]} container`}>
			<h2 className="underline">Our Project</h2>
			<ul className={classes.list}>
				{DUMMY_DATA.map((data) => (
					<ProjectItem
						key={data.id}
						id={data.id}
						name={data.name}
						image={data.image}
					/>
				))}
			</ul>
		</section>
	);
};

export default OurProject;
