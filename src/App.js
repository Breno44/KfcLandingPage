import React from "react";
import LogoKfc from "./assets/images/logo.png";
import { Main, Header, Ai, Logo, Navigation, Li, Ali, Content, Text, H2, P, OrderNow } from "./App.elements.js";

const App = () => {
  return (
    <Main>
      <Header>
        <Ai href="#">
          <Logo src={LogoKfc} alt="" />
        </Ai>
        <Navigation>
          <Li>
            <Ali href="#">Home</Ali>
          </Li>
          <Li>
            <Ali href="#">Menu</Ali>
          </Li>
          <Li>
            <Ali href="#">About</Ali>
          </Li>
          <Li>
            <Ali href="#">Contact</Ali>
          </Li>
        </Navigation>
      </Header>
      <Content>
        <Text>
          <H2>
            Its finger <br /> Lickin <span> Good </span>
          </H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
            doloribus! orem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
            natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </P>
          <OrderNow href="#">Order Now</OrderNow>
        </Text>
      </Content>
    </Main>
  );
};

export default App;
