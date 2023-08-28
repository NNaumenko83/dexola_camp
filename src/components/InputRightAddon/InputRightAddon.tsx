import { ReactNode } from "react";

interface IInputRightAddonProps {
	children: ReactNode;
}

export const InputRightAddon: React.FC<IInputRightAddonProps> = ({ children }) => {
	return <div>{children}</div>;
};
