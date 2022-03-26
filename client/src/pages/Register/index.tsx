import React, { useState } from "react";
import { Container, Content, DivImg, RegisterContainer } from "./styles";
import logo from "../../assets/images/logo-purple.png";
import InputComponent from "../../components/FormsComponents/InputComponent";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/FormsComponents/SubmitButton";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function onSumitForm() {
    console.log("Cadastrar");
  }
  return (
    <Container>
      <Content>
        <DivImg>
          <Link to="/">
            <img src={logo} alt="logo do sistema" />
          </Link>
        </DivImg>
        <RegisterContainer>
          <h1>Criar Conta</h1>
          <InputComponent
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            label="Nome:"
            labelStyle={{ color: "white" }}
            placeholder="Digite o seu nome"
          />
          <InputComponent
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            labelStyle={{ color: "white" }}
            type="email"
            label="E-mail:"
            placeholder="Digite o seu e-mail"
          />
          <InputComponent
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            labelStyle={{ color: "white" }}
            type={showPassword ? "text" : "password"}
            label="Senha:"
            placeholder="Digite uma senha"
          />
          <label className="showPassword">
            <InputComponent
              onChange={(e) => setShowPassword(e.target.checked)}
              checked={showPassword}
              labelStyle={{ color: "#bbb" }}
              type="checkbox"
              label="Exibir senha"
              placeholder="Digite o seu e-mail"
            />
          </label>
          <span className="submitButton">
            <SubmitButton label="Registrar" onClick={() => onSumitForm()} />
          </span>
          <h5>
            Possui conta? <Link to="/login">Entrar</Link>
          </h5>
        </RegisterContainer>
      </Content>
    </Container>
  );
};

export default Register;
