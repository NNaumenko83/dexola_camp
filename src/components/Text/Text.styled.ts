import { styled } from "styled-components";

export const TextStyled = styled.p`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.body.tablet};
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.body.web};
	}
`;
