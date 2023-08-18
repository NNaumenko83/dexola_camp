import { Container } from "../Container/Container";
import Icon from "../Icon/Icon";
import { HeaderContainer, StyledButton as Button } from "./Header.styled";

export const Header = () => {
	const onClick = () => {
		console.log("Click");
	};

	return (
		<header>
			<Container>
				<HeaderContainer>
					<Icon name="logo" width={35} height={20} />

					<Button type="button" onClick={onClick}>
						<Icon name="arrow_icon" width={24} height={17} />
						<p>Join Now</p>
					</Button>
				</HeaderContainer>
			</Container>
		</header>
	);
};
