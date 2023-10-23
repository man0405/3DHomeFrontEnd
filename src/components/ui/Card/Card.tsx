import { ReactNode } from "react";

import classes from "./Card.module.css";

type Props = {
	children: ReactNode;
	className?: string;
};

const Card = ({ children, className }: Props) => {
	const name = className + " " + classes.card;
	return <div className={name}>{children}</div>;
};

export default Card;
