import { styled } from "styled-components";

export const FeatureCardListStyled = styled.ul`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 1rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-direction: row;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
	}
`;
