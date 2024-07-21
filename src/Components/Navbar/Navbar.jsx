import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_open from "../../assets/imagens/icon/menu-open.png";
import menu_close from "../../assets/imagens/icon/menu-close.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef(); // Cria a referência para o menu
  }

  openMenu = () => {
    this.menuRef.current.style.right = "0";
  };
  closeMenu = () => {
    this.menuRef.current.style.right = "-350px";
  };

  render() {
    return (
      <div className="navbar">
        <h1>MH.</h1>
        <img
          src={menu_open}
          onClick={this.openMenu}
          className="nav-mob-open"
          alt=""
        />
        <ul ref={this.menuRef} className="nav-menu">
          <img
            src={menu_close}
            onClick={this.closeMenu}
            className="nav-mob-close"
            alt=""
          />
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre mim
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="scroll" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experiência
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
