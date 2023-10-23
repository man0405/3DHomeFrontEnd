import classes from "./User.module.css";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import {
	IoLogOut,
	IoSettingsSharp,
	IoInvertModeOutline,
} from "react-icons/io5";
import UserItem from "./UserItem";
const User = () => {
	return (
		<ul className={classes.list}>
			<UserItem>
				<BiSolidUserCircle />
				<Link href={"/profile"}>Your Profile</Link>
			</UserItem>
			<UserItem>
				<IoSettingsSharp />
				<Link href={"/setting"}>Setting</Link>
			</UserItem>
			<UserItem>
				<IoInvertModeOutline />
				<span>Mode</span>
			</UserItem>
			<UserItem>
				<IoLogOut />
				<span>Log Out</span>
			</UserItem>
		</ul>
	);
};

export default User;

// IoInvertModeSharp
