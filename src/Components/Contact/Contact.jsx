import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Entrar em Contato</h1>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Vamos conversar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
              aut animi ratione quae quibusdam, reprehenderit illo reiciendis
              placeat fuga nobis cumque distinctio quaerat nesciunt ab
              consequuntur vero dolorum nisi!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src="" alt="E-mail" />
              </div>
              <div className="contact-detail">
                <img src="" alt="Linkedin" />
              </div>
              <div className="contact-detail">
                <img src="" alt="Github ou Instagram" />
              </div>
            </div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Seu Nome</label>
            <input type="text" placeholder="Digite seu nome" name="name" />
            <label htmlFor="">Seu Email</label>
            <input type="email" placeholder="Digite seu email" name="email" />
            <label htmlFor="">Escreva sua menssagem aqui</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Escreva a sua menssagem"
            ></textarea>
            <button type="submit" className="contact-submit">Enviar agora</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
