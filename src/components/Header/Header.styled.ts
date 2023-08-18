import { styled } from "styled-components";
import { Button } from "../Button/Button";

export const HeaderContainer = styled.div`
	padding: 0.25rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledButton = styled(Button)`
	width: 8.5rem;
	height: 2.5rem;

	display: flex;
	gap: 8px;

	padding: 0.625rem 1rem;

	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.43;
	letter-spacing: 0.0175rem;
	color: ${props => props.theme.colors.buttonTextColor};
	background-color: ${props => props.theme.colors.buttonBackgroundColorColor};
`;
