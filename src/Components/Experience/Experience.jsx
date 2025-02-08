import React from "react";
import "./Experience.css";



class Experience extends React.Component {
  render() {
    return (
      <div className="experience" id="experience">
        <h1>Experiência</h1>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <h3>Escola</h3>
              <p>
                Concluí o ensino médio em 2018 na Escola Estadual Professora
                Francisca Alves da Silva.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022-2023</div>
            <div className="timeline-content">
              <h3>Desenvolvedor Front end</h3>
              <p>
                Participei da empresa Turing Tecnologia, empresa júnior da
                faculdade e atuei no cargo de desenvolvedor front-end.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Estágio em TI</h3>
              <p>
              Concluí o estágio em TI, onde desempenhei as seguintes atividades: Suporte técnico aos usuários,
              suporte a problemas em componentes da rede,
              
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024-2025</div>
            <div className="timeline-content">
              <h3>Estágio em Back-end</h3>
              <p>
              Concluí o estágio em Back-end, pela empresa Compass UOL onde desempenhei as seguintes atividades: Desenvolvi aplicações usando JavaScript, TypeScript, Node.js, Express, MongoDB, Mongoose, Scrum, AWS, AWS Security, Well Architected.
            
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Universidade</h3>
              <p>
                Cursando Sistemas de Informação pela Universidade Federal Rural do Semi-Árido (UFERSA), previsão de término em 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
