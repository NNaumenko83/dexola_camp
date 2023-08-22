import React, { ReactNode } from "react";
import { TitleStyled } from "./Title.styled";

type ITitleProps = {
	children: ReactNode;
};

export const Title: React.FC<ITitleProps> = ({ children }) => {
	return <TitleStyled>{children}</TitleStyled>;
};
