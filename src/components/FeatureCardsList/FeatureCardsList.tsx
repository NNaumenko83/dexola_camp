import featuresData from "../../data/featuredData.json";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { FeatureCardListStyled } from "./FeatureCardsList.styled";

export const FeatureCardsList = () => {
	return (
		<FeatureCardListStyled>
			{featuresData.map((item, index) => (
				<FeatureCard key={index} index={index} number={item.number} name={item.name} text={item.text} />
			))}
		</FeatureCardListStyled>
	);
};
