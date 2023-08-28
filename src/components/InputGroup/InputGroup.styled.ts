import { styled } from "styled-components";

export const InputGroupStyled = styled.div<{ $isInvalid?: boolean }>`
	display: flex;
	height: 2.5rem;
	border-bottom: ${props => {
		return props.$isInvalid
			? `1px solid ${props.theme.colors.inputErrorBorderBottom}`
			: `1px solid ${props.theme.colors.inputBorderBottom}`;
	}};
`;
