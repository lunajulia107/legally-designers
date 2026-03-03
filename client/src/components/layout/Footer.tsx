type SocialLink = {
  ariaLabel: string;
  href: string;
  iconClass: string;
};

// Definindo os links de redes sociais em um array
const socialLinks: SocialLink[] = [
  {
    ariaLabel: "Instagram",
    href: "https://www.instagram.com/legallydesigners",
    iconClass: "bi bi-instagram text-white",
  },
  {
    ariaLabel: "LinkedIn",
    href: "https://www.linkedin.com/company/legallydesigners",
    iconClass: "bi bi-linkedin text-white",
  },
  {
    ariaLabel: "Behance",
    href: "https://www.behance.net/legallydesigners",
    iconClass: "bi bi-behance text-white",
  },
  {
    ariaLabel: "Email",
    href: "mailto:contato@legallydesigners.com",
    iconClass: "bi bi-envelope-fill text-white",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-5">
      <div className="container py-4">
        <div className="align-items-start row text-start">
          {/* Coluna esquerda */}
          <div className="col-12 col-lg-6 d-flex flex-column flex-md-row gap-2 mb-4 mb-lg-0">
            <img src="/images/favicon.svg" alt="Logo com símbolo abstrato em degradê roxo, 
            rosa, azul e verde ao lado do nome “Legally Designers” em tipografia branca moderna." 
            width="56" />
            <p className="m-0">
              <span className="lead">Legalmente criativas, oficialmente estratégicas.</span> <br />
              © Brasil 2025
            </p> 
          </div>

          {/* Coluna direita */}
          <div className="align-items-start align-items-lg-end col-12 col-lg-6 d-flex flex-column">
            <ul className="d-flex gap-3 list-unstyled m-0">
              {socialLinks.map(({ ariaLabel, href, iconClass }) => (
                <li key={ariaLabel}>
                  <a
                    aria-label={ariaLabel}
                    className="a-social-medias btn-border-purple"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
