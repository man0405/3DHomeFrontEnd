import classes from "./Input.module.css";

type Props = {
	id: string;
	name: string;
	type: string;
	placeholder?: string;
	value?: string;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
	return (
		<>
			<label htmlFor={props.id} className={classes.label}>
				{props.name}
			</label>
			<input
				className={classes.input}
				required={props.required}
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</>
	);
};

export default Input;
