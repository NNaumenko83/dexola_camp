import featuresData from "../../data/featuredData.json";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { FeaturesImagesArray } from "../../constans/featuresImages";

export const FeatureCardsList = () => {
	return (
		<ul>
			{featuresData.map((item, index) => (
				<FeatureCard
					key={index}
					images={FeaturesImagesArray[index]}
					number={item.number}
					name={item.name}
					text={item.text}
				/>
			))}
		</ul>
	);
};
