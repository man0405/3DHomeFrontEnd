import classes from "./BubbleText.module.css";
const BubbleText = () => {
	return (
		<div className={classes.BubbleText}>
			<h2 className={classes.title}>
				{"Bringing Dreams to Life in 3D – Your Home, Your Imagination, Our Expertise."
					.split("")
					.map((letter, index) => (
						<span className={classes["hover-text"]} key={index}>
							{letter}
						</span>
					))}
			</h2>
		</div>
	);
};

export default BubbleText;
