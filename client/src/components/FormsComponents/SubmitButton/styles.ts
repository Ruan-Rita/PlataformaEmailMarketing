import styled from "styled-components";

export const ButtonCreate = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;

  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 6px;
  background: ${(props) => props.theme.submitButton};
  color: white;
  padding: 15px 10px;
  border: none;
  width: 200px;
  height: 36px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  &:disabled {
    background-color: #03844d;
    opacity: 0.3;
    cursor: disabled;
  }

  &:not(:disabled) {
    background-color: ${(props) => props.theme.greenHighlight};
    cursor: pointer;

    &:hover {
      background: #03844d;
    }
  }
`;
