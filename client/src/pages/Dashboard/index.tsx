import React from "react";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>Dashboard</Content>
    </Container>
  );
};

export default Dashboard;
