import { ReactNode } from "react";

interface IInputLeftAddonProps {
	children: ReactNode;
}

export const InputLeftAddon: React.FC<IInputLeftAddonProps> = ({ children }) => {
	return <div>{children}</div>;
};
