import React from "react";
import "./Navbar.css";
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

  handleNavClick = (event, targetId) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    this.closeMenu();
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
            <a href="#about" onClick={(e) => this.handleNavClick(e, "about")}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#project" onClick={(e) => this.handleNavClick(e, "project")}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#scroll" onClick={(e) => this.handleNavClick(e, "scroll")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => this.handleNavClick(e, "experience")}>
              Experiência
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => this.handleNavClick(e, "contact")}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
