import classes from "./PreMain.module.css";
import BubbleText from "@/components/BubbleText/BubbleText";
import ProjectReview from "@/components/ProjectReview/ProjectReview";
import Review from "@/components/Review/Review";
const PreMain = () => {
	return (
		<>
			<div className={classes.slogan}>
				<BubbleText></BubbleText>
			</div>
			<ProjectReview />
			<Review />
		</>
	);
};

export default PreMain;
