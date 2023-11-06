import classes from "./loading.module.css";
import Heading from "@/components/ui/type/Heading";

const Loading = () => {
	return (
		<section className="container">
			<Heading first="Photo" second="Gallery" />
			<div className={`${classes["list-wrap"]}`}>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
				<div className={`${classes.item} loading`}></div>
			</div>
		</section>
	);
};

export default Loading;
