import styled from "styled-components";

import NavBar from "./../components/Navbar";

export const Btn = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
`;

export default function Home(props: any) {
  return (
    <div>
      <NavBar />
    </div>
  );
}
