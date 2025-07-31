import styled from "styled-components";

export const BoardControlParagraph = styled.p`
  display: flex;
  gap: 5px;
`;

export const BoardControlMainDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  & h2 {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const BoardControlButton = styled.button`
  min-width: 182px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  color: black;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

  &:hover {
    background: linear-gradient(to bottom, #f8f8f8 0%, #e8e8e8 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: linear-gradient(to bottom, #e8e8e8 0%, #d8d8d8 100%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;