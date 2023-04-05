import "./App.css";
import { IoLogoJavascript } from "react-icons/io5";
import BlackWoman from "./assets/black-Woman.svg";
import Woman from "./assets/woman.svg";
import { FaCss3Alt, FaHtml5, FaGithub, FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { useEffect, useState } from "react";
import api from "./services/api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <GlobalStyle />
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
              <AiFillGithub className="pulse-grow-on-hover" color="white" />
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
                      <FaGithub color="black" size="20" />
                    </a>
                  </span>

                  <p>{projeto.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
