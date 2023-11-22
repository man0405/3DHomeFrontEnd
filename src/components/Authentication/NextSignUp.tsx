"use client";
import Image from "next/image";
import Link from "next/link";

import classes from "./SignIn.module.css";
import Card from "../ui/Card/Card";
import Loader from "../ui/Loader/Loader";
import { useAppSelector } from "@/redux/hooks";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { infoCheck } from "@/dto/auth.dto";

const NextSignUp = () => {
	const router = useRouter();
	const appUseSelection = useAppSelector((state) => state.user);
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState<{
		email?: string;
		password?: string;
		firstName?: string;
		lastName?: string;
		phone?: string;
	}>();
	const [error, setError] = useState<null | {
		message: string;
		type: string;
		code: string;
	}>();
	const [finish, setFinish] = useState<boolean>(false);

	const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		return setInfo((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};

	useEffect(() => {
		if (!appUseSelection.email || !appUseSelection.password) {
			router.push("/auth/signup");
		} else {
			setInfo({
				...info,
				email: appUseSelection.email,
				password: appUseSelection.password,
			});
		}
	}, [appUseSelection.email, appUseSelection.password]);

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(info);

		if (
			info?.email &&
			info?.password &&
			info?.firstName &&
			info?.lastName &&
			info?.phone
		) {
			const { email, password, firstName, lastName, phone } = info;
			console.log("file: NextSignUp.tsx:52 ~ submitHandler ~ info:", info);
			const validation = infoCheck({
				firstName,
				lastName,
				phone,
			});
			if (validation) {
				console.log(
					"file: NextSignUp.tsx:66 ~ submitHandler ~ validation:",
					validation
				);
				setError(validation);
				return;
			}
			try {
				setLoading(true);
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							password: password,
							firstName: firstName,
							lastName: lastName,
							phone: phone,
						}),
					}
				);
				if (!response.ok) {
					throw new Error("Something went wrong");
				}
				const data = await response.json();
				if (data.result === "true") {
					// setCookie("uss", data.token, { maxAge: 60 * 60 });
					setFinish(true);
					setTimeout(() => {
						router.push("/auth/signin");
					}, 5000);
				} else {
					setError({ message: data.message, code: data.code, type: "all" });
				}
			} catch (error: any) {
				setError({ message: error.message, type: "", code: "499" });
			}
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loader />}
			{!finish && (
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
							<h2>Setup Your Account</h2>
							<h5>🤘 Let's start your 3D journey</h5>
						</div>
						{error && <div className="error">{error.message}</div>}
						<form onSubmit={submitHandler}>
							<label
								htmlFor={"firstName"}
								className={`${classes.label} ${
									error?.type === "firstName" ? "error" : ""
								}`}
							>
								First Name*
							</label>
							<input
								className={`${classes.input} ${
									error?.type === "firstName" ? "error" : ""
								}`}
								onChange={inputChangeHandler}
								required={true}
								id={"firstName"}
								type={"firstName"}
								placeholder={"First Name"}
							/>
							<label
								htmlFor={"Last Name"}
								className={`${classes.label} ${
									error?.type === "lastName" ? "error" : ""
								}`}
							>
								Last Name*
							</label>
							<input
								className={`${classes.input} ${
									error?.type === "lastName" ? "error" : ""
								}`}
								required={true}
								onChange={inputChangeHandler}
								id={"lastName"}
								type={"text"}
								placeholder={"Create password"}
							/>
							<label
								htmlFor={"phone"}
								className={`${classes.label} ${
									error?.type === "phone" ? "error" : ""
								}`}
							>
								Phone Number*
							</label>
							<input
								className={`${classes.input} ${
									error?.type === "phone" ? "error" : ""
								}`}
								required={true}
								onChange={inputChangeHandler}
								id={"phone"}
								type={"text"}
								placeholder={"Phone Number"}
							/>
							<button
								className={`${classes.btn} ${classes.active} `}
								style={{ marginTop: "1.6rem" }}
								type="submit"
							>
								Finish
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
			)}
			{finish && (
				<div
					className="center"
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<p style={{ width: "60vw", fontSize: "4rem", textAlign: "center" }}>
						Please check your email and active your account
					</p>
					<p
						style={{
							width: "50vw",
							fontSize: "2rem",
							textAlign: "center",
							display: "inline-block",
						}}
					>
						The website will automatically switch pages after 5 seconds or you
						can click the
						<Link
							href={"/auth/signin"}
							style={{
								display: "inline-block",
								marginLeft: ".5rem",
								fontSize: "2rem",
								color: "blue",
							}}
						>
							Link
						</Link>
					</p>
				</div>
			)}
		</>
	);
};

export default NextSignUp;
