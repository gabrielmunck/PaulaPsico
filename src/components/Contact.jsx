import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsContact.svg";
import email from "../assets/gmail.svg";

function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log("Mensagem enviada com sucesso ", result.text);
          alert("✅ Mensagem enviada com sucesso! ✅");
          form.current?.reset();
        },
        (error) => {
          console.error("Erro ao enviar", error.text);
          alert("❌ Erro ao enviar mensagem. Tente novamente. ❌");
        }
      );
  };

  return (
    <div id="contato" className="w-full flex items-center justify-center bg-main text-brown-text py-16">
      <div className="max-w-[1600px] px-4 lg:px-32">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-contrast">
              Entre em Contato
            </h2>
            <p className="text-contrast">
              Todos os atendimentos são individuais e iniciam-se após uma
              entrevista pessoal. Para esclarecer dúvidas, obter informações ou
              agendar sua sessão, entre em contato.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full text-white mr-4">
                  <img src={email} alt="Email" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brown-text">Email</h3>
                  <p className="text-contrast">paulamie30@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full text-white mr-4">
                  <img src={whatsapp} alt="WhatsApp" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brown-text">Telefone</h3>
                  <p className="text-contrast">(11) 12345-6789</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full text-white mr-4">
                  <img src={instagram} alt="Instagram" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brown-text">Instagram</h3>
                  <p className="text-contrast">@paulamie.psi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 bg-background p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-brown-text mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-2 border border-main rounded-md focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brown-text mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-2 border border-main rounded-md focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-brown-text mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  placeholder="Escreva sua mensagem"
                  rows="5"
                  className="w-full px-4 py-2 border border-main rounded-md focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-contrast text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-logo focus:ring-offset-2"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
