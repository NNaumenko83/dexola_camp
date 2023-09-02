import { styled } from "styled-components";

export const SubtitleWrapper = styled.div`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-basis: 13.8125rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		flex-basis: 12.1875rem;
		/* display: flex;
		justify-content: flex-end; */
	}
`;

export const TextWrapper = styled.div`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-basis: 28.75rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		flex-basis: 37.5rem;
	}
`;

export const TextAndCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SubtitleAndTextWrapper = styled.div`
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
		gap: 1.5rem;
	}
`;

export const LineBreak = styled.br`
	@media screen and (max-width: 743px) {
		display: none;
	}

	/* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		visibility: visible;
	} */
`;

export const FeaturesSection = styled.section`
	margin-top: 9.25rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		margin-top: 8.8125rem;
	}
`;
