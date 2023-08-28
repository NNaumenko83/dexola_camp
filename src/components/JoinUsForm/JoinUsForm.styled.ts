import { styled } from "styled-components";
import { LeftAddon } from "../InputLeftAddon/InputLeftAddon.styled";
import { Button } from "../Button/Button";

export const InputWrapper = styled.div`
	height: 4.25rem;
	width: 100%;
`;

export const StarInput = styled.span`
	color: ${props => props.theme.colors.inputStarColor};

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.body.tablet};
		line-height: 1.5;
		letter-spacing: 0.02rem;
	}
`;

export const LeftAddonPhone = styled(LeftAddon)`
	margin-right: 1rem;
`;

export const StyledButton = styled(Button)`
	width: 100%;
	height: 3rem;

	gap: 0.5rem;

	padding: 0.6875rem 5.8125rem 0.75rem 8.0625rem;

	/* font-size: ${props => props.theme.fontSizes.small}; */
	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.71;
	letter-spacing: 0.0175rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		width: 14.6875rem;
		height: 48px;

		padding: 0.6875rem 4.125rem 0.6875rem 5.5625rem;

		font-size: ${props => props.theme.fontSizes.button.medium};
		line-height: 1.5;
		letter-spacing: 0.02rem;
	}
`;

export const ButtonTextWrapper = styled.div`
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 1.375rem;
		height: 0.0938rem;
		background-color: white;
		top: 50%;
		left: -2.0625rem;
		transform: translate(0, -50%);
	}
`;
