import React, { ReactNode } from "react";
import { SubTitleStyled } from "./SubTitle.styled";

type ITitleProps = {
	children: ReactNode;
};

export const SubTitle: React.FC<ITitleProps> = ({ children }) => {
	return <SubTitleStyled>{children}</SubTitleStyled>;
};
