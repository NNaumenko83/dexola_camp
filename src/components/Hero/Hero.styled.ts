import { keyframes, styled } from "styled-components";

export const HeroContainer = styled.section`
	padding: 0.25rem 0;
	display: grid;

	grid-template-areas:
		"images"
		"title"
		"text";
	grid-template-columns: 100%;

	overflow: hidden;

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		grid-template-columns: 45.8125rem 29.1875rem;
		grid-template-areas:
			"text images"
			"title title";
	}
`;

const titleAnimation = keyframes`
      0% {
       transform: translateX(100%);
      }
      50%{
            transform: translateX(0);
      }
   100% {
       transform: translateX(-100%);
        }
        `;

export const TitleHero = styled.h1`
	grid-area: title;

	color: ${props => props.theme.colors.heroTitle};
	width: 49.6875rem;
	font-family: Kanit, sans-serif;
	font-size: ${props => props.theme.fontSizes.heroTitle.mobile};
	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.254;

	text-transform: uppercase;

	animation-name: ${titleAnimation};
	animation-duration: 10s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: normal;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.heroTitle.tablet};
		width: 118.75rem;
		animation-duration: 15s;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.heroTitle.web};
		width: 140.8125rem;
		animation-duration: 15s;
	}
`;

const fadeImageAnimation = keyframes`
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      20% {
        opacity: 1
      }
      25% {
          opacity: 0;
        }

      100% {
            opacity: 0;
        }
        `;

export const ImagesContainer = styled.li`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	opacity: 0;
	animation-name: ${fadeImageAnimation};
	animation-duration: 40s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: normal;
`;

export const ImagesList = styled.ul`
	grid-area: images;

	width: 100%;
	height: 19.4375rem;
	position: relative;
	margin: 0 auto;

	:nth-child(1) {
		z-index: 1;
	}

	:nth-child(2) {
		z-index: 2;
		animation-delay: 8s;
	}

	:nth-child(3) {
		z-index: 3;
		animation-delay: 16s;
	}

	:nth-child(4) {
		z-index: 4;
		animation-delay: 24s;
	}

	:nth-child(5) {
		z-index: 5;
		animation-delay: 32s;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		width: 43.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		width: 29.1875rem;
	}
`;

export const ImageWrapper = styled.div`
	flex-basis: 50%;
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

export const TextWrapper = styled.div`
	grid-area: text;
	display: flex;
	align-items: flex-end;
	outline: 1px solid red;
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		padding: 9.9375rem 4.375rem 3.5rem 1.25rem;
	}
`;
