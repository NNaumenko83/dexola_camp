import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  outline: 1px solid red;

  max-width: 23.75rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 44.75rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 76.25rem;
  }
`;
