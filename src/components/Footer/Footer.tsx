import { Container } from "../Container/Container";
import { SocialMediaLinksList } from "../SocialMediaLinksList/SocialMediaLinksList";
import { CopyrightText, DesignedByText, FooterContainer, FooterStyled } from "./Footer.styled";

export const Footer = () => {
	return (
		<FooterStyled>
			<Container footerborder={"footerborder"}>
				<FooterContainer>
					<SocialMediaLinksList />
					<DesignedByText>Designed by Dexola - 2023</DesignedByText>
					<CopyrightText>&copy; All rights reserved</CopyrightText>
				</FooterContainer>
			</Container>
		</FooterStyled>
	);
};
