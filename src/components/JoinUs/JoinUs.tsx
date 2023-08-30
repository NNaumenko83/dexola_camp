import Icon from "../Icon/Icon";
import { JoinUsForm } from "../JoinUsForm/JoinUsForm";

import { SubTitle } from "../SubTitle/SubTitle";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { JoinUsContainer, JoinUsSection, SubTitleAndTextWrapper } from "./JoinUs.styled";

export const JoinUs = () => {
	return (
		<JoinUsSection id="joinUs">
			<TitleContainer>
				<TitleWrapper>
					<Title>
						<span>Join Us</span>
						<span>03</span>
					</Title>
				</TitleWrapper>
			</TitleContainer>

			<JoinUsContainer>
				<SubTitleAndTextWrapper>
					<SubTitle>About StarRunner</SubTitle>

					<Text>
						Join Our Community and Embark on a Journey of Opportunities. Discover the full range of our services that
						cater to your needs. We've got you covered with top-notch solutions.
					</Text>

					<Icon name="long_arrow" width={64} height={64} visible={false} />
				</SubTitleAndTextWrapper>
				<JoinUsForm />
			</JoinUsContainer>
		</JoinUsSection>
	);
};
