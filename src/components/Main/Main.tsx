import { ReactNode } from "react";
import { MainStyled } from "./Main.styled";

interface IMainProps {
  children: ReactNode;
}

export const Main: React.FC<IMainProps> = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};
