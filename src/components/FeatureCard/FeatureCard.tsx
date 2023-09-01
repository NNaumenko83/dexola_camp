import Icon from "../Icon/Icon";

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
	images: string[];
	number: string;
	name: string;
	text: string;
};

export const FeatureCard: React.FC<IFeatureCardProps> = ({ images, number, name, text }) => {
	const onClick = () => {
		console.log("Click");
	};
	return (
		<FeatureCardStyled>
			<ImageWrapper>
				<Image
					srcSet={`${images[0]} 1x, ${images[1]} 2x`}
					src={images[0]}
					alt="Astronaut"
					width="150px"
					height="311px"
				/>
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
