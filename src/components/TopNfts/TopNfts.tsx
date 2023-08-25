import { Container } from "../Container/Container";
import { Title } from "../Title/Title";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { TopNftTable } from "../TopNftTable/TopNftTable";

export const TopNfts = () => {
	return (
		<Container>
			<section>
				<TitleWrapper>
					<Title>Top NFTs</Title>
					<Title>02</Title>
				</TitleWrapper>
				<div>
					<TopNftTable />
				</div>
			</section>
		</Container>
	);
};
