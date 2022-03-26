import styled from "styled-components";

interface IContainer {
  homepage?: boolean;
}
export const Container = styled.main<IContainer>`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px 20px;
  height: 70px;
  box-shadow: 0px 1px #efefef;
  /* background: red; */

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.4rem;

    &:hover {
      color: #eee !important;

      > span {
        background: ${({ theme }) => theme.backgroundPrimary};
      }
    }
    &:last-child {
      span {
        border: 1px solid ${({ theme }) => theme.backgroundPrimary};
        margin-left: 10px;
      }
    }
  }
`;

export const Image = styled.img`
  max-width: 220px;
  /* height: 4px; */
  object-fit: cover;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-left: 20px;
`;

export const Strong = styled.span`
  font-weight: 600;
  color: white;
  font-size: 1.5rem;
`;

export const DivButton = styled.span`
  padding: 15px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s all;
`;
