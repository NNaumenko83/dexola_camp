import Icon from "../Icon/Icon";
import {
	featuresImagesArrayMobile,
	featuresImagesArrayTablet,
	featuresImagesArrayDesktop,
} from "../../constans/featuresImages";

import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import {
	FeatureCardStyled,
	ImageWrapper,
	StyledButton,
	SubTitleWrapper,
	ThumbContainer,
	Image,
	TextWrapper,
} from "./FeatureCard.styled";

type IFeatureCardProps = {
	index: number;
	number: string;
	name: string;
	text: string;
};

export const FeatureCard: React.FC<IFeatureCardProps> = ({ index, number, name, text }) => {
	const onClick = () => {
		console.log("Click");
	};
	return (
		<FeatureCardStyled>
			<ImageWrapper>
				<picture>
					<source
						srcSet={`${featuresImagesArrayMobile[index][0]} 1x, ${featuresImagesArrayMobile[index][1]} 2x`}
						media="(max-width: 743px)"
					/>

					<source
						srcSet={`${featuresImagesArrayDesktop[index][0]} 1x, ${featuresImagesArrayDesktop[index][1]} 2x`}
						media="(min-width: 1440px)"
					/>

					<source
						srcSet={`${featuresImagesArrayTablet[index][0]} 1x, ${featuresImagesArrayTablet[index][1]} 2x`}
						media="(min-width: 744px)"
					/>

					<Image
						srcSet={`${featuresImagesArrayDesktop[index][0]} 1x, ${featuresImagesArrayDesktop[index][1]} 2x`}
						src={`${featuresImagesArrayTablet[index][0]}`}
						alt="Astronaut"
						width="373"
						height="307"
					/>
				</picture>
			</ImageWrapper>

			<ThumbContainer>
				<SubTitleWrapper>
					<SubTitle>{number}</SubTitle>
					<SubTitle>{name}</SubTitle>
				</SubTitleWrapper>
				<TextWrapper>
					<Text>{text}</Text>
				</TextWrapper>

				<StyledButton type="button" onClick={onClick}>
					<Icon name="arrow_icon" width={24} height={16} />
					<p>discover now</p>
				</StyledButton>
			</ThumbContainer>
		</FeatureCardStyled>
	);
};
