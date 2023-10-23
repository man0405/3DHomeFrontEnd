import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";
import { FaFacebook, FaYoutube, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className={`container ${classes.footer}`} id="contact">
			<div className={classes.branch}>
				<div className={classes.logo}>
					<Image
						src={"/assets/images/Bank.png"}
						alt="logo"
						width={38}
						height={38}
					/>
					<span>3D HOME</span>
				</div>
				<div className={classes.socials}>
					<h3>Follow on social service</h3>
					<div className={classes.icons}>
						<Link href={"https://www.facebook.com/"}>
							<FaFacebook />
						</Link>
						<Link href={"https://www.youtube.com/"}>
							<FaYoutube />
						</Link>
						<Link href={"https://twitter.com/"}>
							<FaSquareXTwitter />
						</Link>
					</div>
				</div>
			</div>
			<div className={classes.other}>
				<div className={classes.link}>
					<h2>Links</h2>
					<ul>
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/"}>Help center</Link>
						</li>
						<li>
							<Link href={"/"}>Service</Link>
						</li>
					</ul>
				</div>
				<div className={classes.resource}>
					<h2>Resource</h2>

					<ul>
						<li>
							<Link href={"/"}>About us</Link>
						</li>
						<li>
							<Link href={"/"}>Carrier</Link>
						</li>
						<li>
							<Link href={"/"}>Legal Notice</Link>
						</li>
					</ul>
				</div>
				<div className={classes.contacts}>
					<h2>Contacts</h2>
					<ul>
						<li>Me Nhu, Thanh Khe</li>
						<li>Support</li>
						<li>+84 339 228 240</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
