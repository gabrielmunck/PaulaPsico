import tree from "../assets/tree.svg";
import whatsapp from "../assets/whatsapp.svg";

function Publi() {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-y-visible">
      <div className="absolute left-0 top-1/3 h-[400px] md:h-[600px] lg:h-[800px] w-full z-0">
        <img
          src={tree}
          alt="Árvore"
          className="absolute -left-[180px] md:-left-[250px] top-10 md:top-0 transform -translate-y-1/2 w-auto h-full opacity-80"
        />
      </div>

      <div className="w-4/5 md:3/5 max-w-5xl z-10">
        <div className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-6">
          <p className="text-contrast font-lato text-center font-bold text-xl mb-8">
            Sua saúde mental é tão importante quanto a sua saúde física.
          </p>
          <p className="text-contrast font-lato text-center font-extralight text-lg mb-6">
            Tenha sua consulta marcada em apenas alguns cliques{" "}
          </p>
          <div className="flex md:p-8 mb-6">
            <button className="flex items-center bg-emerald-500 px-5 md:px-10 py-4 md:py-5 rounded-full hover:bg-emerald-700 transition-colors">
              <img
                src={whatsapp}
                alt="whatsapp icon"
                className="w-8 h-8 mr-4"
              />
              <p className="text-white font-lato text-center text-sm md:text-lg font-bold">
                AGENDE UMA CONSULTA
              </p>
            </button>
          </div>
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

export default Publi;
