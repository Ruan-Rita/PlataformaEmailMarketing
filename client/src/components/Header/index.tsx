import React from "react";
import { Container, Image, Text, Strong } from "./styles";
import logo from "../../assets/images/logo.png";
const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logo} alt="Logo da plataforma" />
      <Text>
        Cambio
        <Strong>Real</Strong>
      </Text>
    </Container>
  );
};

export default Header;
