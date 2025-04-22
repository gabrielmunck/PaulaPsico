import paulaPsico from "../assets/PaulaPsico.webp";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "../animations/variants";

function Herocard() {

  const scrollTo = () => {
    const section = document.getElementById('quem-sou');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 px-12 lg:px-32 py-10 z-20">
        <motion.div 
          className="w-full md:w-1/2 mt-4 md:mt-0"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-main mb-3">Paula -</h2>
          <p className="font-lato font-bold tracking-wider text-xl md:text-2xl xl:text-5xl lg:px-10 text-brown-text text-center">
            "Te ajudo a encontrar caminhos para superar suas dores e construir
            uma vida com propósito e bem-estar."
          </p>
          <div className="flex justify-center mt-2">
            <motion.button
              onClick={scrollTo}
              className="w-2/3 md:w-1/2 mt-4 bg-main text-white shadow-md px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba mais
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="w-48 h-48 md:w-[500px] md:h-[500px] overflow-hidden rounded-full border-2 border-main"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={paulaPsico}
              alt="Foto da Psicologa Paula"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Herocard;
