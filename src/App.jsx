import "./App.css";
import { IoLogoJavascript, IoLogoWhatsapp } from "react-icons/io5";
import { SiMicrosoftoutlook } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import diploma from "../public/assets/diploma.pdf";

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
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="card-1">
        <div className="about">
          <img className="woman-1" src={BlackWoman} alt="" />
          <div className="text" id="about">
            <h1>Oi, sou Isabel Diana, Desenvolvedora Frontend</h1>
            <p>
              Sou formada em Análise e Desenvolvimento de Sistemas na
              (UNIASSELVI). Estou em busca da minha primeira oportunidade como
              desenvolvedora frontend. Sou um pessoa proativa, focada em
              resultados, sempre em busca de aprender novas tecnologias e
              conceitos. Estou anciosa para trabalhar em equipe, contribuir com
              minhas habilidades e crescer profissionalmente em um ambiente
              desafiador e estimulante.
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
          <h1 id="project"> Projetos:</h1>
          <div className="projects">
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
      <footer>
        <div className="descrition">
          <div className="social-media">
            <a href="https://github.com/isabeldiana" target="_blank">
              <BsGithub color="black" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/isabel-diana/" target="_blank">
              <FaLinkedinIn color=" #0e76a8" size={30} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=75988611282&text=Olá, boa tarde."
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp color="green" size={30} />
            </a>
            <a href="mailto:isabel_diana@outlook.com" target="_blank">
              <SiMicrosoftoutlook size={30} color="#0072c6" />
            </a>
          </div>

          <p>
            Vai um cafezinho? <GiCoffeeCup size={20} color="#964b00" />{" "}
          </p>
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
      </footer>
    </div>
  );
}

export default App;
