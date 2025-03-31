import logo from "../assets/psicoLogo.svg";

function Header() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full h-[100px] bg-main flex items-center justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between">
        <div className="flex max-w-xs px-12">
          <img src={logo} alt="logo" className="w-[56px] h-[56px]" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-logo font-lato font-light text-3xl tracking-wider">Paula Mie</p>
            <p className="text-logo font-lato font-light text-md">Psicologia Especializada</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10 px-12 font-lato font-light text-lg">
          <a href="#home" className="hover:text-logo hover:underline hover:bg-slate-950 h-full transition-colors duration-300 " onClick={(e) => scrollToSection('home', e)}>Home</a>
          <a href="#contato" className="hover:text-logo hover:underline transition-colors duration-300" onClick={(e) => scrollToSection('contato', e)}>Contato</a>
          <a href="#quem-sou" className="hover:text-logo hover:underline transition-colors duration-300" onClick={(e) => scrollToSection('quem-sou', e)}>Quem Sou</a>
          <a href="#servicos" className="hover:text-logo hover:underline transition-colors duration-300" onClick={(e) => scrollToSection('servicos', e)}>Serviços</a>
          <a href="#faq" className="hover:text-logo hover:underline transition-colors duration-300" onClick={(e) => scrollToSection('faq', e)}>Faq</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
