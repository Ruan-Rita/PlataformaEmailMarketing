import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.backgroundPrimary};

  height: 70px;

  > div {
    display: flex;
    align-items: center;

    > a {
      color: white;
    }
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  fill: red;
`;
