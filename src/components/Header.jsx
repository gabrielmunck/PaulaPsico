import { useState, useEffect } from "react";
import logo from "../assets/psicoLogo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Função para verificar se o tamanho da tela é menor que 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    // Adiciona o evento de dimensionamento
    window.addEventListener("resize", handleResize);
    // Remove o evento de dimensionamento quando o componente é desmontado, para que nao ocorra vazamento de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }

    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "contato", label: "Contato" },
    { id: "quem-sou", label: "Quem Sou" },
    { id: "servicos", label: "Serviços" },
    { id: "faq", label: "Faq" },
  ];

  return (
    <div className="w-full h-auto min-h-[70px] md:h-[100px] bg-main flex items-center justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between px-4 py-3 md:py-0">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[40px] md:w-[56px] md:h-[56px]"
          />
          <div className="flex flex-col items-center justify-center ml-2">
            <p className="text-logo font-lato font-light text-xl md:text-3xl tracking-wider">
              Paula Mie
            </p>
            <p className="text-logo font-lato font-light text-xs md:text-md">
              Psicologia Especializada
            </p>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-logo p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-center space-x-10 px-12 font-lato font-light sm:text-md lg:text-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-logo hover:underline transition-colors duration-300"
              onClick={(e) => scrollToSection(link.id, e)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile navigation - slide down menu */}
        {isMobile && (
          <div
            className={`absolute top-[70px] left-0 right-0 bg-main z-50 shadow-lg transition-all duration-300 ${
              isMenuOpen
                ? "max-h-[300px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="py-3 hover:text-logo hover:underline transition-colors duration-300 font-lato font-light"
                  onClick={(e) => scrollToSection(link.id, e)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
