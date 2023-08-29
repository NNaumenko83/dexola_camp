import { Title } from "../Title/Title";
import { TitleContainer } from "../TitleContainer/TitleContainer";

import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { TopNftTable } from "../TopNftTable/TopNftTable";
import { TopNfcSection } from "./TopNfts.styled";

export const TopNfts = () => {
	return (
		<TopNfcSection>
			<TitleContainer>
				<TitleWrapper>
					<Title>
						<span>Top NFTs</span>
						<span>02</span>
					</Title>
				</TitleWrapper>

				<TopNftTable />
			</TitleContainer>
		</TopNfcSection>
	);
};
