import { styled } from "styled-components";
import { ContainerStyled } from "../Container/Container.styled";

export const SubTitleAndTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0.3125rem 1.5rem 0;
	gap: 0.75rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		/* flex-direction: row; */
		padding: 3.5rem 8.75rem 3.5rem 0;
		gap: 0.75rem;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		padding: 6.875rem 0 0 0;
		gap: 1rem;
		width: 33.625rem;
	}
`;

export const JoinUsContainer = styled(ContainerStyled)`
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		display: flex;
		gap: 4.125rem;
		margin-bottom: 7.0625rem;
	}
`;

export const JoinUsSection = styled.section`
	margin-top: 5.5625rem;
`;
