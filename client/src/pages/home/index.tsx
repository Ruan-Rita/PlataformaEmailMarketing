import React from "react";
import {
  Container,
  Banner,
  Description,
  Content,
  Demonstration,
  BannerInfomation,
} from "./styles";
import homeImg from "../../assets/images/email-marketing-homepage.png";
import sendEmailImg from "../../assets/images/disparo-email.jpg";
import HeaderHomePage from "../../components/Header/HomePage";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderHomePage />
        <Banner>
          <Description>
            <h1>
              Alcance seus objetivos de marketing com a Email<b>Real</b>
            </h1>
            <p>
              Crie e-mails envolventes com facilidade para expandir sua marca e
              vender mais, aproveitando ao máximo o marketing por e-mail.
            </p>
          </Description>
          <Demonstration>
            <img src={homeImg} alt="demonstração de email marketing" />
          </Demonstration>
        </Banner>
      </Content>
      <BannerInfomation>
        <Content>
          <Banner>
            <Demonstration>
              <img src={sendEmailImg} alt="Lorem ipsum dolor sit amet" />
            </Demonstration>
            <Description invertFlex textColor="#ddd" titleColor="#9822FF">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                Ut enim ad minim veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur. Quis aute iure reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </Description>
          </Banner>
        </Content>
      </BannerInfomation>
    </Container>
  );
};

export default Home;
