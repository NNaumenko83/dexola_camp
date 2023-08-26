import { styled } from "styled-components";

export const TableStyled = styled.table`
	min-width: 100%;
`;

export const TableHead = styled.thead`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: none;
	}
`;

export const TableBody = styled.tbody`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		& > :nth-child(even) {
			background-color: ${props => props.theme.colors.tableRowSecondBackground};
		}
	}
`;
