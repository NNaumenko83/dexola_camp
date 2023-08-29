import { styled } from "styled-components";

export const TextStyled = styled.p`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.body.tablet};
		line-height: 1.31;
		letter-spacing: -0.32px;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.body.web};
		line-height: 1.33;
		letter-spacing: -0.36px;
	}
`;
