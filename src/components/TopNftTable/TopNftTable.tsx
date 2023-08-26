import React from "react";

import data from "../../data/topNftData.json";
import { TopNftTableRow } from "../TopNftTableRow/TopNftTableRow";
import { TableHead, TableStyled } from "./TopNftTable.styled";

export const TopNftTable: React.FC = () => {
	return (
		<TableStyled>
			<TableHead>
				<tr>
					<th></th>
					<th>NFT Name</th>
					<th>Rarity Level</th>
					<th>Total Games</th>
					<th>Games Won</th>
					<th>Price (ETH)</th>
				</tr>
			</TableHead>
			<tbody>
				{data.map((item, index) => (
					<TopNftTableRow key={index} item={item} />
				))}
			</tbody>
		</TableStyled>
	);
};
