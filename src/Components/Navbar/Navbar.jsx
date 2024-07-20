import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

class Navbar extends React.Component {
  // const [menu,setMenu] = useState("home");

  const menuRef = useRef();
  const openMenu = () => {
    
  }

  render() {
    return (
      <div className="navbar">
        <h1>MH.</h1>
        <ul className="nav-menu">
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
