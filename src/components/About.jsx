import Aboutbg from "../assets/AboutBg.png";
import PaulaPsico from "../assets/PaulaPsico.png";

function About() {
  return (
    <div 
      className="w-full h-auto flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col justify-center items-center bg-main bg-opacity-90 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="w-full text-center text-3xl font-lato font-light mb-4">A Psicóloga</h2>
          <img src={PaulaPsico} alt="Imagem da Psicologa Paula" className="w-32 h-32 rounded-full mb-4" />
          <p className="font-lato font-light text-2xl border-b-2 border-logo pb-1 mb-4 ">Paula Mie Buno Hiratsuka</p>
          <section className=""></section>
          
        </div>
      </div>
    </div>
  );
}

export default About;

