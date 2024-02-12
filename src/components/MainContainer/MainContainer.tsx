import { ReactNode } from "react";
import { MainContainerDiv } from "./MainContainer.styled";

interface MainContainerProps {
  children: ReactNode;
}

function MainContainer({ children }: MainContainerProps) {
  return <MainContainerDiv>{children}</MainContainerDiv>;
}

export default MainContainer;
