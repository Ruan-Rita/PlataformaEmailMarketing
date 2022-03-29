import React, { useEffect, useState } from "react";
import InputComponent from "../../components/FormsComponents/InputComponent";
import SubmitButton from "../../components/FormsComponents/SubmitButton";
import Header from "../../components/Header";
import ModalCommon from "../../components/Modal";
import ChipInput from "material-ui-chip-input";
import { Container, Content, Title, DataTable, Template } from "./styles";
import { config } from "../../env-example";
import { useToasts } from "react-toast-notifications";
import { API } from "../../utils/API";

const Dashboard: React.FC = () => {
  const { addToast } = useToasts();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showOpen, setShowOpen] = useState<boolean>(false);
  const [description, setDescription] = useState("");
  const [emails, setEmail] = useState<any>(["ruan.ritah@gmail.com"]);
  const [allEmails, setAllEmails] = useState<any>([]);

  async function onSumit() {
    addToast("Disparando ...", {
      appearance: "success",
      autoDismiss: true,
    });
    const response = await API("post", "emaillog", {
      emails,
      template: "default",
      description,
    });
    const data: any = response.data;
    const error: any = response.error;

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
    setModalOpen(false);
    addToast(data.message, {
      appearance: "success",
      autoDismiss: true,
    });
  }

  async function getMyEmails() {
    const response = await API("get", "/emaillog");
    const data: any = response.data;
    const error: any = response.error;

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

    setAllEmails(data.data);
  }

  useEffect(() => {
    getMyEmails();
  }, []);

  return (
    <Container>
      <Header />
      <ModalCommon
        title="Novo e-mail"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <InputComponent
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          label="Descrição:"
          placeholder="Digite um breve texto"
        />
        <InputComponent label="E-mails:">
          <ChipInput
            className="chipInput"
            defaultValue={["ruan.ritah@gmail.com"]}
            onChange={(chips) => setEmail(chips)}
            placeholder="Digite um email e enter"
          />
        </InputComponent>
        <InputComponent label="Template:">
          <Template data={config.API_TEMPLATE} />
        </InputComponent>
        <SubmitButton
          onClick={() => onSumit()}
          type="button"
          label="Encaminhar"
        />
      </ModalCommon>
      <ModalCommon
        title="Novo e-mail"
        modalOpen={showOpen}
        setModalOpen={setShowOpen}
        width="700px"
      >
        <InputComponent label="Template">
          <Template height="400" data={config.API_TEMPLATE} />
        </InputComponent>
        <SubmitButton
          onClick={() => setShowOpen(false)}
          type="button"
          label="Fechar"
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
            <span>Descrição</span>
            <span>Emails</span>
            <span>Status</span>
            <span>Data criação</span>
          </div>
          <section>
            {allEmails &&
              allEmails.map((item: any) => (
                <div className="data">
                  <span>{item.description}</span>
                  <span>{item.email}</span>
                  <span>{item.template}</span>
                  <span>{item.created_at}</span>
                  <span className="showTemplate">
                    <h4 onClick={() => setShowOpen(true)}>Visualizar</h4>
                  </span>
                </div>
              ))}
          </section>
        </DataTable>
      </Content>
    </Container>
  );
};

export default Dashboard;
