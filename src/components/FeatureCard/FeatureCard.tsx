import { Button } from "../Button/Button";
import { SubTitleWrapper } from "../Features/Features.styled";
import Icon from "../Icon/Icon";
import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";

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
		<li>
			<div>
				<img srcSet={(images[0], images[1])} src={images[0]} alt="Astronaut" width="150px" height="311px" />
			</div>

			<SubTitleWrapper>
				<SubTitle>{number}</SubTitle>
				<SubTitle>{name}</SubTitle>
			</SubTitleWrapper>
			<Text>{text}</Text>
			<Button type="button" onClick={onClick}>
				<Icon name="arrow_icon" width={24} height={16} />
				<p>discover now</p>
			</Button>
		</li>
	);
};
