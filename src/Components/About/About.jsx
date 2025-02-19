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
            <img src={img_about} alt="" />
          </div>
          <div className="about-right">
            <p>
            Sou desenvolvedor full stack dedicado a transformar ideias em aplicações web funcionais e eficientes. Tenho experiência com tecnologias como HTML, CSS, JavaScript, React no front-end e Node.js, TypeScript e bancos de dados no back-end. Meu compromisso é entregar soluções de alta qualidade, valorizando código limpo e a constante evolução técnica.
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
