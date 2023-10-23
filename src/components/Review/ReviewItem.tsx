import Image from "next/image";
import classes from "./ReviewItem.module.css";

type Props = {
	id: number;
	name: string;
	description: string;
	image: string;
};

const ReviewItem = (props: Props) => {
	return (
		<li className={classes.item}>
			<div className={classes.author}>
				<div className={classes.image}>
					<Image
						src={props.image}
						alt="Hello"
						width={300}
						height={300}
						style={{ objectFit: "cover", width: "100%", height: "100%" }}
					></Image>
				</div>
				<div className={classes.name}>
					<h3>{props.name}</h3>
					<h5>Customer</h5>
				</div>
			</div>
			<div className={classes.desc}>
				<p>{props.description}</p>
				<div className={classes.time}>Written 2023</div>
			</div>
		</li>
	);
};

export default ReviewItem;
