import styled from "styled-components";

export const Main = styled.section`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(#f0483a, #d10a20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;

  @media (max-width: 991px) {
    padding: 40px;
  }
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

  @media (max-width: 991px) {
    padding: 20px 40px;
  }
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

  @media (max-width: 991px) {
    max-width: 70px;
  }
`;

export const Navigation = styled.ul`
  display: flex;

  @media (max-width: 991px) {
    display: none;
  }
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

  @media (max-width: 991px) {
    flex-direction: column;
    margin: 120px 0 40px;
  }
`;

export const Text = styled.div`
  width: 100%;
  max-width: 600px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 5em;
  font-weight: 300;

  @media (max-width: 991px) {
    font-size: 2em;
  }
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

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Slides = styled.div`
  display: none;

  img {
    width: 100%;
    max-width: 600px;

    @media (max-width: 991px) {
      width: 420px;
    }

    @media (max-width: 760px) {
      width: 220px;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  display: flex;
  padding: 30px 100px;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 0;

  @media (max-width: 760px) {
    padding: 5px 10px;
  }
`;

export const Sci = styled.ul`
  display: flex;

  li {
    list-style: none;

    a {
      color: #fff;
      font-size: 2em;
      margin-right: 20px;
      display: inline-block;
      transition: 0.25s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

export const PrevNext = styled.div`
  position: relative;
  user-select: none;

  p {
    position: relative;
    color: #fff;
    text-align: end;
    margin-bottom: 15px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -35px;
      transform: translateY(-50%);
      width: 50px;
      height: 2px;
      background: #fff;
    }
  }
`;

const SpanDefault = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 2em;
  color: #fff;
`;

export const Prev = styled(SpanDefault)`
  margin-right: 20px;
`;

export const Next = styled(SpanDefault)``;

export const Toggle = styled.div`
  @media (max-width: 991px) {
    position: relative;
    width: 32px;
    height: 40px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #fff;
      transform: translateY(-10px);
      box-shadow: 0 10px 0 #fff;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #fff;
      transform: translateY(10px);
    }
  }
`;
