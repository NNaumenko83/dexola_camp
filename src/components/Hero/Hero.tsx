import { heroImages } from "../../constans/heroImages";
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
									// width="370"
									// height="294"
								/>
							</ImageWrapper>
						))}
					</ImagesContainer>
				))}
			</ImagesList>
			{/* Інші елементи */}
			<HeroTitle>Dexola camp</HeroTitle>
		</HeroContainer>
	);
};
