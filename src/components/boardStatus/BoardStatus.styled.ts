import styled from "styled-components";

export const BoardStatusParagraph = styled.p`
  margin-top: 10px;
  & span {
    display: inline-block;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const BoardStatusTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

export const BoardIdContainer = styled.span`
  font-family: monospace;
  background-color: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-size: 0.9em;
  color: #495057;
`;

export const CopyButton = styled.button<{ $copied: boolean }>`
  margin-left: 8px;
  padding: 6px 12px;
  background-color: ${(props) =>
    props.$copied ? "#28a745" : "rgb(81 203 238)"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${(props) => (props.$copied ? "#28a745" : "#0056b3")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const BoardStatusMainDiv = styled.div`
  width: 330px;
  & h2 {
    margin: 0;
    margin-bottom: 10px;
  }
`;
