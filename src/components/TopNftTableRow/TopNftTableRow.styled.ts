import { styled } from "styled-components";

export const TableRow = styled.tr`
	border-bottom: 1px solid #204ffe;

	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;

		display: grid;

		grid-template-columns: 80px 1fr 1fr;
		grid-template-rows: repeat(4, auto);

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

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		font-size: ${props => props.theme.fontSizes.body.tablet};
		line-height: 1.31;
		letter-spacing: -0.02rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		font-size: ${props => props.theme.fontSizes.body.web};
		line-height: 1.33;
		letter-spacing: -0.0225rem;
	}
`;

export const TableData = styled.td`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: block;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
`;

export const TableDataName = styled(TableData)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: flex;
		color: ${props => props.theme.colors.subtitle};
		font-family: Kanit, sans-serif;
		font-size: ${props => props.theme.fontSizes.subTitle.mobile};
		font-weight: ${props => props.theme.fontWeights.medium};
		line-height: 1.4;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		min-width: 15rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		min-width: 28.0625rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
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

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: table-cell;
		width: 4rem;
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
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;

export const TableDataRarity = styled(TableDataInfo)`
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		min-width: 11.25rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
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

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		display: table-cell;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;
