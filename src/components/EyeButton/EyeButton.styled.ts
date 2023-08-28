import { styled } from "styled-components";

export const Button = styled.button`
	background: transparent;
	width: 24px;
	height: 24px;
	color: ${props => props.theme.colors.eyeDefaultColor};
	transition: color 0.3s;

	&:hover,
	&:focus {
		color: ${props => props.theme.colors.eyeHoverColor};
	}
`;
