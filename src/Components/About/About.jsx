import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="my-about">
        <div className="about-title">
          <h1>Sobre Mim</h1>
          <img src="" alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src="" alt="" />
          </div>
          <div className="about-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellat consequatur unde obcaecati necessitatibus aut quam dolorem illum? Ut obcaecati fugiat illo et provident quia dolore accusantium corporis iusto aspernatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore corrupti unde. Cumque odit explicabo quam quisquam voluptatibus aut quidem fugiat aspernatur, eos et magnam neque voluptates culpa. Numquam, minus!</p>
          </div>
          <div className="about-experience">
            <div>primeira caixa</div>
            <div>segunda caixa</div>
            <div>terceira caixa</div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
