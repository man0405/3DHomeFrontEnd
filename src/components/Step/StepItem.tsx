import classes from "./StepItem.module.css";

const StepItem = (props: {
	icon: React.ReactNode;
	title: string;
	className?: string;
}) => {
	return (
		<li
			className={`${classes.item} ${
				props.className ? classes[props.className] : ""
			}`}
		>
			{props.icon}
			<span>{props.title}</span>
		</li>
	);
};

export default StepItem;
