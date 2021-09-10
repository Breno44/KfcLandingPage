import React from "react";
import "./App.scss";
import LogoKfc from "./assets/images/logo.png";
import BurgerFries from "./assets/images/burger_fries.png";
import Burger from "./assets/images/burger.png";
import FrenchFries from "./assets/images/french_fries.png";
import FriedChicken from "./assets/images/fried_chicken.png";
import {
  Main,
  Header,
  Ai,
  Logo,
  Navigation,
  Li,
  Ali,
  Content,
  Text,
  H2,
  P,
  OrderNow,
  Span,
  Slider,
  Slides,
} from "./App.elements.js";

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
            Its finger <br /> Lickin <Span> Good </Span>
          </H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
            doloribus! orem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
            natus eveniet ratione temporibus aperiam harum alias!
          </P>
          <OrderNow href="#">Order Now</OrderNow>
        </Text>
        <Slider>
          <Slides className="active">
            <img src={BurgerFries} alt="" />
          </Slides>
          <Slides>
            <img src={FrenchFries} alt="" />
          </Slides>
          <Slides>
            <img src={Burger} alt="" />
          </Slides>
          <Slides>
            <img src={FriedChicken} alt="" />
          </Slides>
        </Slider>
      </Content>
    </Main>
  );
};

export default App;
