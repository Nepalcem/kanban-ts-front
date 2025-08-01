import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { mainBlueAccent } from "utils/globalVariables";

export const StyledEditIcon = styled(FaEdit)`
  font-size: 22px;
  color: rgb(81, 203, 238);
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #fff;
    background-color: ${mainBlueAccent};
    transition: all 0.3s ease;
    border-radius: 5px;
  }
`;
