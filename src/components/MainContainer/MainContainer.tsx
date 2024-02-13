import { ReactNode, FC } from "react";
import { MainContainerDiv } from "./MainContainer.styled";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <MainContainerDiv>{children}</MainContainerDiv>;
};

export default MainContainer;
