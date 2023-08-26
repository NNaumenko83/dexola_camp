import { Container } from "../Container/Container";
import { FeatureCardsList } from "../FeatureCardsList/FeatureCardsList";
import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import {
	TextAndCardsContainer,
	SubtitleAndTextWrapper,
	SubtitleWrapper,
	TextWrapper,
	LineBreak,
} from "./Features.styled";

export const Features = () => {
	return (
		<section>
			<TitleContainer>
				<TitleWrapper>
					<Title>
						<span>features</span>
						<span>01</span>
					</Title>
				</TitleWrapper>
			</TitleContainer>

			<Container>
				<TextAndCardsContainer>
					<SubtitleAndTextWrapper>
						<SubtitleWrapper>
							<SubTitle>About StarRunner</SubTitle>
						</SubtitleWrapper>
						<TextWrapper>
							<Text>
								The StarRunner Blockchain Ecosystem isn't <LineBreak />a mere playground; it's a living, evolving entity
								<LineBreak />
								that adapts to the desires and creativity of its players.
							</Text>
						</TextWrapper>
					</SubtitleAndTextWrapper>
					<FeatureCardsList />
				</TextAndCardsContainer>
			</Container>
		</section>
	);
};
