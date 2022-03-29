import styled from "styled-components";

export const DivInput = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .chipInput {
    margin-top: 15px;
  }
  .MuiInput-root{
    width: 100% ;
  }

  label {
    color: ${(props) => props.theme.title};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
  }
  input {
    margin-top: 3%;
    background: ${(props) => props.theme.backgroundForm};
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
      0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    border-radius: 6px;
    padding: 12px;
    border: none;
    color: ${(props) => props.theme.title};
  }
  button {
    align-self: end;
  }
`;

export const LabelCheckBox = styled.label`
  width: 100%;
  font-size: 0.8rem !important;
  cursor: pointer;
  font-weight: 400 !important;
  color: ${(props) => props.theme.title};
  display: flex;
  align-items: baseline;

  input {
    margin-right: 10px;
  }
`;
