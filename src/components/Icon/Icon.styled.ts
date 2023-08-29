import { styled } from "styled-components";

export const StyledIcon = styled.svg<{ $visible?: boolean }>`
	display: ${props => (props.$visible ? "block" : "none")};
	fill: currentColor;

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		display: block;
	}
`;
