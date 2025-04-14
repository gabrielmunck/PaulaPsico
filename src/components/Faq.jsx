import zoom from "../assets/zoom.svg";
import googlemeet from "../assets/googlemeet.svg";
import WhatsButton from "./WhatsButton";
import { motion } from "framer-motion";
import { fadeIn, slideInRight, staggerContainer } from "../animations/variants";

function Faq() {
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id="faq" className="flex flex-col lg:flex-row justify-center lg:space-x-20 lg:max-w-7xl w-full bg-background p-4 lg:p-16">
      <motion.div 
        className="w-full lg:w-1/2 max-w-5xl z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12"
          variants={cardVariant}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
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
        </motion.div>
        
        <motion.div 
          className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12"
          variants={cardVariant}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
            Referente Sigilo
          </p>
          <p className="tracking-tight leading-6 text-contrast font-lato text-justify font-extralight text-lg p-1 lg:px-8">
            Consultas virtuais e presenciais são 100% protegidas e sigilosas,
            além de atender todas as regulamentações dos Conselhos Federais de
            Psicologia.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col justify-center items-center w-full rounded-[80px] border-4 border-main p-8 mb-12"
          variants={cardVariant}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="flex justify-between space-x-5">
            <motion.img 
              src={zoom} 
              alt="Zoom Logo" 
              className="w-8 h-8" 
              loading="lazy"
              whileHover={{ scale: 1.2, rotate: 5 }}
            />
            <p className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-2">
              Plataforma das Sessões
            </p>
            <motion.img 
              src={googlemeet} 
              alt="google meet logo" 
              className="w-8 h-8" 
              loading="lazy"
              whileHover={{ scale: 1.2, rotate: -5 }}
            />
          </div>
          <p className="tracking-tight leading-6 text-contrast font-lato text-justify font-extralight text-lg p-1 lg:px-8">
            Você pode escolher entre as principais ferramentas de videochamada
            disponíveis como Whatsapp, Zoom e Google Meet para o seu
            atendimento.
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2 max-w-5xl z-10"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="flex flex-col justify-center items-center min-h-screen w-full rounded-[80px] border-4 border-main p-8 mb-6"
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <motion.p 
            className="text-contrast font-lato text-center font-bold text-xl lg:text-2xl mb-8"
            variants={fadeIn}
          >
            Tipos de tratamentos disponiveis
          </motion.p>
          
          
          <div className="grid grid-cols-1 gap-4 text-contrast font-lato">
            {[
              "Promoção e prevenção saúde mental",
              "Ansiedade",
              "Ataque de pânico",
              "Fobias",
              "Dificuldade na tomada de decisões",
              "Estresse",
              "Insatisfação profissional",
              "Alterações do humor",
              "Depressão",
              "Transtorno Bipolar",
              "Questões relacionados a autoestima",
              "Situação de luto",
              "Dependência química",
              "Dificuldades no relacionamento",
              "Transtorno de personalidade",
              "Perda de peso"
            ].map((item, index) => (
              <motion.p 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.3, 
                    delay: Math.min(index * 0.03, 0.5) 
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ x: 5, color: "#6D4534", transition: { duration: 0.2 } }}
              >
                <span className="text-main mr-2">✓</span> {item}
              </motion.p>
            ))}
            
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, delay: 0.2 } 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <WhatsButton />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faq;