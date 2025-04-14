import image1 from "../assets/imagem1.png";
import image2 from "../assets/imagem2.png";
import image3 from "../assets/imagem3.png";
import image4 from "../assets/imagem4.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Psicoterapia Individual",
      description:
        "A psicoterapia online é um tipo de terapia conduzida por meio de  chamadas de vídeo. É um espaço para falar sobre suas emoções, desafios e experiências, recebendo apoio e orientações profissionais. Essa modalidade oferece conveniência, permitindo o acompanhamento no conforto da sua casa e é tão eficaz quanto a terapia presencial em muitos casos.",
      image:  image1 ,
    },
    {
      id: 2,
      title: "Atendimento Online",
      description:
        "Sessões de terapia realizadas remotamente, oferecendo flexibilidade e conforto sem perder a qualidade do atendimento presencial.",
      image:  image2 ,
    },
    {
      id: 3,
      title: "Orientação de Pais",
      description:
        "Suporte e orientação para pais sobre desenvolvimento infantil, estratégias educacionais e fortalecimento de vínculos familiares.",
      image:  image3 ,
    },
    {
      id: 4,
      title: "Diagnósticos ABA",
      description:
        "Avaliação e diagnóstico baseados no método de Análise do Comportamento Aplicada (ABA), especialmente para transtornos do neurodesenvolvimento.",
      image:  image4 ,
    },
  ];

  return (
    <div id="servicos" className="min-h-screen w-full bg-background flex flex-col items-center py-8">
      <div className="w-full flex flex-col items-center justify-center max-w-[1600px] mb-10 px-4 md:px-32">
        <h1 className="w-full font-lato font-bold md:font-light text-center text-3xl md:text-5xl mb-8">
          Serviços
        </h1>
        <p className="w-full font-lato font-light text-lg md:text-2xl">
          Aqui voce poderá ter ideia de qual serviço lhe encaixa melhor como:
          psicoterapia individual e online, orientação de pais e diagnósticos
          baseados no metodo ABA.
        </p>
      </div>

      <div className="w-full bg-main py-8 space-y-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center lg:flex-row px-4 md:px-32 overflow-hidden hover:bg-white transition-colors duration-300"
          >
            
            <div className="lg:w-1/3 h-60 px-10 py-3">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>

            
            <div className="lg:w-2/3 max-w-[750px] p-6 flex flex-col justify-center">
              <h2 className="font-lato text-2xl lg:text-4xl text-contrast font-bold mb-3">
                {service.title}
              </h2>
              <p className="font-lato font-light text-md md:text-lg text-gray-700">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Services;
