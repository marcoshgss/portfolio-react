import React from "react";
import "./Contact.css";
import icon1 from "../../assets/imagens/icon/icons8-email-25.png"
import icon2 from "../../assets/imagens/icon/icons8-linkedin-25.png"
import icon3 from "../../assets/imagens/icon/icons8-place-marker-25.png"

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Contato</h1>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Vamos conversar</h1>
            <p>
              Atualmente estou disponível para assumir novos projetos, então fique à vontade para me enviar uma mensagem sobre qualquer coisa em que você queira que eu trabalhe. Você pode entrar em contato a qualquer momento.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={icon1} alt="E-mail" /><p>marcoshenrique.1234.fp@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={icon2} alt="Linkedin" /> <p>linkedin.com/in/marcos-henrique-gomess/</p>
              </div>
              <div className="contact-detail">
                <img src={icon3} alt="Localização" /> <p>Rio Grande do Norte</p>
              </div>
            </div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Seu Nome</label>
            <input type="text" placeholder="Digite seu nome" name="name" />
            <label htmlFor="">Seu Email</label>
            <input type="email" placeholder="Digite seu email" name="email" />
            <label htmlFor="">Escreva sua mensagem aqui</label>
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
