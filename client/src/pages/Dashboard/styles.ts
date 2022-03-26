import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  height: 500px;
`;
export const BannerInfomation = styled.div`
  width: 100%;
  background-color: #282828;
`;
interface IDescription {
  invertFlex?: boolean;
  textColor?: string;
  titleColor?: string;
}
export const Description = styled.div<IDescription>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;

  h1,
  p {
    padding: 0px 30px;

    text-align: ${({ invertFlex }) => (invertFlex ? "right" : "left")};
  }
  h1 {
    font-size: 2rem;
    color: ${({ titleColor }) => (titleColor ? titleColor : "#333")};
  }
  p {
    color: ${({ textColor }) => (textColor ? textColor : "#333")};
    margin-top: 20px;
    font-size: 1.2rem;
  }
`;
export const Demonstration = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 400px;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
`;
