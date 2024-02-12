import styled from "styled-components";

export const AddTaskButtonBig = styled.button`
  cursor: pointer;

  margin: 16px;
  display: flex;

  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background-color: #e3f3ff;

  color: #111;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28571;

  & img {
    width: 24px;
    height: 24px;
    stroke: #111;
  }
`;
