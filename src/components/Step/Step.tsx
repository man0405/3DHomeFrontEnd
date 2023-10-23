import Image from "next/image";
import { IoLayers, IoCreate, IoHome } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import StepItem from "./StepItem";

import classes from "./Step.module.css";
const Step = () => {
	return (
		<section className={`${classes.step} container`}>
			<div className={classes.image}>
				<Image
					src={"/assets/images/step.png"}
					alt="Step logo"
					width={800}
					height={800}
				/>
			</div>
			<div className={classes.content}>
				<div className={classes.title}>
					Simple
					<span className="underline">Step,</span>
					<br />
					Big
					<span className="underline">Move</span>
				</div>
				<p className={classes.description}>
					Or, or, or. Who, in turn, is troubled by the times, and they are
					similar in labor. Those who reject us are his pleasure. He prevents
					pleasure and never likes it. Neither another architect nor the pain of
					birth. So in the blandishments of labor, which are never.
				</p>
				<ul className={classes.list}>
					<StepItem
						icon={<IoCreate />}
						title="Design your dream"
						className="active"
					/>
					<StepItem icon={<IoLayers />} title="Build and release" />
					<StepItem icon={<IoHome />} title="Ready to be occupied" />
				</ul>
				<a href="tel:0339228240" className="button">
					<span>Contact us</span>
					<BsTelephone />
				</a>
			</div>
		</section>
	);
};

export default Step;
