import { Container } from "../Container/Container";

import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { SubTitleAndTextWrapper } from "./JoinUs.styled";

export const JoinUs = () => {
	return (
		<section>
			<TitleContainer>
				<TitleWrapper>
					<Title>
						<span>Join Us</span>
						<span>03</span>
					</Title>
				</TitleWrapper>
			</TitleContainer>

			<Container>
				<SubTitleAndTextWrapper>
					<SubTitle>About StarRunner</SubTitle>

					<Text>
						Join Our Community and Embark on a Journey of Opportunities. Discover the full range of our services that
						cater to your needs. We've got you covered with top-notch solutions.
					</Text>
				</SubTitleAndTextWrapper>
			</Container>
		</section>
	);
};
