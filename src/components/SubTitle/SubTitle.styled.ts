import { styled } from "styled-components";

export const SubTitleStyled = styled.h3`
	font-family: Kanit, sans-serif;
	font-size: ${props => props.theme.fontSizes.subTitle.mobile};
	color: ${props => props.theme.colors.subtitle};

	line-height: 1.4;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.subTitle.tablet};
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.subTitle.web};
	}
`;
