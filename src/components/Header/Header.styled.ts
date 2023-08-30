import { styled } from "styled-components";
import { Button } from "../Button/Button";

export const HeaderContainer = styled.div`
	/* position: fixed;
	z-index: 2; */

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledButton = styled(Button)`
	width: 8.5rem;
	height: 2.5rem;

	gap: 0.5rem;

	padding: 0.625rem 1rem;

	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.42;
	letter-spacing: 0.0175rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		width: 14.6875rem;
		height: 3rem;

		font-size: ${props => props.theme.fontSizes.button.medium};
		line-height: 1.5;
		letter-spacing: 0.02rem;
	}
`;

export const HeaderStyled = styled.header`
	position: fixed;
	z-index: 999;
	background-color: ${props => props.theme.colors.background};
	width: 100%;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-top: 0.9375rem;
		padding-bottom: 0.9375rem;
	}
`;
