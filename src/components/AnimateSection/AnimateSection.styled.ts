import { keyframes, styled } from "styled-components";

const growAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(150);

  }
`;
const delayAppear = keyframes`   0% {     opacity: 0;   }   100% {     opacity: 1;   } `;

const slideUp = keyframes`
  0% {
    transform: translate3d(0, 100%, 0); 
  }
  100% {
    transform: translate3d(0, 40%, 0); 
  }
`;

export const AnimateSectionStyled = styled.section`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxTablet}) {
		position: absolute;
		width: 0.0625rem;
		height: 0.0625rem;
		margin: -0.0625rem;
		border: 0;
		padding: 0;

		white-space: nowrap;
		clip-path: inset(100%);
		clip: rect(0 0 0 0);
	}

	width: 100%;
	height: 55rem;
	overflow: hidden;
`;

export const AnimateContainer = styled.div`
	position: relative;

	height: 100%;
	margin: 0 auto;

	max-width: 90rem;
	padding-left: 4.75rem;
	padding-right: 4.75rem;
`;

export const BlueRectangle = styled.div`
	width: 80.5625rem;
	height: 57.25rem;

	background-color: ${props => props.theme.colors.starrunerBackgroundRectangle};
	margin: 0 auto;

	filter: blur(6.25rem);

	animation: ${slideUp} 5s forwards;
`;

export const CircleWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
`;

export const EllipseOne = styled.div`
	width: 6.25rem;
	height: 3.125rem;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
`;

export const EllipseTwo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9.375rem;
	height: 4.6875rem;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
`;

export const EllipseThree = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 12.5rem;
	height: 6.25rem;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
`;

export const EllipseFour = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15.625rem;
	height: 9.375rem;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
`;

export const EllipseFive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18.75rem;
	height: 12.5rem;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
	animation: ${growAnimation} 7s linear forwards;
`;

export const InnerEllipse = styled.div`
	width: 2.1875rem;
	height: 2.5rem;
	border-radius: 50%;
	border: 0.0625rem solid #204ffe;
`;

export const EllipseStarrunner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 40;
	width: 62.125rem;
	height: 44.8125rem;
	border-radius: 50%;
	border: 0.125rem solid #204ffe;
	opacity: 0;
	animation: ${delayAppear} 5s 2s linear forwards;
`;

export const StarrunnerText = styled.p`
	color: ${props => props.theme.colors.starrunerTextColor};
	text-align: center;

	font-family: "Swis721 Md BT", sans-serif;
	font-size: 4rem;

	line-height: 1.25;
	text-transform: uppercase;
`;

export const PretextStarrunnerText = styled.p`
	color: ${props => props.theme.colors.starrunerTextColor};
	text-align: center;

	font-family: Swis721 BT, sans-serif;
	font-size: 1.5rem;

	font-weight: 400;
	line-height: 1.4;
	text-transform: uppercase;
`;
