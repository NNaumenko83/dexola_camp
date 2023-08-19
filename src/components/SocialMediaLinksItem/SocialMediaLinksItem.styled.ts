import { styled } from "styled-components";

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-radius: 22%;
	color: ${props => props.theme.colors.socMediaIcons};

	transition: color 250ms linear;

	&:hover,
	&:focus {
		color: ${props => props.theme.colors.socMediaIconsHover};
	}
`;
