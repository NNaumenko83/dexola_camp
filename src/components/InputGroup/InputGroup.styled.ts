import { styled } from "styled-components";

export const InputGroupStyled = styled.div<{ $isInvalid?: boolean }>`
	display: flex;
	height: 2.5rem;
	cursor: pointer;
	transition: all 220ms linear;
	border-bottom: ${props =>
		props.$isInvalid
			? `1px solid ${props.theme.colors.inputErrorBorderBottom}`
			: `1px solid ${props.theme.colors.inputBorderBottom}`};

	&:hover,
	&:focus {
		border-bottom: 1px solid ${props => props.theme.colors.inputBorderHoverColor};
	}

	&:focus-within {
		border-bottom: 1px solid blue;
	}
`;
