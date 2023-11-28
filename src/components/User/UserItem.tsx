import { MouseEventHandler } from "react";
import classes from "./UserItem.module.css";

type Props = {
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLLIElement>;
};

const UserItem = (props: Props) => {
	return (
		<li
			className={classes.item}
			onClick={props.onClick}
			style={{ cursor: "pointer" }}
		>
			{props.children}
		</li>
	);
};

export default UserItem;
