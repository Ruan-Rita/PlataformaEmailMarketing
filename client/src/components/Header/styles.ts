import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: start;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  height: 70px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  fill: red;
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
