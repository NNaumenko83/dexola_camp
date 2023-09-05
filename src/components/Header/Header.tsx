import Icon from "../Icon/Icon";
import { Link } from "../LinkToJoinNow/LinkToJoinNow";
import { HeaderContainer, HeaderSection } from "./Header.styled";

export const Header = () => {
	return (
		<HeaderSection>
			<HeaderContainer>
				<Icon name="logo" width={35} height={20} />

				<Link to="#joinUs">
					<Icon name="arrow_icon" width={24} height={16} />
					<p>Join Now</p>
				</Link>
			</HeaderContainer>
		</HeaderSection>
	);
};
