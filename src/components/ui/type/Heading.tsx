import classes from "./Heading.module.css";
const Heading = (props: { first: string; second: string }) => {
	return (
		<h2 className={classes.heading}>
			{props.first}
			<br />
			<span className="bold">{props.second}</span>
		</h2>
	);
};

export default Heading;
