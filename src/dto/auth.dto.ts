interface UserLoginDTO {
	email: string;
	password: string;
}
function validateEmail(email: string): boolean {
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
}
function validatePassword(password: string): boolean {
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
}

export const login = (userLogin: UserLoginDTO) => {
	const { email, password } = userLogin;
	if (!validateEmail(email)) {
		return { message: "Invalid email", type: "email", code: "400" };
	}
	if (!validatePassword(password)) {
		return {
			message:
				"The password should have at least 1 lowercase, 1 uppercase, 1 number, 1 symbol and at least 5 characters",
			type: "password",
			code: "400",
		};
	}
	return null;
};
