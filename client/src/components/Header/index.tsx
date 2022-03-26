import React from "react";
import { Container, Image } from "./styles";
import logo from "../../assets/images/logo.png";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo da plataforma" />
        <Link to="/">Dashboard</Link>
        <Link to="/">Dashboard</Link>
      </div>
      <div>
        <h4>Ruan Rita</h4>
        <BsFillGearFill />
      </div>
    </Container>
  );
};

export default Header;
