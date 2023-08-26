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
				<span>{item.nftName}</span>
			</TableDataName>
			<TableDataInfo>
				<LabelText>Rarity:</LabelText>
				<span>{item.rarityLevel}</span>
			</TableDataInfo>
			<TableDataInfo>
				<LabelText>Total games:</LabelText>
				<span>{item.totalGames}</span>
			</TableDataInfo>
			<TableDataInfo>
				<LabelText>Games Won:</LabelText>
				<span>{item.gamesWon}</span>
			</TableDataInfo>
			<TableDataPrice>
				<span>{item.PriceETH}</span>
				<EthText>&nbsp;ETH</EthText>
			</TableDataPrice>
		</TableRow>
	);
};
