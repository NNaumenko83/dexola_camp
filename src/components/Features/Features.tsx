import { Button } from "../Button/Button";
import Icon from "../Icon/Icon";
import { Title } from "../Title/Title";
import { TitleWrapper } from "./Features.styled";

export const Features = () => {
	const onClick = () => {
		console.log("Click");
	};
	return (
		<section>
			<TitleWrapper>
				<Title>features</Title>
				<Title>01</Title>
			</TitleWrapper>
			<div>
				<h3>About StarRunner</h3>
				<p>
					The StarRunner Blockchain Ecosystem isn't a mere playground; it's a living, evolving entity that adapts to the
					desires and creativity of its players.
				</p>
			</div>
			<div>
				<div>
					<p>Image</p>
					<div>
						<h2>01</h2>
						<h2>STRU Token sale</h2>
					</div>
					<p>The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.</p>
					<Button type="button" onClick={onClick}>
						<Icon name="arrow_icon" width={24} height={16} />
						<p>discover now</p>
					</Button>
				</div>
			</div>
		</section>
	);
};
