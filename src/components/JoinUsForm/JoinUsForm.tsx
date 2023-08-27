import React from "react";
import { FormStyled } from "./JoinUsForm.styled";

export const JoinUsForm = () => {
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		console.log(form.elements);
	};

	return (
		<FormStyled autoComplete="off" onSubmit={handleSubmit}>
			<input type="mail" name="email" />
			<input type="phone" name="phone" />
			<input type="password" name="password" />
			<input type="password" name="confirmPasswors" />
			<button type="submit">Submit</button>
		</FormStyled>
	);
};
