import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;
export const Template = styled.object`
  margin-top: 10px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  h1 {
    color: ${({ theme }) => theme.title};
    font-size: 2rem;
  }

  button {
    font-size: 1rem;
  }
`;

export const DataTable = styled.div`
  width: 100%;
  box-shadow: 0px 1px 2px #cdcdcd;
  margin-top: 30px;

  section {
    max-height: 400px;
    overflow: auto;
    .showTemplate {
      h4 {
        color: ${(props) => props.theme.backgroundPrimary};
        font-weight: 700;
        cursor: pointer;
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #aaa;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.backgroundPrimary};
    }
  }
  div {
    width: 100%;
    display: flex;

    > span {
      width: calc(100% / 5);
      padding: 14px;
    }
  }
  .header {
    background-color: #444;
    color: white;
    > span {
      border-right: 1px solid white;
    }
  }
  .data {
    border-bottom: 1px solid #fee1ef;
    &:hover {
      background: #eee;
    }
    > span {
    }
  }
`;
