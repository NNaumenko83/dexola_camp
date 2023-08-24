import { ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

interface IContainerProps {
	children: ReactNode;
	footerborder?: string;
}

export const Container: React.FC<IContainerProps> = ({ children, footerborder }) => {
	return <ContainerStyled $footerborder={footerborder}>{children}</ContainerStyled>;
};
