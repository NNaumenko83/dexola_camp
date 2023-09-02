import React from "react";
import {
	TableRow,
	TableDataName,
	NumberItem,
	TableDataAvatar,
	TableDataPrice,
	LabelText,
	EthText,
	TableDataInfo,
	TableDataRarity,
} from "./TopNftTableRow.styled";
import { Avarar } from "../Avatar/Avarar";

interface TableRowProps {
	indexItem: number;
	item: {
		numberItem: string;
		nftName: string;
		rarityLevel: string;
		totalGames: number;
		gamesWon: number;
		PriceETH: number;
	};
}

export const TopNftTableRow: React.FC<TableRowProps> = ({ item, indexItem }) => {
	return (
		<TableRow>
			<TableDataAvatar>
				<Avarar indexItem={indexItem} />
			</TableDataAvatar>
			<TableDataName>
				<NumberItem>{item.numberItem}&nbsp;</NumberItem>
				<h3>{item.nftName}</h3>
			</TableDataName>
			<TableDataRarity>
				<LabelText>Rarity:</LabelText>
				<p>{item.rarityLevel}</p>
			</TableDataRarity>
			<TableDataInfo>
				<LabelText>Total games:</LabelText>
				<p>{item.totalGames}</p>
			</TableDataInfo>
			<TableDataInfo>
				<LabelText>Games Won:</LabelText>
				<p>{item.gamesWon}</p>
			</TableDataInfo>
			<TableDataPrice>
				<p>{item.PriceETH}</p>
				<EthText>&nbsp;ETH</EthText>
			</TableDataPrice>
		</TableRow>
	);
};
