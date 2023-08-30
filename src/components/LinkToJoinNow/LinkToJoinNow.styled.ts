import { styled } from "styled-components";

export const StyledLink = styled.a`
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
	width: 8.5rem;
	height: 2.5rem;
	padding: 0.625rem 1rem;

	text-transform: uppercase;
	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.42;
	letter-spacing: 0.0175rem;

	color: ${props => props.theme.colors.buttonTextColor};
	background-color: ${props => props.theme.colors.buttonBackgroundColor};

	transition: all 300ms linear;

	&:hover,
	&:focus {
		background-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		width: 14.6875rem;
		height: 3rem;
		font-size: ${props => props.theme.fontSizes.button.medium};
		line-height: 1.5;
		letter-spacing: 0.02rem;
	}
`;
