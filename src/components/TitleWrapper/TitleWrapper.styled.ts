import { styled } from "styled-components";

export const TitleWrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 0.0625rem solid ${props => props.theme.colors.titleBottomBorder};
	height: 5.125rem;
	padding-bottom: 1rem;

	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		height: 9.75rem;
	}
`;
