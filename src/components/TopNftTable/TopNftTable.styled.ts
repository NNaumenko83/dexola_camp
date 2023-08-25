import { styled } from "styled-components";

export const TableStyled = styled.table`
	min-width: 100%;
	border: 1px solid red;
`;

export const TableHead = styled.thead`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		display: none;
	}
`;
