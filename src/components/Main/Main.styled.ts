import { styled } from "styled-components";

export const MainStyled = styled.main`
	flex: 1 1 auto;
	padding-top: 3.5625rem;
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-top: 5.4375rem;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		padding-top: 4.875rem;
	}
`;
