"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { login } from "../../dto/auth.dto";
import { setCookie } from "cookies-next";

import classes from "./SignIn.module.css";
import { FaHandsClapping } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Card from "../ui/Card/CardClient";

import { useRouter } from "next/navigation";

const SignIn = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const [error, setError] = useState<null | {
		message: string;
		type: string;
		code: string;
	}>();
	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Submit");
		if (emailRef.current && passwordRef.current) {
			const email = emailRef.current.value;
			const password = passwordRef.current.value;
			const validation = login({ email, password });
			if (validation) {
				setError(validation);
			} else {
				setError(null);
				try {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/api/v1/signin`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: email,
								password: password,
							}),
						}
					);
					if (!res.ok) {
						throw new Error("Something went wrong");
					}
					const data = await res.json();
					if (data.token) {
						setCookie("uss", data.token, { maxAge: 60 * 60 });
						router.push("/home");
					} else {
						setError({ message: data.message, code: data.code, type: "all" });
						console.log({
							message: data.message,
							code: data.code,
							type: "all",
						});
					}
				} catch (error: any) {
					setError({ message: error.message, type: "", code: "499" });
				}
			}
		}
	};
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
				{error && <div className="error">{error.message}</div>}
				<form onSubmit={submitHandler}>
					<label
						htmlFor="email"
						className={`${classes.label} ${
							error?.type === "email" || error?.type === "all" ? "error" : ""
						}`}
					>
						Email address*
					</label>
					<input
						className={`${classes.input} ${
							error?.type === "email" || error?.type === "all" ? "error" : ""
						}`}
						required={true}
						id="email"
						type="email"
						placeholder="Enter email"
						ref={emailRef}
					/>
					<label
						htmlFor="password"
						className={`${classes.label} ${
							error?.type === "password" || error?.type === "all" ? "error" : ""
						}`}
					>
						Password*
					</label>
					<input
						className={`${classes.input} ${
							error?.type === "password" || error?.type === "all" ? "error" : ""
						}`}
						required={true}
						id="password"
						type="password"
						placeholder="Enter Password"
						ref={passwordRef}
					/>

					<div className={classes.term}>
						<input type="checkbox" required={true} />
						<label htmlFor="checkbox">I agree to terms & conditions</label>
					</div>
					<button
						style={{ cursor: "pointer" }}
						className={`${classes.btn} ${classes.active}  `}
						type="submit"
					>
						Sign In
					</button>
					<p>Or</p>
					<button className={`${classes.btn} ${classes.google} `}>
						{" "}
						<FcGoogle />
						Sign In with Google
					</button>
				</form>
			</div>
			<div className={classes.right}>
				<Image
					src={"/assets/images/signin.png"}
					alt="Sign In"
					width={960}
					height={1050}
				/>
			</div>
		</Card>
	);
};

export default SignIn;
