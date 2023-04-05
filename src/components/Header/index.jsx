import avatar from "../../assets/avatar.jpeg";
import { Container, Menu } from "./styles";
function Header() {
  return (
    <Container>
      <div className="profile">
        <img src={avatar} />
        <h1>Isabel Diana Pereira de Lima</h1>
      </div>
      <Menu>
        <a href="#about">Sobre</a>
        <a href="#project">Projetos</a>
        <a href="#contact">Contatos</a>
      </Menu>
    </Container>
  );
}

export default Header;
