import { styled } from "styled-components";
import { ContainerStyled } from "../Container/Container.styled";

export const HeaderContainer = styled(ContainerStyled)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderSection = styled.header`
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
