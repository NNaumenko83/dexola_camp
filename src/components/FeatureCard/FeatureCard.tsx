import Icon from "../Icon/Icon";
import React, { useEffect, useState } from "react";
import {
	featuresImagesArrayMobile,
	featuresImagesArrayTablet,
	featuresImagesArrayDesktop,
} from "../../constans/featuresImages";

import { Text } from "../Text/Text";
import {
	FeatureCardStyled,
	ImageWrapper,
	StyledButton,
	ThumbContainer,
	Image,
	TextWrapper,
	SubTitle,
} from "./FeatureCard.styled";

type IFeatureCardProps = {
	index: number;
	number: string;
	name: string;
	text: string;
};

export const FeatureCard: React.FC<IFeatureCardProps> = ({ index, number, name, text }) => {
	const [shouldInsertBreak, setShouldInsertBreak] = useState(window.innerWidth < 376);

	useEffect(() => {
		const handleResize = () => {
			setShouldInsertBreak(window.innerWidth < 376);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const onClick = () => {};

	const renderText = (text: string) => {
		if (text.includes("\n") && shouldInsertBreak) {
			const lines = text.split("\n");
			return lines.map((line: string, index: number) => (
				<React.Fragment key={index}>
					{line}
					<br />
				</React.Fragment>
			));
		} else {
			return text;
		}
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
				<SubTitle>
					<span>{number}</span>
					<span>{name}</span>
				</SubTitle>

				<TextWrapper>
					<Text>{renderText(text)}</Text>
				</TextWrapper>

				<StyledButton type="button" onClick={onClick}>
					<Icon name="arrow_icon" width={24} height={16} />
					<p>discover now</p>
				</StyledButton>
			</ThumbContainer>
		</FeatureCardStyled>
	);
};
