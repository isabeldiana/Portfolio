import { IoLogoWhatsapp } from "react-icons/io5";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaLinkedinIn, FaUniversity } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import diploma from "../../../public/assets/diploma.pdf";
import { Certificate, Container, SocialMedia } from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <SocialMedia id="contacts">
          <a href="https://github.com/isabeldiana" target="_blank">
            <BsGithub color="white" size={30} />
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
        </SocialMedia>

        <p>
          Vai um cafezinho? <GiCoffeeCup size={20} color="#964b00" />{" "}
        </p>
      </div>
      <Certificate>
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
      </Certificate>
    </Container>
  );
}

export default Footer;
