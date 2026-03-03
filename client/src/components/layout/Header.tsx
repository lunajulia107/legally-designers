import React, { useEffect, useState } from "react";

type LinkItem = {
  id: string;
  path: string;
  label: string;
};

// Definindo os links do menu
const links: LinkItem[] = [
  { id: "inicio", path: "#inicio", label: "Início" },
  { id: "sobre", path: "#sobre-nos", label: "Sobre" },
  { id: "servicos", path: "#servicos", label: "Serviços" },
  { id: "projetos", path: "#projetos", label: "Projetos" }
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Adiciona um listener para detectar quando o usuário rola a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`pb-2 pt-2 sticky-top ${scrolled ? "bg-whiteOpacity2 border-bottom-whiteOpacity16 box-shadow" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo com símbolo abstrato em degradê roxo, 
              rosa, azul e verde ao lado do nome “Legally Designers” em tipografia branca moderna."
              width="180" />
            </a>

            <button
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarNav"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
              <ul className="gap-3 navbar-nav">
                {links.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a href={link.path} className="nav-link">
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
              <p className="m-0">São Paulo, Brasil</p>
            </div>
        </nav>
      </div> 
    </header>
  );
};

export default Header;
