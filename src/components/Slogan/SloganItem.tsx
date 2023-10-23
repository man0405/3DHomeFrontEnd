import classes from "./SloganItem.module.css";

const SloganItem = (props: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => {
	return (
		<li>
			<div className={classes.image}>{props.icon}</div>
			<div className={classes.content}>
				<h3>{props.title}</h3>
				<h5>{props.description}</h5>
			</div>
		</li>
	);
};

export default SloganItem;
