import { useState } from "react";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsContact.svg";
import email from "../assets/gmail.svg";

function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({ nome: "", email: "", mensagem: "" });
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
                  <p className="text-contrast">contato@paulapsico.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full text-white mr-4">
                  <img src={whatsapp} alt="WhatsApp" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brown-text">Telefone</h3>
                  <p className="text-contrast">(00) 12345-6789</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full text-white mr-4">
                  <img src={instagram} alt="Instagram" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brown-text">Instagram</h3>
                  <p className="text-contrast">@paulapsico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 bg-background p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-brown-text mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-main rounded-md focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent"
                  required
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
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
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
