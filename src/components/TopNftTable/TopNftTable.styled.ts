import { styled } from "styled-components";

export const TableStyled = styled.table`
	min-width: 100%;
	border-collapse: collapse;
	border: none;
`;

export const TableHead = styled.thead`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: none;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		height: 5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

		color: ${props => props.theme.colors.tableHead};
		font-family: Kanit;
		font-size: ${props => props.theme.fontSizes.tableHead.tablet};
		font-weight: ${props => props.theme.fontWeights.medium};
		line-height: 1.4;
	}
`;

export const TableBody = styled.tbody`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		& > :nth-child(even) {
			background-color: ${props => props.theme.colors.tableRowSecondBackground};
		}
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		& > :nth-child(odd) {
			background-color: ${props => props.theme.colors.tableRowSecondBackground};
		}
		& > :nth-child(1) {
			border-top: 1px solid #204ffe;
		}
	}
`;

export const TableHeadRow = styled.tr`
	& > :not(:last-child) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;
