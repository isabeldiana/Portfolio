import avatar from "../../assets/avatar.jpeg";
function Header() {
  return (
    <header>
      <div className="profile">
        <img src={avatar} />
        <h1>Isabel Diana Pereira de Lima</h1>
      </div>
      <div className="menu">
        <a href="#about">Sobre</a>
        <a href="#project">Projetos</a>
        <a href="#contact">Contatos</a>
      </div>
    </header>
  );
}

export default Header;
