import { styled } from "styled-components";
import { LeftAddon } from "../InputLeftAddon/InputLeftAddon.styled";
import { Button } from "../Button/Button";

export const InputWrapper = styled.div`
	height: 4.25rem;
	width: 100%;
`;

export const StarInput = styled.span`
	color: ${props => props.theme.colors.inputStarColor};
`;

export const LeftAddonPhone = styled(LeftAddon)`
	margin-right: 1rem;
`;

export const StyledButton = styled(Button)`
	width: 100%;
	height: 3rem;

	gap: 0.5rem;

	padding: 0.75rem 5.8125rem;

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
