import styled from "styled-components";

export const FormModal = styled.form`
  width: 550px;
`;
export const HeaderModal = styled.form`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      transform: scale(1.057);
      color: red;
    }
  }
`;
