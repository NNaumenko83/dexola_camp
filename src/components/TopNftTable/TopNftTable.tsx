import React from "react";

import data from "../../data/topNftData.json";
import { TopNftTableRow } from "../TopNftTableRow/TopNftTableRow";

export const TopNftTable: React.FC = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>NFT Name</th>
					<th>Rarity Level</th>
					<th>Total Games</th>
					<th>Games Won</th>
					<th>Price (ETH)</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<TopNftTableRow key={index} item={item} />
				))}
			</tbody>
		</table>
	);
};
