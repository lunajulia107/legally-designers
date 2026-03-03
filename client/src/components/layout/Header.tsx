import React, { useEffect, useState } from "react";

type LinkItem = {
  id: string;
  path: string;
  label: string;
};

const links: LinkItem[] = [
  { id: "inicio", path: "#inicio", label: "Início" },
  { id: "sobre", path: "#sobre-nos", label: "Sobre" },
  { id: "servicos", path: "#servicos", label: "Serviços" },
  { id: "projetos", path: "#projetos", label: "Projetos" }
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Lógica de fundo: Se estiver com scroll OU o menu estiver aberto, aplica o fundo escuro
  const headerBackground = (scrolled || isMenuOpen) 
    ? "bg-whiteOpacity2 border-bottom-whiteOpacity16 box-shadow" 
    : "bg-transparent";

  return (
    <header 
      className={`pb-2 pt-2 sticky-top transition-all ${headerBackground}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img 
              src="/images/logo.svg" 
              alt="Logo Legally Designers"
              width="180" 
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? "show" : ""}`} 
            id="navbarNav"
          >
            {/* No mobile, adicionamos um padding e garantimos que o fundo acompanhe o estilo */}
            <ul className="gap-2 gap-md-3 navbar-nav my-4 my-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a 
                    href={link.path} 
                    className="nav-link text-white fw-medium"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="align-items-center d-lg-flex d-none">
            <img
              alt="Flag da bandeira do Brasil"
              className="me-2"
              height="24"
              src="/images/brazil.png"
              width="32"
            />
            <p className="m-0 text-white">São Paulo, Brasil</p>
          </div>
        </nav>
      </div> 
    </header>
  );
};

export default Header;