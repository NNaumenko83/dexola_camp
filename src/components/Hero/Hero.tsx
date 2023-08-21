import { heroImages } from "../../constans/heroImages";

import { HeroContainer, TitleHero, ImageWrapper, ImagesList, ImagesContainer, Image, TextWrapper } from "./Hero.styled";
import { Text } from "../Text/Text";

export const Hero = () => {
	return (
		<HeroContainer>
			<ImagesList>
				{heroImages.map((images, index) => (
					<ImagesContainer key={index}>
						{images.map((imageSrcSet, subIndex) => (
							<ImageWrapper key={subIndex}>
								<Image
									srcSet={`${imageSrcSet[0]} ${imageSrcSet[1]}`}
									src={imageSrcSet[0]}
									alt="Розробка інтерфейсу для смартфонів"
									width="150px"
									height="311px"
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
		</HeroContainer>
	);
};
