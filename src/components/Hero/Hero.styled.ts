import { keyframes, styled } from "styled-components";

export const HeroContainer = styled.section`
	padding: 0.25rem 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const HeroTitle = styled.h1`
	color: ${props => props.theme.colors.heroTitle};
	width: 795px;
	font-family: Kanit, sans-serif;
	font-size: 7.5rem;
	font-weight: 500;
	line-height: 1.254;
	text-transform: uppercase;
`;

const fadeImageAnimation = keyframes`
      0% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      20% {
        opacity: 0;
      }
      95% {
          opacity: 0;
        }

      100% {
            opacity: 1;
        }
        `;

export const ImagesContainer = styled.li`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;

	animation-name: ${fadeImageAnimation};
	animation-duration: 40s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: normal;
`;

export const ImagesList = styled.ul`
	width: 100%;
	height: 19.4375rem;
	position: relative;

	:nth-child(1) {
		z-index: 1;
	}

	:nth-child(2) {
		z-index: 2;
		opacity: 0;
		animation-delay: 8s;
	}

	:nth-child(3) {
		z-index: 3;
		opacity: 0;
		animation-delay: 16s;
	}

	:nth-child(4) {
		z-index: 4;
		opacity: 0;
		animation-delay: 24s;
	}

	:nth-child(5) {
		z-index: 5;
		opacity: 0;
		animation-delay: 32s;
	}
`;

export const ImageWrapper = styled.div`
	/* flex-basis: 50%; */
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;
