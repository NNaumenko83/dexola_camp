import { ReactNode } from "react";
import { LeftAddon } from "./InputLeftAddon.styled";

interface IInputLeftAddonProps {
	children: ReactNode;
}

export const InputLeftAddon: React.FC<IInputLeftAddonProps> = ({ children }) => {
	return <LeftAddon>{children}</LeftAddon>;
};
