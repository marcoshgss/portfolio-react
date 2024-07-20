import React from "react";
import "./Contact.css";
import icon1 from "../../assets/imagens/icon/icons8-email-25.png";
import icon2 from "../../assets/imagens/icon/icons8-linkedin-25.png";
import icon3 from "../../assets/imagens/icon/icons8-place-marker-25.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: null,
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "144bea31-3f81-46d8-9aed-76707e95e712");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      this.setState({ formStatus: "Success" });
      alert("Mensagem enviada com sucesso!", res);
    } else {
      this.setState({ formStatus: "Error" });
    }
  };

  render() {
    return (
      <div id="contact" className="contact">
        <h1>Contato</h1>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Vamos conversar</h1>
            <p>
              Atualmente estou disponível para assumir novos projetos, então
              fique à vontade para me enviar uma mensagem sobre qualquer coisa
              em que você queira que eu trabalhe. Você pode entrar em contato a
              qualquer momento.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={icon1} alt="E-mail" />
                <p>marcoshenrique.1234.fp@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={icon2} alt="Linkedin" />{" "}
                <p>linkedin.com/in/marcos-henrique-gomess/</p>
              </div>
              <div className="contact-detail">
                <img src={icon3} alt="Localização" /> <p>Rio Grande do Norte</p>
              </div>
            </div>
          </div>
          <form onSubmit={this.onSubmit} className="contact-right">
            <label htmlFor="">Seu Nome</label>
            <input type="text" placeholder="Digite seu nome" name="name" required />
            <label htmlFor="">Seu Email</label>
            <input type="email" placeholder="Digite seu email" name="email" required />
            <label htmlFor="">Escreva sua mensagem aqui</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Escreva a sua menssagem"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Enviar agora
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
