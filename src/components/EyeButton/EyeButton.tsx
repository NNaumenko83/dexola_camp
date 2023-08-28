import React from "react";

import Icon from "../Icon/Icon";
import { Button } from "./EyeButton.styled";

interface IEyeButtonProps {
	showPassword: boolean;
	onClick?: () => void;
}

export const EyeButton: React.FC<IEyeButtonProps> = ({ onClick, showPassword }) => {
	return (
		<Button type="button" onClick={onClick}>
			{showPassword ? (
				<Icon name="eye-opened" width={24} height={24} />
			) : (
				<Icon name="eye-closed" width={24} height={24} />
			)}
		</Button>
	);
};
