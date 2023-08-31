import {
	CircleWrapper,
	AnimateContainer,
	BlueRectangle,
	EllipseOne,
	EllipseTwo,
	EllipseThree,
	EllipseFour,
	EllipseFive,
	InnerEllipse,
	EllipseStarrunner,
	StarrunnerText,
	AnimateSectionStyled,
	PretextStarrunnerText,
	// ScrollDown,
} from "./AnimateSection.styled";

export const AnimateSection = () => {
	return (
		<AnimateSectionStyled>
			<AnimateContainer>
				<CircleWrapper>
					<EllipseFive>
						<EllipseFour>
							<EllipseThree>
								<EllipseTwo>
									<EllipseOne>
										<InnerEllipse></InnerEllipse>
									</EllipseOne>
								</EllipseTwo>
							</EllipseThree>
						</EllipseFour>
					</EllipseFive>
				</CircleWrapper>
				<EllipseStarrunner>
					<div>
						<PretextStarrunnerText>Explore Cyberpunk Space Adventures in</PretextStarrunnerText>
						<StarrunnerText>StarRunner ecosystem</StarrunnerText>
					</div>
				</EllipseStarrunner>
				{/* <ScrollDown></ScrollDown> */}
				<BlueRectangle></BlueRectangle>
			</AnimateContainer>
		</AnimateSectionStyled>
	);
};
