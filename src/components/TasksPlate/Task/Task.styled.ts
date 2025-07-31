import styled from "styled-components";
import { mainBlueAccent } from "utils/globalVariables";

export const TaskWrapper = styled.li`
  margin: 8px;
  padding: 8px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  /* background-color: #faf3de; */
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  & p {
    margin: 0;
    overflow: hidden;
  }
  min-height: 100px;
  position: relative;

  &:hover {
    background: linear-gradient(to bottom, #f8f8f8 0%, #e8e8e8 100%);
    box-shadow: 0 1px 2px rgba(90, 90, 90, 0.15), 0 1px 2px rgba(85, 85, 85, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const TaskTitle = styled.h4`
  margin: 0;
`;

export const TaskTitleSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${mainBlueAccent};
`;

export const TaskButtons = styled.div`
position: absolute;
right: 10px;
bottom: 10px;
display: flex;
gap: 10px;
`;