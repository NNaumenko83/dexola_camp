import React from "react";

interface TableRowProps {
	item: {
		nftName: string;
		rarityLevel: string;
		totalGames: number;
		gamesWon: number;
		PriceETH: number;
	};
}

export const TopNftTableRow: React.FC<TableRowProps> = ({ item }) => {
	return (
		<tr>
			<td>{item.nftName}</td>
			<td>{item.rarityLevel}</td>
			<td>{item.totalGames}</td>
			<td>{item.gamesWon}</td>
			<td>{item.PriceETH}</td>
		</tr>
	);
};
