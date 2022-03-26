import React from "react";
import { Container, Image, Text, Strong, DivButton } from "./styles";
import logo from "../../../assets/images/logo-purple.png";
import { Link } from "react-router-dom";

const HeaderHomePage: React.FC = () => {
  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo da plataforma" />
      </div>
      <div>
        <Link to="/login">
          <DivButton>Login</DivButton>
        </Link>
        <Link to="/register">
          <DivButton>Registra-se</DivButton>
        </Link>
      </div>
    </Container>
  );
};

export default HeaderHomePage;
