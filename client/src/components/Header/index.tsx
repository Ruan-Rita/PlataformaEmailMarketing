import React, { useEffect, useState } from "react";
import { Container, Image } from "./styles";
import logo from "../../assets/images/logo.png";
import { BsFillGearFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Collapse } from "react-collapse";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [settings, setSettings] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("teste", pathname);
  });
  function handleLoggout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo da plataforma" />
        <Link
          to="/dashboard"
          className={pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
        <Link
          to="/template"
          className={pathname === "/template" ? "active" : ""}
        >
          Template
        </Link>
      </div>
      <div>
        <h4>Ruan Rita</h4>
        <section>
          <BsFillGearFill onClick={() => setSettings(!settings)} />
          <Collapse className="collapse" isOpened={settings}>
            <a onClick={() => handleLoggout()}>
              <ImExit /> Sair
            </a>
          </Collapse>
        </section>
      </div>
    </Container>
  );
};

export default Header;
