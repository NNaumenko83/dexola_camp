import React, { MouseEvent, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
	loading?: boolean;
	type?: "button" | "submit" | "reset";
	children: ReactNode;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ type = "button", children, onClick, ...otherProps }: ButtonProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<StyledButton type={type} onClick={handleClick} {...otherProps}>
			{children}
		</StyledButton>
	);
};
