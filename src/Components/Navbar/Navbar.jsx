import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>MH.</h1>
          <ul className="nav-menu">
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Skills</li>
            {/* <li>Sobre</li> esse sobre vai ficar na parte da apresentação */}
            {/* <li>Educação</li> */}
            <li>Experiência</li>
            <li>Contato</li>
          </ul>
          {/* <div className="nav-connect">Conecte-se comigo</div> */}
      </div>
    );
  }
}

export default Navbar;
