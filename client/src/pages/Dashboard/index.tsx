import React, { useState } from "react";
import InputComponent from "../../components/FormsComponents/InputComponent";
import SubmitButton from "../../components/FormsComponents/SubmitButton";
import Header from "../../components/Header";
import ModalCommon from "../../components/Modal";
import { Container, Content, Title, DataTable } from "./styles";

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Header />
      <ModalCommon
        title="Novo e-mail"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <InputComponent
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          label="Nome:"
          placeholder="Digite o seu nome"
        />
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
          type="password"
          label="Senha:"
          placeholder="Digite uma senha"
        />
      </ModalCommon>
      <Content>
        <Title>
          <h1>Análise Geral</h1>

          <SubmitButton
            onClick={() => setModalOpen(true)}
            label="Disparar email"
          />
        </Title>

        <DataTable>
          <div className="header">
            <span>Companha</span>
            <span>Descrição</span>
            <span>Emails</span>
            <span>Status</span>
            <span>Data criação</span>
          </div>
          <section>
            <div className="data">
              <span>teste</span>
              <span>decrioton</span>
              <span>ruan@gamil.com</span>
              <span>ativo</span>
              <span>10/02/2020</span>
            </div>
            <div className="data">
              <span>teste</span>
              <span>decrioton</span>
              <span>ruan@gamil.com</span>
              <span>ativo</span>
              <span>10/02/2020</span>
            </div>

            <div className="data">
              <span>teste</span>
              <span>decrioton</span>
              <span>ruan@gamil.com</span>
              <span>ativo</span>
              <span>10/02/2020</span>
            </div>
            <div className="data">
              <span>teste</span>
              <span>decrioton</span>
              <span>ruan@gamil.com</span>
              <span>ativo</span>
              <span>10/02/2020</span>
            </div>
          </section>
        </DataTable>
      </Content>
    </Container>
  );
};

export default Dashboard;
