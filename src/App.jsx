import "./App.css";
import { IoLogoJavascript } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
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

  useEffect(() => {
    api.get("repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  console.log(data.map((d) => d?.description));
  return (
    <div className="container">
      <section>
        <div className="card">
          <img src="src/assets/logo.jpeg" />
          <h1>Isabel Diana Pereira de Lima</h1>

          <p>Front-end developer</p>
          <p>Formada em Analise e desenvolvimento de sistemas.</p>
        </div>
        <div class="descrition">
          <h1>Contatos:</h1>

          <p>
            <MdEmail size={15} color="blue" /> isabel_diana@outlook.com
          </p>

          <a href="https://github.com/isabeldiana" target="_blank">
            <BsGithub color="black" size={15} />
            Github
          </a>

          <a href="https://www.linkedin.com/in/isabel-diana/" target="_blank">
            <FaLinkedinIn color="blue" size={15} />
            Linkedin
          </a>
        </div>

        <div className="technologies">
          <h1>Tecnologias:</h1>
          <FaReact color="lightblue" />
          <IoLogoJavascript color="yellow" />
          <FaHtml5 color="orange" />
          <FaCss3Alt color="lightblue" />
          <SiStyledcomponents color="pink" />
          <AiFillGithub />
        </div>
        <div className="certificates">
          <h1>Certificados:</h1>
          <a
            href="https://app.rocketseat.com.br/certificates/9cb12b79-8d0b-47ad-98eb-46d384b4a902"
            target="_blank"
          >
            <TbCertificate /> Trilha Fundamentar - Rocketseat
          </a>
          <a href="src/assets/diploma.pdf" target="_blank">
            <FaUniversity /> Diploma -Uniasselvi
          </a>
        </div>
      </section>

      <div className="card-1">
        <h1>Meus Projetos</h1>
        <div className="card-2">
          {data.map((projeto) => (
            <div className="project" key={projeto.id}>
              <span>
                <h2>{projeto.name}</h2>
                <a href={projeto.html_url}>
                  <FaGithub />
                </a>
              </span>

              <p>{projeto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
