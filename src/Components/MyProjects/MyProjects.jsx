import React from "react";
import "./MyProjects.css";
import lp_dark from "../../assets/imagens/LP-Dark-2.png";
import lp_contato from "../../assets/imagens/LP-Contato2.png";
import pagina_venda_apple from "../../assets/imagens/Pagina-de-venda-apple-2.png";
import img_todolist from  "../../assets/imagens/todolist2.png"
import img_dev_notes from "../../assets/imagens/devnotes4.png"
import img_movie_verse from "../../assets/imagens/MovieVerse2.png"
import img_gerador_senha from "../../assets/imagens/Gerador-senha2.png"
import img_previsao_tempo from "../../assets/imagens/Previsao-tempo-2.png"
import img_calc_imc from "../../assets/imagens/Calc-IMC.png"

class MyProjects extends React.Component {
  render() {
    return (
      <div id="project" className="my-projects">
        <h1>Meus Projetos</h1>
        <div className="my-container">
          <div className="my-projects-title">
            <img src={lp_dark} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={lp_contato} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={pagina_venda_apple} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_todolist} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_dev_notes} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_movie_verse} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_gerador_senha} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_previsao_tempo} alt="" />
          </div>
          <div className="my-projects-title">
            <img src={img_calc_imc} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default MyProjects;
