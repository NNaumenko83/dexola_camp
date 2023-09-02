import { styled } from "styled-components";

export const TableStyled = styled.table`
	min-width: 100%;
	margin-top: 2rem;
	border-collapse: collapse;
	border: none;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		margin-top: 3.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		margin-top: 5.625rem;
	}
`;

export const TableHead = styled.thead`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;

		white-space: nowrap;
		clip-path: inset(100%);
		clip: rect(0 0 0 0);
		overflow: hidden;
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

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		height: 3.75rem;

		font-size: ${props => props.theme.fontSizes.tableHead.web};
		letter-spacing: -0.03rem;
		line-height: 1.5;
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
	text-align: left;

	& > :not(:last-child) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	& > :nth-child(2) {
		padding-left: 1.5rem;
	}

	& > :last-child {
		padding-left: 1.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		& > :not(:last-child) {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		& > :nth-child(2) {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		& > :last-child {
			padding-left: 1.5rem;
			padding-right: 1.4375rem;
		}
	}
`;
