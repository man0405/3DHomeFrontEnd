import classes from "./UserItem.module.css";

type Props = {
	children: React.ReactNode;
};

const UserItem = (props: Props) => {
	return <li className={classes.item}>{props.children}</li>;
};

export default UserItem;
