import { styled } from "styled-components";

export const SubTitleAndTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0 1.5rem;
	gap: 0.75rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-direction: row;
		padding: 3.5rem 0 2.5rem;
		gap: 0.9375rem;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		padding: 5.625rem 11.5625rem 4rem 11.6875rem;
		gap: 0.6875rem;
	}
`;
