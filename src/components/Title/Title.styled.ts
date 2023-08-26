import { styled } from "styled-components";
import { ContainerStyled } from "../Container/Container.styled";

export const TitleStyled = styled.h2`
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-family: Kanit, sans-serif;
	font-size: ${props => props.theme.fontSizes.title.mobile};
	color: ${props => props.theme.colors.title};

	line-height: 1.2;
	text-transform: capitalize;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.title.tablet};
		line-height: 1.4;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.title.web};
		line-height: 1.15;
	}
`;

export const ContainerStyledTitle = styled(ContainerStyled)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		padding-left: 0;
		padding-right: 0;
	}
`;
