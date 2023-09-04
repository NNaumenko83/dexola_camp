import { useInView } from "react-intersection-observer";
import { ScrollDown } from "../ScrollDown/ScrollDown";
import {
	CircleWrapper,
	AnimateContainer,
	BlueRectangle,
	Elipses,
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
						<Elipses width="200" height="200" xmlns="http://www.w3.org/2000/svg">
							<ellipse cx="100" cy="100" rx="80" ry="60" fill="none" stroke="#09237E" stroke-width="1px" />
							<ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="#09237E" stroke-width="1px" />
							<ellipse cx="100" cy="100" rx="40" ry="30" fill="none" stroke="#09237E" stroke-width="1px" />
							<ellipse cx="100" cy="100" rx="30" ry="20" fill="none" stroke="#09237E" stroke-width="1px" />
							<ellipse cx="100" cy="100" rx="12" ry="15" fill="none" stroke="#09237E" stroke-width="1px" />
						</Elipses>
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
