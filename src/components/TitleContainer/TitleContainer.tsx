import React, { ReactNode } from "react";
import { ContainerStyledTitle } from "../Title/Title.styled";

type ITitleProps = {
	children: ReactNode;
};

export const TitleContainer: React.FC<ITitleProps> = ({ children }) => {
	return <ContainerStyledTitle>{children}</ContainerStyledTitle>;
};
