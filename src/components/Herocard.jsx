import paulaPsico from "../assets/PaulaPsico.png";


function Herocard() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center gap-4 px-12 md:px-32 py-10">
        {/* Text container */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-main mb-3">Paula -</h2>
          <p className="font-lato font-bold tracking-wider text-xl md:text-5xl md:px-10 text-brown-text text-center">
            “Te ajudo a encontrar caminhos para superar suas dores e construir
            uma vida com propósito e bem-estar.”
          </p>
          <div className="flex justify-center mt-2">
            <button className="w-2/3 md:w-1/2 mt-4 bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all">
              Saiba mais
            </button>
          </div>
        </div>
        {/* Image container - circular image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-48 h-48 md:w-[500px] md:h-[500px] overflow-hidden rounded-full border-2 border-main">
            <img
              src={paulaPsico}
              alt="Foto da Psicologa Paula"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herocard;
