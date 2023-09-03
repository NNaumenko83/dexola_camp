import { styled } from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	cursor: ${props => (props.disabled ? "no-drop" : "pointer")};

	color: ${props => props.theme.colors.buttonTextColor};
	background-color: ${props => props.theme.colors.buttonBackgroundColor};
	transition: all 300ms linear;
	&:not(:disabled):hover,
	&:not(:disabled):focus {
		background-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
	}
`;
