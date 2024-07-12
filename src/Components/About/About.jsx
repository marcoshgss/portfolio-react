import React from "react";
import "./About.css";
import img_about from "../../assets/imagens/Imagem-2.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="my-about">
        <h1>Sobre Mim</h1>
        <div className="about-sections">
          <div className="about-left">
            <img src={img_about} alt="" />
          </div>
          <div className="about-right">
            <p>
              Sou desenvolvedor front-end dedicado a transformar ideias
              criativas em websites funcionais e visualmente atraentes. Tenho
              ampla experiência com tecnologias como HTML, CSS, JavaScript e
              frameworks como React, e meu compromisso é sempre entregar
              projetos de alta qualidade. Valorizo a escrita de código limpo e a
              busca constante por aprimoramento em cada detalhe do meu trabalho.
            </p>
            <p>
              <br />
              Também sou estudante de Sistemas de Informação pela Universidade
              Federal Rural do Semi-Árido.
            </p>
            <div className="about-experience">
              <div className="years-projects">
                <p className="p">
                  11<span className="span">+</span>
                </p>  
                <span className="span-one">Projetos</span>
              </div>
              <div className="years-projects">
                <p className="p">
                  1,5<span className="span">+</span>
                </p>
                <span className="span-one">Anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
