import { heroImages } from "../../constans/heroImages";

import { HeroSection, TitleHero, ImageWrapper, ImagesList, ImagesContainer, TextWrapper, Image } from "./Hero.styled";
import { Text } from "../Text/Text";
import { Container } from "../Container/Container";

export const Hero = () => {
	return (
		<Container>
			<HeroSection>
				<ImagesList>
					{heroImages.map((images, index) => (
						<ImagesContainer key={index}>
							{images.map((imageSrcSet, subIndex) => (
								<ImageWrapper key={subIndex}>
									<Image
										srcSet={`${imageSrcSet[0]} 1x, ${imageSrcSet[1]} 2x`}
										src={imageSrcSet[0]}
										alt="Hero image"
										width="150"
										height="311"
									/>
								</ImageWrapper>
							))}
						</ImagesContainer>
					))}
				</ImagesList>

				<TitleHero>Dexola camp</TitleHero>
				<TextWrapper>
					<Text>
						Prepare to be transported beyond the boundaries of traditional gaming with the StarRunner Ecosystem – the
						beating heart that drives the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
					</Text>
				</TextWrapper>
			</HeroSection>
		</Container>
	);
};
