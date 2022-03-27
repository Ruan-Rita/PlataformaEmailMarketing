import React, { useState } from "react";
import { Content, DivImg, LoginContainer, DivMarketing } from "./styles";
import logo from "../../assets/images/logo-text.png";
import imgMain from "../../assets/images/email-marketing.png";
import InputComponent from "../../components/FormsComponents/InputComponent";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/FormsComponents/SubmitButton";
import { API } from "../../utils/API";
import { useToasts } from "react-toast-notifications";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  async function onSumitLogin() {
    const response = await API("post", "login", {
      email,
      password,
    });
    const data: any = response.data;
    const error: any = response.error;

    console.log("testeeee", data.data.message);

    if (error) {
      addToast(data.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (data.error) {
      addToast(data.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    
    const userTokens: any = data.data;

    const dataResponse: any = {
      user: JSON.stringify(userTokens.username),
      email: JSON.stringify(userTokens.email),
      token: userTokens.token,
    };

    Object.keys(dataResponse).forEach((key) => {
      localStorage.setItem(key, dataResponse[key]);
    });
    navigate("/dashboard");
  }

  return (
    <Content>
      <DivMarketing>
        <article>
          <DivImg>
            <Link to="/">
              <img
                style={{ maxWidth: "220px" }}
                src={logo}
                alt="logo do sistema "
              />
            </Link>
          </DivImg>
          <DivImg style={{ width: "300px" }}>
            <Link to="/">
              <img src={imgMain} alt="logo do sistema " />
            </Link>
          </DivImg>
          <p>
            Lorem ipsum dolor sit amet. Id odio labore hic architecto quibusdam
            et quam. Sit eligendi magnam nulla alias vel enim.
          </p>
        </article>
      </DivMarketing>
      <LoginContainer>
        <article>
          <h1>Login</h1>

          <InputComponent
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            label="E-mail:"
            placeholder="Digite o seu e-mail"
          />
          <InputComponent
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            label="Senha:"
            placeholder="Digite uma senha"
          />
          <label className="showPassword">
            <InputComponent
              onChange={(e) => setShowPassword(e.target.checked)}
              checked={showPassword}
              type="checkbox"
              label="Exibir senha"
              placeholder="Digite o seu e-mail"
            />
          </label>
          <span className="submitButton">
            <SubmitButton onClick={() => onSumitLogin()} label="Entrar" />
          </span>
          <h5>
            Não tem conta? <Link to="/register">Criar conta</Link>
          </h5>
        </article>
      </LoginContainer>
    </Content>
  );
};

export default Login;
