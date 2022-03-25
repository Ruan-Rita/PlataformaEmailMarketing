import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  height: 120px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const Text = styled.div`
  font-size: 2rem;
  color: white;
  margin-left: 20px;
`;
export const Strong = styled.span`
  font-weight: 600;
  color: white;
  font-size: 2rem;
`;
