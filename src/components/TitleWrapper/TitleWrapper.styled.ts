import { styled } from "styled-components";

export const TitleWrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 0.0625rem solid ${props => props.theme.colors.titleBottomBorder};
	margin-bottom: 2rem;
`;
