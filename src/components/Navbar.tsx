import {
  Nav,
  theme,
  ButtonSearch,
  UserCirc,
  DivCircle,
  CartShopping,
} from "../styles/navHome";
import { Search } from "@styled-icons/evil/Search";
import { ThemeProvider } from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <header className="w-full h-full">
        <form>
          <Nav theme={theme}>
            <div className="flex justify-center items-center w-full">
              <a href="#">
                <img src="img/EasyStore.png" />
                <p>EasyStore </p>
              </a>
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais…"
              />
              <ButtonSearch>
                <Search
                  size={"30px"}
                  className="bg-#EBEBEB rounded-xl mr-1 z-20 relative"
                />
              </ButtonSearch>
              <DivCircle>
                <span className="rounded-full p-1 border drop-shadow-lg">
                  <UserCirc theme={theme} />
                </span>
                <div>
                  <a href="#">
                    <h3>
                      Entre ou Cadastre-se <span>para ver seus pedidos</span>
                    </h3>
                  </a>
                </div>
                <Link href={"#"}>
                  <CartShopping className="cursor-pointer" />
                </Link>
              </DivCircle>
            </div>
          </Nav>
          <div>
            <ul>
              <li>Compra</li>
              <li>Compra</li>
              <li>Compra</li>
              <li>Compra</li>
              <li>Compra</li>
            </ul>
          </div>
        </form>
      </header>
    </ThemeProvider>
  );
}
