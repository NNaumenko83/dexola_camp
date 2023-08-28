import { styled } from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${props => props.theme.colors.buttonTextColor};
	background-color: ${props => props.theme.colors.buttonBackgroundColor};
	transition: all 300ms linear;
	&:hover,
	&:focus {
		background-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
	}
`;
