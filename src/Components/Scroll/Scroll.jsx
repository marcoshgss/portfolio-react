import React from "react";
import "./Scroll.css";
import img1 from "../../assets/imagens/img-tech/html.png";
import img2 from "../../assets/imagens/img-tech/css.png";
import img3 from "../../assets/imagens/img-tech/js.png";
import img4 from "../../assets/imagens/img-tech/React.png";
import img5 from "../../assets/imagens/img-tech/typescript.png";
import img6 from "../../assets/imagens/img-tech/redux.png";
import img7 from "../../assets/imagens/img-tech/styled-components.png";
import img8 from "../../assets/imagens/img-tech/figma.png";
import img9 from "../../assets/imagens/img-tech/bootstrap.png";
import img10 from "../../assets/imagens/img-tech/github.png";
import img11 from "../../assets/imagens/img-tech/postgreesql.png";
import img12 from "../../assets/imagens/img-tech/php.png";
import img13 from "../../assets/imagens/img-tech/wordpress.png";

class Scroll extends React.Component {
  render() {
    return (
      <div id="scroll" className="my-scroll">
        <h1>Skills</h1>
        <div className="slide-track">
          <div className="slide">
            <img src={img1} alt="" />
          </div>
          <div className="slide">
            <img src={img2} alt="" />
          </div>
          <div className="slide">
            <img src={img3} alt="" />
          </div>
          <div className="slide">
            <img src={img4} alt="" />
          </div>
          <div className="slide">
            <img src={img5} alt="" />
          </div>
          <div className="slide">
            <img src={img6} alt="" />
          </div>
          <div className="slide">
            <img src={img7} alt="" />
          </div>
          <div className="slide">
            <img src={img8} alt="" />
          </div>
          <div className="slide">
            <img src={img9} alt="" />
          </div>
          <div className="slide">
            <img src={img10} alt="" />
          </div>
          <div className="slide">
            <img src={img11} alt="" />
          </div>
          <div className="slide">
            <img src={img12} alt="" />
          </div>
          <div className="slide">
            <img src={img13} alt="" />
          </div>
          <div className="slide">
            <img src={img1} alt="" />
          </div>
          <div className="slide">
            <img src={img2} alt="" />
          </div>
          <div className="slide">
            <img src={img3} alt="" />
          </div>
          <div className="slide">
            <img src={img4} alt="" />
          </div>
          <div className="slide">
            <img src={img5} alt="" />
          </div>
          <div className="slide">
            <img src={img6} alt="" />
          </div>
          <div className="slide">
            <img src={img7} alt="" />
          </div>
          <div className="slide">
            <img src={img8} alt="" />
          </div>
          <div className="slide">
            <img src={img9} alt="" />
          </div>
          <div className="slide">
            <img src={img10} alt="" />
          </div>
          <div className="slide">
            <img src={img11} alt="" />
          </div>
          <div className="slide">
            <img src={img12} alt="" />
          </div>
          <div className="slide">
            <img src={img13} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Scroll;
