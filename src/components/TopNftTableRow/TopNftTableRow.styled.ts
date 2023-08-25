import { styled } from "styled-components";

export const TableRow = styled.tr`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: grid;
		width: 100%;
	}
`;

export const TableData = styled.td`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: block;
	}
`;
