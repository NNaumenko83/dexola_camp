import { styled } from "styled-components";

export const TableRow = styled.tr`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: grid;

		grid-template-columns: 80px 1fr 1fr;
		grid-template-rows: repeat(4, 1fr);
		/* width: 100%; */

		& > :nth-child(1) {
			grid-area: 2 / 1 / 5 / 2;
		}
		& > :nth-child(2) {
			grid-area: 1 / 1 / 2 / 3;
		}
		& > :nth-child(3) {
			grid-area: 2 / 2 / 3 / 4;
		}
		& > :nth-child(4) {
			grid-area: 3 / 2 / 4 / 4;
		}
		& > :nth-child(5) {
			grid-area: 4 / 2 / 5 / 4;
		}
		& > :nth-child(6) {
			grid-area: 1 / 3 / 2 / 4;
		}
	}
`;

export const TableData = styled.td`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: block;
	}
`;

export const TableDataName = styled(TableData)``;

export const NumberItem = styled.span`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const TableDataAvatar = styled(TableData)`
	outline: 1px solid red;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const TableDataPrice = styled(TableData)`
	outline: 1px solid blue;
	display: flex;
	justify-content: flex-end;
`;

export const LabelText = styled.span`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const EthText = styled.span`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const TableDataInfo = styled(TableData)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: flex;
		justify-content: space-between;
	}
`;
