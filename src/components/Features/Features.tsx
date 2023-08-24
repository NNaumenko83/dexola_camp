import { Container } from "../Container/Container";
import { FeatureCardsList } from "../FeatureCardsList/FeatureCardsList";
import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
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
		<Container>
			<section>
				<TitleWrapper>
					<Title>features</Title>
					<Title>01</Title>
				</TitleWrapper>
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
			</section>
		</Container>
	);
};
