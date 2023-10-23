import Image from "next/image";
import { FaHandsClapping } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import classes from "./SignIn.module.css";
import Card from "../ui/Card/Card";
import Input from "../ui/Input/Input";

const SignUp = () => {
	return (
		<Card className={classes.box}>
			<div className={classes.left}>
				<div className={classes.logo}>
					<Image
						src={"/assets/images/Bank.png"}
						alt="Logo"
						width={50}
						height={50}
					/>
					<h3>3D Home</h3>
				</div>
				<div className={classes.title}>
					<h2>
						Welcome Back <FaHandsClapping />{" "}
					</h2>
					<h5>We are happy to have you back</h5>
				</div>
				<form>
					<Input
						id="fullname"
						name="Your fullname*"
						type="text"
						placeholder="Enter your name"
						required={true}
					/>
					<Input
						id="email"
						name="Email address*"
						type="email"
						placeholder="Enter email"
						required={true}
					/>
					<Input
						id="password"
						name="Create password*"
						type="password"
						required={true}
						placeholder="Create a password"
					/>
					<div className={classes.term}>
						<input type="checkbox" />
						<label htmlFor="checkbox">I agree to terms & conditions</label>
					</div>
					<button className={`${classes.btn} ${classes.active} `}>
						Register Account
					</button>
					<p>Or</p>
					<button className={`${classes.btn} ${classes.google} `}>
						{" "}
						<FcGoogle />
						Register with Google
					</button>
				</form>
			</div>
			<div className={classes.right}>
				<Image
					src={"/assets/images/signup.png"}
					alt="Sign In"
					width={960}
					height={1050}
				/>
			</div>
		</Card>
	);
};

export default SignUp;
