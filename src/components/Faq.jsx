function Faq() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-x-16 lg:px-36 w-full bg-background p-16">
      <div className="w-full lg:w-1/2 max-w-5xl z-10">
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
            Mas consultas online realmente funcionam?
          </p>
          <p className="text-contrast font-lato text-justify font-extralight text-lg p-4 lg:p-8">
            A psicoterapia online é eficaz porque oferece acesso a um suporte
            psicológico de qualidade, independentemente da localização do
            paciente. Estudos mostram que ela pode ser tão eficiente quanto a
            presencial, ajudando a tratar ansiedade, depressão e outros
            transtornos. Além disso, a flexibilidade de horários e a
            possibilidade de estar em um ambiente familiar proporcionam maior
            conforto e adesão ao tratamento, criando um espaço seguro para o
            autoconhecimento e a resolução de conflitos emocionais.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl mb-8">
            Referente Sigilo
          </p>
          <p className="text-contrast font-lato text-center font-extralight text-lg mb-6">
            Consulta virtual e presencial são 100% protegida e sigilosa, além de
            atender todas as regulamentações dos Conselhos Federais de
            Psicologia.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl mb-8">
            Sua saúde mental é tão importante quanto a sua saúde física.
          </p>
          <p className="text-contrast font-lato text-center font-extralight text-lg mb-6">
            Tenha sua consulta marcada em apenas alguns cliques{" "}
          </p>
          <p className="text-contrast tracking-wide font-lato text-center font-bold text-lg mb-8">
            CONSULTAS PRESENCIAIS E ONLINE
          </p>
          <p className="text-contrast tracking-wide font-lato text-center font-extralight text-lg mb-8">
            Atendimento para crianças, adolescentes, adultos e casal{" "}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-5xl z-10">
        <div className="flex flex-col justify-center items-center min-h-screen w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl mb-8">
            Sua saúde mental é tão importante quanto a sua saúde física.
          </p>
          <p className="text-contrast font-lato text-center font-extralight text-lg mb-6">
            Tenha sua consulta marcada em apenas alguns cliques{" "}
          </p>
          <p className="text-contrast tracking-wide font-lato text-center font-bold text-lg mb-8">
            CONSULTAS PRESENCIAIS E ONLINE
          </p>
          <p className="text-contrast tracking-wide font-lato text-center font-extralight text-lg mb-8">
            Atendimento para crianças, adolescentes, adultos e casal{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
