import avatar from "../../assets/avatar.jpeg";
import { Container } from "./styles";
function Header() {
  return (
    <Container>
      <div className="profile">
        <img src={avatar} />
        <h1>Isabel Diana Pereira de Lima</h1>
      </div>
      <input type="checkbox" name="menuA" id="menuop" />
      <label for="menuop">
        <div className="menuB">
          <span className="hamburguer"></span>
        </div>
      </label>
      <div className="menu">
        <ul>
          <a href="#about">
            <li>Sobre</li>
          </a>
          <a href="#project">
            <li>Projetos</li>
          </a>
          <a href="#contacts">
            <li>Contatos</li>
          </a>
        </ul>
      </div>
    </Container>
  );
}

export default Header;
