import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";


export const StyledTrashIcon = styled(FaTrashAlt)`
  font-size: 20px;
  color: #ee4b2b;
  cursor: pointer;
  padding: 5px;
  &:hover {
    color: #fff;
    background-color: #ee4b2b;
    transition: all 0.3s ease;
    border-radius: 5px;
  }
`;