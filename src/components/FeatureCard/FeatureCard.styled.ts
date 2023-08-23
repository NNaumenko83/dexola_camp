import { styled } from "styled-components";
import { Button } from "../Button/Button";

export const FeatureCardStyled = styled.li`
	border: 1px solid ${props => props.theme.colors.borderCard};
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-basis: calc(100% / 3);
		font-size: ${props => props.theme.fontSizes.body.tablet};
		letter-spacing: -0.02rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;

	height: 14.5rem;
	border-bottom: 1px solid ${props => props.theme.colors.borderCard};

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		height: 15rem;
	}
`;

export const ThumbContainer = styled.div`
	padding: 1rem 1rem 1.5rem 1rem;

	display: flex;
	flex-direction: column;
	flex-grow: 1;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-bottom: 1rem;
	}

	& > :nth-child(1) {
		margin-bottom: 1rem;
	}
	& > :nth-child(2) {
		margin-bottom: 1.5rem;

		@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
			margin-bottom: 1rem;
		}
	}
`;

export const SubTitleWrapper = styled.div`
	display: flex;
	gap: 1rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-direction: column;
		gap: 0.25rem;
	}
`;

export const StyledButton = styled(Button)`
	width: 100%;
	/* height: 2.5rem; */
	padding: 0.75rem 4.5rem;

	gap: 0.375rem;

	font-size: ${props => props.theme.fontSizes.button.medium};

	font-weight: ${props => props.theme.fontWeights.medium};
	text-transform: uppercase;
	line-height: 1.42;
	letter-spacing: 0.0175rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		height: 3rem;
		padding: 0.75rem 1.125rem;
		gap: 0.4375rem;

		font-size: ${props => props.theme.fontSizes.button.medium};
		line-height: 1.5;
		letter-spacing: 0.02rem;
	}
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

export const TextWrapper = styled.div`
	flex-grow: 1;
`;
