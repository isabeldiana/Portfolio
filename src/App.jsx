import "./App.css";
import { push as Sidebar } from "react-burger-menu";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMicrosoftoutlook } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import diploma from "../public/assets/diploma.pdf";
import avatar from "./assets/avatar.jpeg";
import BlackWoman from "./assets/black-Woman.svg";
import Woman from "./assets/woman.svg";
import {
  FaCss3Alt,
  FaHtml5,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaUniversity,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [data, setData] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => setMenuOpen(true);
  const handleOnClose = () => setMenuOpen(false);

  useEffect(() => {
    api.get("repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div id="outer-container">
      <Sidebar
        isOpen={menuOpen}
        onOpen={handleOnOpen}
        onClose={handleOnClose}
        className="section"
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <div className="card">
          <img src={avatar} />
          <h1>Isabel Diana Pereira de Lima</h1>
          <p>Front-end developer</p>
        </div>
        <div className="descrition">
          <h1>Contatos:</h1>
          <p>
            <SiMicrosoftoutlook size={14} color="#0072c6" />
            isabel_diana@outlook.com
          </p>

          <a href="https://github.com/isabeldiana" target="_blank">
            <BsGithub color="black" size={14} />
            Github
          </a>

          <a href="https://www.linkedin.com/in/isabel-diana/" target="_blank">
            <FaLinkedinIn color=" #0e76a8" size={14} />
            Linkedin
          </a>
        </div>

        <div className="certificates">
          <h1>Certificados:</h1>
          <a
            href="https://app.rocketseat.com.br/certificates/9cb12b79-8d0b-47ad-98eb-46d384b4a902"
            target="_blank"
          >
            <TbCertificate /> Trilha Fundamentar - Rocketseat
          </a>
          <a href={diploma} target="_blank">
            <FaUniversity /> Diploma -Uniasselvi
          </a>
        </div>
      </Sidebar>
      <div className="card-1" id="page-wrap">
        <div className={`about ${menuOpen ? "aboutOpen" : " "}`}>
          <img className="woman-1" src={BlackWoman} alt="" />
          <div className="text">
            <h1>Oi, sou Isabel Diana, Desenvolvedora Frontend</h1>
            <p>
              Graduada em Análise e Desenvolvimento de Sistemas na (UNIASSELVI).
              Atualmente estudando tecnologias e ferramentas frontend.
            </p>
          </div>
          <img className="woman-1" src={BlackWoman} alt="" />
        </div>
        <div className="technologies">
          <img src={Woman} className="woman-2" alt="" />
          <div className="tecnologies-content">
            <h1>Tecnologias e ferramentas:</h1>
            <div className="icons">
              <FaReact color="lightblue" className="pulse-grow-on-hover" />
              <IoLogoJavascript
                className="pulse-grow-on-hover"
                color="yellow"
              />
              <FaHtml5 color="orange" className="pulse-grow-on-hover" />
              <FaCss3Alt color="lightblue" className="pulse-grow-on-hover" />
              <SiStyledcomponents
                color="pink"
                className="pulse-grow-on-hover"
              />
              <AiFillGithub className="pulse-grow-on-hover" />
            </div>
          </div>
        </div>
        <div className="card-2">
          <h1> Projetos:</h1>
          <div className="projects">
            {" "}
            {data.map((projeto) =>
              projeto.name === "isabeldiana" ||
              projeto.name === "Portfolio" ? null : (
                <div className="project" key={projeto.id}>
                  <span>
                    <h2>{projeto.name}</h2>
                    <a href={projeto.html_url}>
                      <FaGithub size="20" />
                    </a>
                  </span>

                  <p>{projeto.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
