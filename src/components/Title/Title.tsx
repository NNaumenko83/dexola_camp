import React, { ReactNode } from "react";
import { TitleContainer, TitleStyled } from "./Title.styled";

type ITitleProps = {
	children: ReactNode;
};

export const Title: React.FC<ITitleProps> = ({ children }) => {
	return (
		<TitleContainer>
			<TitleStyled>{children}</TitleStyled>
		</TitleContainer>
	);
};
