import { styled } from "styled-components";

export const TableRow = styled.tr`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: grid;

		grid-template-columns: 80px 1fr 1fr;
		grid-template-rows: repeat(4, auto);

		margin-top: 1rem;
		margin-bottom: 1rem;

		& > :nth-child(1) {
			grid-area: 2 / 1 / 5 / 2;
			padding-bottom: 1rem;
		}
		& > :nth-child(2) {
			grid-area: 1 / 1 / 2 / 3;
			padding-top: 1rem;
			padding-bottom: 0.75rem;
		}
		& > :nth-child(3) {
			grid-area: 2 / 2 / 3 / 4;
		}
		& > :nth-child(4) {
			grid-area: 3 / 2 / 4 / 4;
		}
		& > :nth-child(5) {
			grid-area: 4 / 2 / 5 / 4;
			padding-bottom: 1rem;
		}
		& > :nth-child(6) {
			grid-area: 1 / 3 / 2 / 4;
			padding-top: 1rem;
			padding-bottom: 0.75rem;
		}
	}
`;

export const TableData = styled.td`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: block;
	}
`;

export const TableDataName = styled(TableData)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		color: ${props => props.theme.colors.subtitle};
		font-family: Kanit;
		font-size: ${props => props.theme.fontSizes.subTitle.mobile};
		font-weight: ${props => props.theme.fontWeights.medium};
		line-height: 1.4;
	}
`;

export const NumberItem = styled.span`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const TableDataAvatar = styled(TableData)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const TableDataPrice = styled(TableData)`
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		color: ${props => props.theme.colors.subtitle};
		font-family: Kanit;
		font-size: ${props => props.theme.fontSizes.subTitle.mobile};
		font-weight: ${props => props.theme.fontWeights.medium};
		line-height: 1.4;
	}
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
