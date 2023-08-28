import { styled } from "styled-components";

export const InputWrapper = styled.div`
	height: 4.25rem;
	width: 100%;
`;

export const StarInput = styled.span`
	color: ${props => props.theme.colors.inputStarColor};
	margin-right: 1.25rem;
`;
