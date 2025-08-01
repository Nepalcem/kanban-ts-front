import styled from "styled-components";

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 10px;
    padding: 30px 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 4px;
  padding: 50px 30px;
`;
export const TasksWrapperTitle = styled.h2`
  max-width: 320px;
  @media (min-width: 768px) {
    max-width: 480px;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;
