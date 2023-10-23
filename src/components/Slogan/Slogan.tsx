import classes from "./Slogan.module.css";
import SloganItem from "./SloganItem";
import {
	IoDiamond,
	IoBonfireSharp,
	IoFlashSharp,
	IoApps,
	IoDiscOutline,
	IoInfinite,
} from "react-icons/io5";

const DUMMY_DATA = [
	{
		id: 1,
		icon: <IoDiamond />,
		title: "In the heart of a bustling city",
		description:
			"Individuals find themselves yearning for moments of respite, seeking solace in the simple pleasures that can offer a temporary escape from the tumultuous world that surrounds them.",
	},

	{
		id: 2,
		icon: <IoBonfireSharp />,
		title: "In the realm of artistic creation",
		description:
			"Creators grapple with the daunting expanse before them, endeavoring to breathe life into their visions, while battling the ever-present shadow of doubt that often shrouds the creative process.",
	},

	{
		id: 3,
		icon: <IoFlashSharp />,
		title: "Amidst the trials and tribulations of the human experience",
		description:
			"Individuals confront the myriad challenges and uncertainties that life presents, yearning for a guiding light, a beacon of hope that can illuminate their path and grant them the strength to persevere.",
	},

	{
		id: 4,
		icon: <IoApps />,
		title: "Within the intricate tapestry of human relationships",
		description:
			"People strive to understand the enigmatic dance of human connection, all the while navigating the delicate balance between vulnerability and self-preservation.",
	},

	{
		id: 5,
		icon: <IoDiscOutline />,
		title: "In the vast expanse of the natural world",
		description:
			"Explorers embark on journeys into the heart of the wilderness, seeking to immerse themselves in the raw beauty of the Earth and discover the profound secrets hidden within its remote corners.",
	},

	{
		id: 6,
		icon: <IoInfinite />,
		title: "As the rhythms of life ebb and flow",
		description:
			"Humans grapple with the impermanence of existence, striving to find meaning and purpose in the fleeting moments that comprise their journey through the ever-changing tapestry of life.",
	},
];

const Slogan = () => {
	return (
		<section className={`${classes.slogan} container`}>
			<ul>
				{DUMMY_DATA.map((data) => (
					<SloganItem key={data.id} {...data} />
				))}
			</ul>
		</section>
	);
};

export default Slogan;
