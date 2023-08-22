import featuresData from "../../data/featuredData.json";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { FeaturesImagesArray } from "../../constans/featuresImages";
import { FeatureCardListStyled } from "./FeatureCardsList.styled";

export const FeatureCardsList = () => {
	return (
		<FeatureCardListStyled>
			{featuresData.map((item, index) => (
				<FeatureCard
					key={index}
					images={FeaturesImagesArray[index]}
					number={item.number}
					name={item.name}
					text={item.text}
				/>
			))}
		</FeatureCardListStyled>
	);
};
