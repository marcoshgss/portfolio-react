import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer"> 
        <div className="social-icons"> 
            <a href="https://www.linkedin.com/in/marcos-henrique-gomess/"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/marcoshgss"><i className='bx bxl-github'></i></a>
            <a href="https://www.instagram.com/marcoshgss/"><i className='bx bxl-instagram-alt' ></i></a>
        </div>

        <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre mim</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Experiência</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
        </ul>
        <p className="copyright">
         &copy; Marcos Henrique | Todos os direitos reservados
        </p>
      </footer>
    )
  }
}

export default Footer;
