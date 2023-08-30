import { Container } from "../Container/Container";
import Icon from "../Icon/Icon";
import { Link } from "../LinkToJoinNow/LinkToJoinNow";
import { HeaderContainer, HeaderStyled } from "./Header.styled";

export const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<Icon name="logo" width={35} height={20} />

					<Link to="#joinUs">
						<Icon name="arrow_icon" width={24} height={16} />
						<p>Join Now</p>
					</Link>
				</HeaderContainer>
			</Container>
		</HeaderStyled>
	);
};
