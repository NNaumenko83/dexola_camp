import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { TopNftTable } from "../TopNftTable/TopNftTable";
import { ContainerStyledTop, TitleNfs } from "./TopNfts.styled";

export const TopNfts = () => {
	return (
		<section>
			<ContainerStyledTop>
				<TitleWrapper>
					<TitleNfs>
						<span>Top NFTs</span>
						<span>02</span>
					</TitleNfs>
				</TitleWrapper>

				<TopNftTable />
			</ContainerStyledTop>
		</section>
	);
};
