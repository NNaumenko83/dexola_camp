import React from "react";
import { TableRow, TableData } from "./TopNftTableRow.styled";

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
		<TableRow>
			<TableData>{item.nftName}</TableData>
			<TableData>{item.rarityLevel}</TableData>
			<TableData>{item.totalGames}</TableData>
			<TableData>{item.gamesWon}</TableData>
			<TableData>{item.PriceETH}</TableData>
		</TableRow>
	);
};
