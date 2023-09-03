type Values = { email: string; phone: string; password: string; confirmPassword: string };

export const simulateRequest = async (values: Values): Promise<{ message: string; mail: string }> => {
	return new Promise(res => {
		setTimeout(() => {
			res({ message: "Registration successful", mail: values.email });
		}, 2000);
	});
};
