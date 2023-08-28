import { ReactNode } from "react";
import { RightAddon } from "./InputRightAddon.styled";

interface IInputRightAddonProps {
	children: ReactNode;
}

export const InputRightAddon: React.FC<IInputRightAddonProps> = ({ children }) => {
	return <RightAddon>{children}</RightAddon>;
};
