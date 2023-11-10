import classes from "./Help.module.css";
import Heading from "@/components/ui/type/Heading";

const HelpPage = () => {
	return (
		<section className="container">
			<Heading first="Contact" second="Information" />
			<div className={classes.helps}>
				<div className={classes.information}>
					<h2>3D Home</h2>
					<h4 className={classes.address}>
						1234 Sample Street Austin Texas 76401
					</h4>
					<h4 className={classes.phone}>+84 339 228 240</h4>
					<h4 className={classes.mail}>vanman160504@gmail.com</h4>
					<div className="button">
						<a href="tel:34339228240">Contact us</a>
					</div>
				</div>
				<div className={classes.map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.7332975516606!2d108.24978007598567!3d15.975298241943936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1687222202926!5m2!1svi!2s"
						width="600"
						height="450"
						style={{ border: 0 }}
						loading="lazy"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default HelpPage;
