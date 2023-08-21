import { heroImages } from "../../constans/heroImages";
import { HeroContainer, HeroTitle, ImageWrapper, ImagesList, ImagesContainer, Image } from "./Hero.styled";

export const Hero = () => {
	return (
		<HeroContainer>
			<ImagesList>
				{heroImages.map((item, index) => (
					<ImagesContainer key={index}>
						<ImageWrapper>
							<Image
								srcSet={(item[0][0], item[0][1])}
								src={item[0][0]}
								alt="Розробка інтерфейсу для смартфонів"
								// width="370"
								// height="294"
							/>
						</ImageWrapper>

						<ImageWrapper>
							<Image
								srcSet={(item[1][0], item[1][1])}
								src={item[0][1]}
								alt="Розробка інтерфейсу для смартфонів"
								// width="370"
								// height="294"
							/>
						</ImageWrapper>
					</ImagesContainer>
				))}
			</ImagesList>

			<HeroTitle>Dexola camp</HeroTitle>
		</HeroContainer>
	);
};
