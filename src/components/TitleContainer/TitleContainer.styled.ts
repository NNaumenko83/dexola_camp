import { styled } from "styled-components";
import { ContainerStyled } from "../Container/Container.styled";

export const ContainerStyledTop = styled(ContainerStyled)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		padding-left: 0;
		padding-right: 0;
	}
`;
