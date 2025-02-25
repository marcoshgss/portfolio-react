import React from "react";
import "./MyProjects.css";
import lp_dark from "../../assets/imagens/LP-Dark-2.png";
import img_clone_spotify from "../../assets/imagens/clone-spotify.png";
import batman_Lp from "../../assets/imagens/Batman-Lp.png";
import img_todolist from "../../assets/imagens/todolist2.png";
import img_dev_notes from "../../assets/imagens/devnotes4.png";
import img_movie_verse from "../../assets/imagens/MovieVerse2.png";
import lp_contato from "../../assets/imagens/LP-Contato2.png";
import pagina_venda_apple from "../../assets/imagens/Pagina-de-venda-apple-2.png";
import img_calc_imc from "../../assets/imagens/Calc-IMC.png";

class MyProjects extends React.Component {
  render() {
    return (
      <div id="project" className="my-projects">
        <h1>Meus Projetos</h1>
        <div className="my-container">
          <div className="my-projects-title">
            <a href="https://landing-page-theme-dark.netlify.app/">
              <img src={lp_dark} alt="Landing Page Dark - Serviço em nuvem" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://projeto-clone-spotify-18b0.onrender.com/">
              <img src={img_clone_spotify} alt="Clone do Spotify" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://lp-batman-project.netlify.app/">
              <img src={batman_Lp} alt="Batman LP - Landing Page" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://to-list-advanced.netlify.app/assets/html/login.html">
              <img src={img_todolist} alt="Todo-list" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://dev-notes-pro.netlify.app/">
              <img src={img_dev_notes} alt="Dev notes - Clone do Google Keep" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://movieverse-project.netlify.app/">
              <img
                src={img_movie_verse}
                alt="Movie Verse - Catálogo de filmes e animes"
              />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://majestic-moxie-a43f7f.netlify.app/">
              <img src={lp_contato} alt="Landing Page de Contato" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://clone-pagina-apple-venda.netlify.app/">
              <img src={pagina_venda_apple} alt="pagina_venda_apple" />
            </a>
          </div>
          <div className="my-projects-title">
            <a href="https://calc-imc-project-ql.netlify.app/">
              <img src={img_calc_imc} alt="Calculadora IMC" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProjects;
