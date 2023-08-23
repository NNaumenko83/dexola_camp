import React from "react";
import { ReactNode } from "react";
import { TitleWrapperStyled } from "./TitleWrapper.styled";

type ITitleWrapperProps = {
	children: ReactNode;
};

export const TitleWrapper: React.FC<ITitleWrapperProps> = ({ children }) => {
	return <TitleWrapperStyled>{children}</TitleWrapperStyled>;
};
