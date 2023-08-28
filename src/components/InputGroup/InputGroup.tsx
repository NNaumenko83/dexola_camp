import { ReactNode } from "react";

interface IInputGroupProps {
	children: ReactNode;
}

export const InputGroup: React.FC<IInputGroupProps> = ({ children }) => {
	return <div>{children}</div>;
};
