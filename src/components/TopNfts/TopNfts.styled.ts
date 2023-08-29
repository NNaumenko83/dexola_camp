import { styled } from "styled-components";
import { TitleStyled } from "../Title/Title.styled";
import { ContainerStyled } from "../Container/Container.styled";

export const TitleNfs = styled(TitleStyled)``;

export const ContainerStyledTop = styled(ContainerStyled)`
	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		padding-left: 0;
		padding-right: 0;
	}
`;

export const TopNfcSection = styled.section`
	margin-top: 5.5625rem;
`;
