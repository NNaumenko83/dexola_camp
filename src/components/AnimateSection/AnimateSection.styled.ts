import { keyframes, styled } from "styled-components";

const growAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(100);
    display:none;
  }
`;
const delayAppear = keyframes`   0% {     opacity: 0;   }   100% {     opacity: 1;   } `;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(40%);
  }
`;

export const AnimateSectionStyled = styled.section`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxTablet}) {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;

		white-space: nowrap;
		clip-path: inset(100%);
		clip: rect(0 0 0 0);
	}

	width: 100%;
	height: 880px;
	overflow: hidden;
`;

export const AnimateContainer = styled.div`
	position: relative;
	background: #000;
	/* overflow: hidden; */
	height: 100%;
	margin: 0 auto;

	max-width: 90rem;
	padding-left: 4.75rem;
	padding-right: 4.75rem;
`;

export const BlueRectangle = styled.div`
	width: 1289px;
	height: 916px;

	background-color: #121456;
	margin: 0 auto;

	filter: blur(100px);

	animation: ${slideUp} 5s forwards;
`;

export const CircleWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 99;
	border: 1px solid green;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
`;

export const EllipseStarrunner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 40;
	width: 994px;
	height: 717px;
	border-radius: 50%;
	border: 2px solid #204ffe;
	opacity: 0;
	animation: ${delayAppear} 5s 2s linear forwards;
`;

export const EllipseOne = styled.div`
	width: 100px;
	height: 50px;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 1px solid #204ffe;
`;

export const EllipseTwo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 75px;
	border-radius: 50%;
	border: 1px solid #204ffe;
`;

export const EllipseThree = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 100px;
	border-radius: 50%;
	border: 1px solid #204ffe;
`;

export const EllipseFour = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 150px;
	border-radius: 50%;
	border: 1px solid #204ffe;
`;

export const EllipseFive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 200px;
	border-radius: 50%;
	border: 1px solid 204FFE;
	animation: ${growAnimation} 5s linear forwards;
`;

export const InnerEllipse = styled.div`
	width: 25px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid #204ffe;
`;

// export const ScrollDown = styled.div`
//   position: absolute;
//   opacity: 0;
//   right: 200px;
//   bottom: 100px;
//   width: 100px;
//   height: 100px;
//   background-color: pink;
//   border: 1px solid red;
//   border-width: 1px;
//   animation: ${delayAppear} 2s 8s linear forwards;
// `;

export const StarrunnerText = styled.p`
	color: #ffffff;
	text-align: center;

	font-family: "Swis721 Md BT", sans-serif;
	font-size: 64px;
	font-style: normal;

	line-height: 1.25; /* 80.256px */
	text-transform: uppercase;
`;

export const PretextStarrunnerText = styled.p`
	color: #ffffff;
	text-align: center;

	font-family: Swis721 BT, sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 1.4;
	text-transform: uppercase;
`;
