import styled from "styled-components";

export const Main = styled.section`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(#f0483a, #d10a20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Ai = styled.a``;

export const Ali = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;
  margin-left: 40px;
`;

export const Logo = styled.img`
  max-width: 90px;
`;

export const Navigation = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 5em;
  font-weight: 300;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const P = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 1.1 em;
  line-height: 1.5em;
  margin: 20px 0;
`;

export const OrderNow = styled.a`
  position: relative;
  display: inline-block;
  padding: 20px 50px;
  background: #fff;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 40px;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    letter-spacing: 2px;
  }
`;

export const Slider = styled.div`
  position: relative;
`;

export const Slides = styled.div`
  display: none;

  img {
    width: 100%;
    max-width: 600px;
  }
`;
