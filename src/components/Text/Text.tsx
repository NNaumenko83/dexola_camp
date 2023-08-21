import React, { ReactNode } from "react";
import { TextStyled } from "./Text.styled";

type ITextProps = {
	children: ReactNode;
};

export const Text: React.FC<ITextProps> = ({ children }) => {
	return <TextStyled>{children}</TextStyled>;
};
