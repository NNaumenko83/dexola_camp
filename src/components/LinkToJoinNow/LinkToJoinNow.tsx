import { StyledLink } from "./LinkToJoinNow.styled";
import { ReactNode } from "react";

interface ILinkProps {
	children: ReactNode;
	to: string;
}

export const Link = ({ to, children, ...otherProps }: ILinkProps) => {
	return (
		<StyledLink href={to} {...otherProps}>
			{children}
		</StyledLink>
	);
};
