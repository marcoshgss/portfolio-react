import React from "react";
import "./About.css";
import img_about from "../../assets/imagens/Imagem-15.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="my-about">
        <h1>Sobre Mim</h1>
        <div className="about-sections">
          <div className="about-left">
            <img src={img_about} alt="" />
          </div>
          <div className="about-right">
            <p>
              Sou desenvolvedor front-end dedicado a transformar ideias
              criativas em websites funcionais e visualmente atraentes. Tenho
              ampla experiência com tecnologias como HTML, CSS, JavaScript e  frameworks como React, e meu compromisso é sempre entregar
              projetos de alta qualidade. Valorizo a escrita de código limpo e a
              busca constante por aprimoramento em cada detalhe do meu trabalho.
            </p>
            <p>
              <br />
              Também sou estudante de Sistemas de Informação pela Universidade
              Federal Rural do Semi-Árido.
            </p>
            <p>
              <br /> Tenho disposição e disciplina, sou proativo e colaborativo,
              sei me comunicar bem, e busco me aprimorar cada vez mais.
            </p>
            <div className="about-experience">
              <div className="years-projects-1">
                <div className="amount-projects">
                  <p> 11</p>
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
                  <p>1</p>
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
