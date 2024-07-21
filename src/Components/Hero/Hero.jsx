import React from "react";
import "./Hero.css";
import perfil_img from "../../assets/imagens/_img3.jpg";

class Hero extends React.Component {
  render() {
    return (
      <div id="home" className="hero">
        <img src={perfil_img} alt="imagem-perfil" />
        <h1>
          Oi, meu nome é <span> Marcos Henrique.</span>
          <br /> Sou Desenvolvedor Front end.
        </h1>
        <p>
          Apaixonado por tecnologia, e especializado em desenvolvimento
          front-end. <br />
          Tenho experiência em projetos de aplicações web e muito mais.{" "}
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <a href="https://icons8.com.br/icons/set/menu">Conecte-se comigo</a>
          </div>
          <div className="hero-cv"><a href="">Baixar CV</a></div>
        </div>
      </div>
    );
  }
}

export default Hero;
