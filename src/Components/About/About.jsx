import React from "react";
import "./About.css";
import img_about from "../../assets/imagens/Imagem-155.webp";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="my-about">
        <h1>Sobre Mim</h1>
        <div className="about-sections">
          <div className="about-left">
            <img src={img_about} alt="Foto da seção sobre mim" />
          </div>
          <div className="about-right">
            <p>
              Sou desenvolvedor full stack focado em transformar ideias em
              aplicações web rápidas, acessíveis e fáceis de usar.
              Trabalho com HTML, CSS, JavaScript e React no front-end, além de
              Node.js, TypeScript e bancos de dados no back-end. Como freelancer,
              entrego soluções sob demanda com código limpo e atenção à qualidade.
            </p>
            <p>
              Sou formado em Sistemas de Informação pela Universidade Federal Rural do Semi-Árido.
            </p>
            <p>
              Tenho disciplina, sou proativo e colaborativo, comunico-me bem e busco me aprimorar constantemente.
            </p>
            <div className="about-experience">
              <div className="years-projects-1">
                <div className="amount-projects">
                  <p> 37</p>
                  <div>
                    <p className="edition">+</p>
                  </div>
                </div>
                <div className="name-project">
                  <p className="edition">Projetos</p>
                </div>
              </div>
              <div className="years-projects-2">
                <div className="amount-projects">
                  <p>3</p>
                  <div>
                    <p className="edition">+</p>
                  </div>
                </div>
                <div className="name-project">
                  <p className="edition">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
