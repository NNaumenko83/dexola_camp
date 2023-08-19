import { styled } from "styled-components";

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-radius: 50%;

	&:hover,
	&:focus {
		color: red;
	}
`;
