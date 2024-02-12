import styled from "styled-components";

export const TaskWrapper = styled.li`
  margin: 8px;
  padding: 8px;
  border: 1px solid brown;
  border-radius: 4px;
  background-color: #faf3de;
  & p {
    margin: 0;
    overflow: hidden;
  }
  min-height: 100px;
  position: relative;
`;

export const TaskTitle = styled.h3`
  margin: 0;
`;

export const TaskButtons = styled.div`
position: absolute;
right: 10px;
bottom: 10px;
display: flex;
gap: 10px;
`;