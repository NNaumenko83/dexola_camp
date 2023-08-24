import { styled } from "styled-components";

export const TextAndCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SubtitleAndTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px 0 24px;
	gap: 0.75rem;
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		display: flex;
		flex-direction: row;
		padding: 4rem 11.5625rem 4rem 11.6875rem;
		gap: 0.6875rem;
	}
`;
