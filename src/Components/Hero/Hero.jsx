import React from "react";
import "./Hero.css";
import perfil_img from "../../assets/imagens/img33.webp";
import cv_mh from "../../assets/imagens/icon/CV_Marcos_fullstack.pdf";

class Hero extends React.Component {
  render() {
    return (
      <div id="home" className="hero">
        <img src={perfil_img} alt="imagem-perfil" />
        <h1>
          Oi, meu nome é <span> Marcos Henrique.</span>
          <br /> Sou Desenvolvedor Full Stack.
        </h1>
        <p>
          Apaixonado por tecnologia, com experiência em desenvolvimento full
          stack. Já trabalhei em aplicações web, do front-end ao back-end,
          criando soluções eficientes e escaláveis.{" "}
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <a href="https://www.linkedin.com/in/marcoshenriquegomess/">
              Conecte-se comigo
            </a>
          </div>
          <div className="hero-cv">
            <a href={cv_mh} download="CV-Marcos-Henrique">
              Baixar CV
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
