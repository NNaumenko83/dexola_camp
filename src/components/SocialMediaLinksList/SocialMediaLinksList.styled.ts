import { styled } from "styled-components";

export const List = styled.ul`
	grid-area: list;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	display: flex;
	justify-content: center;
	gap: 2rem;

	@media (min-width: ${props => props.theme.breakpoints.tablet}) {
		gap: 1.5rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		gap: 2.5rem;
		justify-self: center;
	}
`;
