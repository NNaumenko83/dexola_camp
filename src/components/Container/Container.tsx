import { ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

interface IContainerProps {
  children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
