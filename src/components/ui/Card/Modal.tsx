import React from "react";
import classes from "./Modal.module.css";

export default function Modal({ children }: { children: React.ReactNode }) {
	return <div className={classes.modal}>{children}</div>;
}
