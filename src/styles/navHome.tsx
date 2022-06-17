import styled, { ThemeProvider } from "styled-components";
import { User } from "@styled-icons/feather/User";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";

export const theme = {
  colors: {
    colorPrimary: "#243b67",
    colorSecondary: "#EBEBEB",
    colorFontHover: "#236AD6",
  },
};

//estiizacao na navbar
export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.colorPrimary};
  width: 100%;
  display: flex;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.colorSecondary};
    margin-left: 120px;
    width: 130px;
  }

  img {
    width: 75px;
    height: 75px;
  }

  p {
    font-size: 24px;
  }

  input {
    display: flex;
    width: 50%;
    height: 40px;
    background: #f2f2f2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-right: -42px;
    margin-left: 110px;
    border-radius: 10px;
    outline: none;
    padding: 0px 10px;
  }
`;

export const UserCirc = styled(User)`
  color: ${(props) => props.theme.colors.colorSecondary};
  width: 60px;
  height: 60px;
  position: relative;
`;

export const DivCircle = styled.div`
  display: flex;
  width: 30%;
  margin-left: 30px;

  div {
    display: flex;
    margin-left: -110px;
    font-size: 0.8rem;
  }

  h3:hover {
    color: ${(props) => props.theme.colors.colorFontHover};
    transition: 0.5s;
    opacity: 0.8;
  }
`;

export const CartShopping = styled(ShoppingCart)`
  color: ${(props) => props.theme.colors.colorSecondary};
  width: 60px;
  height: 60px;
  position: relative;
`;
export const ButtonSearch = styled.div``;
