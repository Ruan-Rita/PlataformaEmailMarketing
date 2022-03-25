import React from "react";
import { Container } from "./styles";

interface IBannerAds {
  describeSideLeft?: boolean;
}
const BannerAds: React.FC<IBannerAds> = ({ describeSideLeft }) => {
  return <Container>Rusan</Container>;
};

export default BannerAds;
