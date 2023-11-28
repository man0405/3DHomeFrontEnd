interface uiElement {
	className: string;
}

interface props extends uiElement {
	onClick?: () => {};
	children: React.ReactNode;
}

const Button = (props: props) => {
	return (
		<button onClick={props.onClick} className={props.className}>
			{props.children}
		</button>
	);
};

export default Button;
