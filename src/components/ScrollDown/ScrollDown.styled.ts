import { keyframes, styled } from "styled-components";

const delayAppear = keyframes`   0% {     opacity: 0;   }   100% {     opacity: 1;   } `;

const scrollDownOne = keyframes`
0%{
    opacity:0.2;
}

33%{
    opacity:1;
}
    
80%{opacity:1;
}

100%{
    opacity:0.2;

}

`;

const scrollDownTwo = keyframes`
0%{
    opacity:0;
}

33%{
    opacity:0;
}
    
40%{opacity:1;
}

70%{opacity:1;
}

100%{
    opacity:0;

}

`;

const scrollDownThree = keyframes`
0%{
    opacity:0;
}



66%{opacity:0;
}

70%{opacity:1;
}

100%{
    opacity:0;

}

`;

export const ScrollDownStyled = styled.div`
	position: absolute;
	opacity: 0;
	right: 76px;
	bottom: 47px;
	z-index: 99;
	width: 5.5rem;
	height: 5.5rem;
	border-radius: 50%;

	border: 1px solid ${props => props.theme.colors.scrollDownBorderolor};
	border-width: 1px;

	animation: ${delayAppear} 2000ms ease-in-out 5000ms forwards;
`;

export const ArrowOne = styled.div`
	position: absolute;
	top: 35%;
	left: 50%;
	border: 2px solid ${props => props.theme.colors.scrollDownBorderolor};
	height: 18px;
	width: 18px;
	transform: translate(-50%, -50%) rotate(45deg);
	border-top: transparent;
	border-left: transparent;
	animation: ${scrollDownOne} 2400ms ease-in-out infinite;
`;

export const ArrowTwo = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	border: 2px solid ${props => props.theme.colors.scrollDownBorderolor};
	height: 18px;
	width: 18px;
	transform: translate(-50%, -50%) rotate(45deg);
	border-top: transparent;
	border-left: transparent;
	animation: ${scrollDownTwo} 2400ms ease-in-out infinite;
`;

export const ArrowThree = styled.div`
	position: absolute;
	top: 65%;
	left: 50%;
	border: 2px solid ${props => props.theme.colors.scrollDownBorderolor};
	height: 18px;
	width: 18px;
	transform: translate(-50%, -50%) rotate(45deg);
	border-top: transparent;
	border-left: transparent;
	animation: ${scrollDownThree} 2400ms ease-in-out infinite;
`;
