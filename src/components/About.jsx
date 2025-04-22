import Aboutbg from "../assets/AboutBg.webp";
import PaulaPsico from "../assets/PaulaPsico.webp";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "../animations/variants";

function About() {
  return (
    <div
      id="quem-sou"
      className="w-full h-auto flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      <div className="container mx-auto py-16 px-4">
        <motion.div 
          className="flex flex-col justify-center items-center bg-main bg-opacity-90 p-8 rounded-lg max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="w-full text-center text-3xl font-lato font-light mb-4"
            variants={fadeIn}
          >
            A Psicóloga
          </motion.h2>
          <motion.img
            src={PaulaPsico}
            alt="Imagem da Psicologa Paula"
            className="w-32 h-32 rounded-full mb-4"
            loading="lazy"
            variants={scaleIn}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          />
          <motion.h3 
            className="font-lato font-light text-2xl border-b-2 border-logo pb-1 mb-4"
            variants={fadeIn}
          >
            Paula Mie Buno Hiratsuka
          </motion.h3>
          <motion.section 
            className="w-full px-4 md:px-14 font-lato md:text-justify mb-2"
            variants={fadeIn}
          >
            "Sou psicóloga com ampla experiência em psicoterapia para todas as
            idades. Graduada pela Universidade Anhembi Morumbi, utilizo a
            abordagem Comportamental para oferecer um atendimento personalizado
            e eficaz.
          </motion.section>
          <motion.section 
            className="w-full px-4 md:px-14 font-lato md:text-justify"
            variants={fadeIn}
          >
            Especializada em ABA (Análise do Comportamento Aplicado) e
            Neuropsicologia pela Faculdade Líbano, ajudo no tratamento de
            transtornos como ansiedade, depressão, TDAH, TOD, TEA e estresse
            pós-traumático, entre outros."
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
