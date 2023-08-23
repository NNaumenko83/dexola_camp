import { styled } from "styled-components";

export const ContainerStyled = styled.div`
	/* outline: 1px solid red; */

	max-width: 46.4375rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	margin: 0 auto;
	overflow: hidden;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		max-width: 89.9375rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		max-width: 90rem;
		padding-left: 7.5rem;
		padding-right: 7.5rem;
	}
`;
