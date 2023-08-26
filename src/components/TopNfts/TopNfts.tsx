import { Title } from "../Title/Title";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { TopNftTable } from "../TopNftTable/TopNftTable";
import { ContainerStyledTop } from "./TopNfts.styled";

export const TopNfts = () => {
	return (
		<section>
			<ContainerStyledTop>
				<TitleWrapper>
					<Title>
						<span>Top NFTs</span>
						<span>02</span>
					</Title>
				</TitleWrapper>

				<TopNftTable />
			</ContainerStyledTop>
		</section>
	);
};
