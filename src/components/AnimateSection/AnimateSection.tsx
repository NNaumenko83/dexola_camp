import { ScrollDown } from "../ScrollDown/ScrollDown";
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
					<PretextStarrunnerText>Explore Cyberpunk Space Adventures in</PretextStarrunnerText>
					<StarrunnerText>StarRunner ecosystem</StarrunnerText>
				</EllipseStarrunner>
				<ScrollDown />
				<BlueRectangle></BlueRectangle>
			</AnimateContainer>
		</AnimateSectionStyled>
	);
};
