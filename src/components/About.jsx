import Aboutbg from "../assets/AboutBg.png";
import PaulaPsico from "../assets/PaulaPsico.png";

function About() {
  return (
    <div
      id="quem-sou"
      className="w-full h-auto flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col justify-center items-center bg-main bg-opacity-90 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="w-full text-center text-3xl font-lato font-light mb-4">
            A Psicóloga
          </h2>
          <img
            src={PaulaPsico}
            alt="Imagem da Psicologa Paula"
            className="w-32 h-32 rounded-full mb-4"
            loading="lazy"
          />
          <h3 className="font-lato font-light text-2xl border-b-2 border-logo pb-1 mb-4 ">
            Paula Mie Buno Hiratsuka
          </h3>
          <section className="w-full px-4 md:px-14 font-lato md:text-justify mb-2">
            "Sou psicóloga com ampla experiência em psicoterapia para todas as
            idades. Graduada pela Universidade Anhembi Morumbi, utilizo a
            abordagem Comportamental para oferecer um atendimento personalizado
            e eficaz.
          </section>
          <section className="w-full px-4 md:px-14 font-lato md:text-justify">
            Especializada em ABA (Análise do Comportamento Aplicado) e
            Neuropsicologia pela Faculdade Líbano, ajudo no tratamento de
            transtornos como ansiedade, depressão, TDAH, TOD, TEA e estresse
            pós-traumático, entre outros."
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
