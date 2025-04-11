
import whatsapp from "../assets/whatsapp.svg";


function WhatsButton() {

  const handleWhatsAppClick = () => {
    
    const phoneNumber = "5511975066572"; 
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
};
  
    return (
        <div className="flex md:p-8 mb-6">
        <button onClick={handleWhatsAppClick} className="flex items-center bg-emerald-500 px-5 md:px-10 py-4 md:py-5 rounded-full hover:bg-emerald-700 transition-colors">
          <img
            src={whatsapp}
            alt="whatsapp icon"
            className="w-8 h-8 mr-4"
          />
          <p className="text-white font-lato text-center text-sm md:text-lg font-bold">
            AGENDE SUA CONSULTA
          </p>
        </button>
      </div>
    )
}

export default WhatsButton;