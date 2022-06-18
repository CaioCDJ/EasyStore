import {
  Nav,
  theme,
  ButtonSearch,
  UserCirc,
  DivCircle,
  CartShopping,
  DivUl,
} from "../styles/navHome";
import { Search } from "@styled-icons/evil/Search";
import { ThemeProvider } from "styled-components";
import Link from "next/link";

function NavBar() {
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
                <Link href="#">
                  <span className="rounded-full p-1 border drop-shadow-lg">
                    <UserCirc theme={theme} />
                  </span>
                </Link>
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
          <DivUl>
            <ul>
              <li>
                <Link href={"#"}>Categorias ⮯</Link>
              </li>
              <li>
                <Link href={"#"}>Ofertas do dia</Link>
              </li>
              <li>
                <Link href={"#"}>Historico</Link>
              </li>
              <li>
                <Link href={"#"}>Vender</Link>
              </li>
              <li>
                <Link href={"#"}>Contato</Link>
              </li>
            </ul>
          </DivUl>
        </form>
      </header>
    </ThemeProvider>
  );
}

export default NavBar;
