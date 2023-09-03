export const simulateRequest = async (): Promise<{ message: string }> => {
	return new Promise(res => {
		setTimeout(() => {
			res({ message: "Registration successful" });
		}, 2000);
	});
};
