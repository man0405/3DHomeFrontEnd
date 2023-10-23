import classes from "./Review.module.css";
import ReviewItem from "@/components/Review/ReviewItem";

const DUMMY_DATA = {
	id: 1,
	name: "John Doe",
	description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
	image: "/assets/images/photo-1580216643062-cf460548a66a.webp",
};

const Review = () => {
	return (
		<section className={classes.Review} id="review">
			<div className={`${classes.review} container`}>
				<h1>What is our customer say</h1>
				<h4 className={classes.desc}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
				</h4>
				<ul>
					<ReviewItem {...DUMMY_DATA} />
					<ReviewItem {...DUMMY_DATA} />
				</ul>
			</div>
		</section>
	);
};

export default Review;
