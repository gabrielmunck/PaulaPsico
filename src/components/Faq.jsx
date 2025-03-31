import zoom from "../assets/zoom.svg";
import googlemeet from "../assets/googlemeet.svg";
import WhatsButton from "./WhatsButton";

function Faq() {
  return (
    <div id="faq" className="flex flex-col lg:flex-row justify-center lg:space-x-20 lg:max-w-7xl w-full bg-background p-4 lg:p-16">
      <div className="w-full lg:w-1/2 max-w-5xl z-10">
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12">
          <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
            Mas consultas online realmente funcionam?
          </p>
          <p className="tracking-tight leading-6 text-contrast font-lato text-justify font-extralight text-lg p-1 lg:px-8">
            A psicoterapia online é eficaz porque oferece acesso a um suporte
            psicológico de qualidade, independentemente da localização do
            paciente. Estudos mostram que ela pode ser tão eficiente quanto a
            presencial, ajudando a tratar ansiedade, depressão e outros
            transtornos. Além disso, a flexibilidade de horários e a
            possibilidade de estar em um ambiente familiar proporcionam maior
            conforto e adesão ao tratamento, criando um espaço seguro para o
            autoconhecimento e a resolução de conflitos emocionais.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12">
          <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
            Referente Sigilo
          </p>
          <p className="tracking-tight leading-6 text-contrast font-lato text-justify font-extralight text-lg p-1 lg:px-8">
            Consultas virtuais e presenciais são 100% protegidas e sigilosas,
            além de atender todas as regulamentações dos Conselhos Federais de
            Psicologia.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12">
          <div className="flex justify-between space-x-5">
            <img src={zoom} alt="Zoom Logo" className="w-8 h-8" />
            <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
              Plataforma das Sessões
            </p>
            <img src={googlemeet} alt="google meet logo" className="w-8 h-8" />
          </div>
          <p className="tracking-tight leading-6 text-contrast font-lato text-justify font-extralight text-lg p-1 lg:px-8">
            Você pode escolher entre as principais ferramentas de videochamada
            disponíveis como Whatsapp, Zoom e Google Meet para o seu
            atendimento.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-5xl z-10">
        <div className="flex flex-col justify-center items-center min-h-screen w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-8">
            Tipos de tratamentos disponiveis
          </p>
          <div className="grid grid-cols-1 gap-4 text-contrast font-lato">
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Promoção e prevenção saúde mental</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Ansiedade</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Ataque de pânico</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Fobias</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Dificuldade na tomada de decisões</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Estresse</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Insatisfação profissional</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Alterações do humor</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Depressão</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Transtorno Bipolar</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Questões relacionados a autoestima</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Situação de luto</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Dependência química</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Dificuldades no relacionamento</p>
            <p className="flex items-center"><span className="text-main mr-2">✓</span> Transtorno de personalidade</p>
            <p className="flex items-center mb-4"><span className="text-main mr-2">✓</span> Perda de peso</p>
            <WhatsButton/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Faq;
