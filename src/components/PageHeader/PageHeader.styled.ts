import styled from "styled-components";

export const PageHeaderStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    max-width: fit-content;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  align-items: center;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 4px;
  padding: 20px 30px 30px 30px;
`;