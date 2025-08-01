import styled from "styled-components";

export const ColumnContainer = styled.div`
  border: 1px solid lightgrey;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 300px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
  }
  display: flex;
  flex-direction: column;
`;
export const ColumnTitle = styled.h2`
  padding: 0 16px;
  text-transform: capitalize;
`;
export const TaskList = styled.ul`
  padding: 8px;
  list-style: none;
  flex-grow: 1;
`;
