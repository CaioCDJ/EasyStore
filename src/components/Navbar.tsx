import styled from "styled-components";
import { UserCircle } from "@styled-icons/heroicons-outline/UserCircle";

//estiizacao na navbar
export const Nav = styled.nav`
  background-color: #243b67;
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Input = styled.input`
  display: flex;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  outline: none;
`;

export const Icon = styled(UserCircle)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export default function NavBar() {
  return (
    <div className="w-full h-full">
      <Nav className="">
        <a href="#">
          <Img src="img/logoE.png" />
        </a>
        <div className="w-screen flex justify-center items-center">
          <Input type="text" />
        </div>
        <Icon />
      </Nav>
      <ul>
        <li>Cadastre</li>
        <li>Cadastre</li>
        <li>Cadastre</li>
      </ul>
      ;
    </div>
  );
}
