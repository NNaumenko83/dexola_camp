import { FeatureCardsList } from "../FeatureCardsList/FeatureCardsList";
import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { TextAndCardsContainer, TitleWrapper } from "./Features.styled";

export const Features = () => {
	return (
		<section>
			<TitleWrapper>
				<Title>features</Title>
				<Title>01</Title>
			</TitleWrapper>
			<TextAndCardsContainer>
				<div>
					<SubTitle>About StarRunner</SubTitle>
					<Text>
						The StarRunner Blockchain Ecosystem isn't a mere playground; it's a living, evolving entity that adapts to
						the desires and creativity of its players.
					</Text>
				</div>
				<FeatureCardsList />
			</TextAndCardsContainer>
		</section>
	);
};
