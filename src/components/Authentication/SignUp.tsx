"use client";
import Image from "next/image";
import { ChangeEventHandler, useState } from "react";

import { FaHandsClapping } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { signup } from "../../dto/auth.dto";

import classes from "./SignIn.module.css";
import Card from "../ui/Card/Card";
import Loader from "../ui/Loader/Loader";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { userAction } from "@/redux/user";

const SignUp = () => {
	const router = useRouter();
	const [error, setError] = useState<null | {
		message: string;
		type: string;
		code: string;
	}>();
	const [loading, setLoading] = useState(false);

	const [info, setInfo] = useState<{
		email?: string;
		password?: string;
		confirm?: string;
	}>();

	const dispatch = useAppDispatch();

	const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		return setInfo((prev) => {
			return {
				...prev,
				[event.target.id]: event.target.value,
			};
		});
	};

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		if (info?.confirm && info?.email && info?.password) {
			const { email, password, confirm } = info;
			const validation = signup({ email, password, confirm });
			if (validation) {
				setError(validation);
			} else {
				setError(null);
				try {
					setLoading(true);
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup/check`,
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
					if (data.result === "true") {
						dispatch(userAction.store({ email, password }));
						router.push("/auth/signup/next-step");
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
				setLoading(false);
			}
		}
	};
	return (
		<>
			{loading && <Loader />}
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
							htmlFor={"email"}
							className={`${classes.label} ${
								error?.type === "email" || error?.code === "all" ? "error" : ""
							}`}
						>
							Email address*
						</label>
						<input
							className={`${classes.input} ${
								error?.type === "email" || error?.code === "all" ? "error" : ""
							}`}
							onChange={inputChangeHandler}
							required={true}
							id={"email"}
							type={"email"}
							placeholder={"Enter email"}
						/>
						<label
							htmlFor={"password"}
							className={`${classes.label} ${
								error?.type === "password" || error?.code === "all"
									? "error"
									: ""
							}`}
						>
							Create password*
						</label>
						<input
							className={`${classes.input} ${
								error?.type === "password" || error?.code === "all"
									? "error"
									: ""
							}`}
							onChange={inputChangeHandler}
							required={true}
							id={"password"}
							type={"password"}
							placeholder={"Create password"}
						/>
						<label
							htmlFor={"confirm"}
							className={`${classes.label} ${
								error?.type === "confirmPassword" || error?.code === "all"
									? "error"
									: ""
							}`}
						>
							Re-enter password*
						</label>
						<input
							className={`${classes.input} ${
								error?.type === "confirmPassword" || error?.code === "all"
									? "error"
									: ""
							}`}
							onChange={inputChangeHandler}
							required={true}
							id={"confirm"}
							type={"password"}
							placeholder={"Re-enter password"}
						/>

						<div className={classes.term}>
							<input type="checkbox" required />
							<label htmlFor="checkbox">I agree to terms & conditions</label>
						</div>
						<button
							className={`${classes.btn} ${classes.active} `}
							type="submit"
						>
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
		</>
	);
};

export default SignUp;
