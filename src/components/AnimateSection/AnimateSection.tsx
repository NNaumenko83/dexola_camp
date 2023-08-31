import { useInView } from "react-intersection-observer";
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
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.6,
	});

	return (
		<AnimateSectionStyled ref={ref}>
			{inView ? (
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
			) : null}
		</AnimateSectionStyled>
	);
};
