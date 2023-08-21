import { heroImages } from "../../constans/heroImages";
import { Text } from "../Text/Text";
import { HeroContainer, HeroTitle, ImageWrapper, ImagesList, ImagesContainer, Image } from "./Hero.styled";

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

			<HeroTitle>Dexola camp</HeroTitle>
			<Text>
				Prepare to be transported beyond the boundaries of traditional gaming with the StarRunner Ecosystem – the
				beating heart that drives the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
			</Text>
		</HeroContainer>
	);
};
