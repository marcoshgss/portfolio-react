import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/marcoshenriquegomess/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/marcoshgss">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/marcoshgss/">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mim
          </Link>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="scroll" smooth={true} duration={500}>
              Skills
            </Link>{" "}
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experiência
            </Link>{" "}
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>
        <p className="copyright">
          &copy; Marcos Henrique | Todos os direitos reservados
        </p>
      </footer>
    );
  }
}

export default Footer;
