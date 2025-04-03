function Sos() {
  return (
    <footer>
      <div className="w-full bg-background flex flex-col items-center justify-center py-10">
        <div className="w-full flex flex-col items-center justify-center mb-10 px-6 ">
          <h4 className="flex flex-col md:flex-row justify-center w-full font-lato font-light text-center text-lg md:text-xl mb-8">
            <p className="font-bold mr-2">Atenção:</p> Este site não oferece
            atendimento imediato a pessoas em crise suicida.
          </h4>
          <h3 className="w-full font-lato font-bold text-center text-xl md:text-2xl mb-8 tracking-wider">
            Em caso de crise ligue para o CVV - 188
          </h3>
          <p className="w-full font-lato font-light text-center text-lg md:text-xl mb-8 md:px-10">
            Em caso de emergência, procure o hospital mais próximo. Havendo
            risco de morte, ligue imediatamente para o SAMU (192) ou Corpo de
            Bombeiro (193).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Sos;
