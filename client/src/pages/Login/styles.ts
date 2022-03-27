import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vh;
  min-height: 100vh;
  margin: 0px auto;
`;

export const DivImg = styled.div`
  margin-bottom: 10px;

  img {
    width: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:first-child {
    transition: 0.3s all;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const DivMarketing = styled.section`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 50%;
  width: 50%;

  article {
    max-height: 600px;
    display: flex;
    max-width: 600px;

    height: -webkit-fill-available;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;
  }

  p {
    max-width: 70%;
    color: white;
    font-size: 1.4rem;
  }
`;
export const LoginContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;

  article {
    max-height: 600px;
    max-width: 600px;

    display: flex;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    flex-direction: column;
    padding: 40px 80px;

    justify-content: center;
    > h1 {
      color: ${({ theme }) => theme.backgroundPrimary};
      text-align: center;
      font-size: 3rem;
    }
    > h5 {
      text-align: center;
      margin-top: 10px;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.backgroundPrimary};
        font-weight: bold;
      }
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
  }
`;
