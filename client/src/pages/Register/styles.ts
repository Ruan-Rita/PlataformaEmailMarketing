import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0px auto;
`;

export const DivImg = styled.div`
  width: 600px;
  margin-bottom: 10px;

  img {
    flex: 0 0 0;
    max-width: 220px;
    object-fit: cover;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const RegisterContainer = styled.form`
  width: 600px;
  padding: 40px 80px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  > h1 {
    color: white;
    text-align: center;
  }

  .showPassword {
    display: flex;
    align-items: center;
    margin-top: 10px;
    > div {
      margin: 0px;
    }
  }

  .submitButton {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  > h5 {
    text-align: center;
    margin-top: 10px;
    color: #bbb;

    a {
      text-decoration: none;
      font-weight: bold;
      color: white;
    }
  }
`;
