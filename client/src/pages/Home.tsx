import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimationControls } from "framer-motion";

import { UseScrollAnimation } from "../components/layout/UseScrollAnimation"; 
import ProjectsCarousel from "../components/ProjectsCarousel";

// --- Interfaces para Tipagem ---
interface Member {
  name: string;
  role: string;
  image: string;
}

interface Service {
  category: string;
  title: ReactNode;
  description: string;
  image: string;
  customStyle?: React.CSSProperties;
}

// --- Dados das Integrantes ---
const TEAM: Member[] = [
  { name: "Samara Duarte", role: "Designer criativa, especialista em identidade visual e conteúdo atrativo para marcas.", image: "images/home/girls/samara.png" },
  { name: "Camila Bonilha", role: "Social Media e Gestão de Instagram, com foco em conversão e relacionamento.", image: "images/home/girls/camila.png" },
  { name: "Julia Rodrigues", role: "Desenvolvedora de sites com foco em performance, usabilidade e design.", image: "images/home/girls/julia.png" },
];

// --- Dados dos Serviços ---
const SERVICES: Service[] = [
  {
    category: "Marca & Estilo",
    title: <>Design Visual <br /> Autêntico</>,
    description: "Criação e desenvolvimento de branding, identidade visual e materiais gráficos completos para redes sociais, garantindo consistência visual.",
    image: "images/home/color-palette.png",
    customStyle: { marginBottom: -50, marginLeft: -30 }
  },
  {
    category: "Conteúdo & Engajamento",
    title: <>Social Media <br /> Completa</>,
    description: "Planejamento estratégico de conteúdo, gestão e agendamento de postagens, com roteiros e edição de Reels focados em engajamento.",
    image: "images/home/phone.png"
  },
  {
    category: "Site & Conversão",
    title: <>Desenvolvimento <br /> de Sites</>,
    description: "Landing pages, sites institucionais e sistemas de agendamento, com foco em design responsivo e conversão.",
    image: "images/home/window.png"
  }
];

// --- Componente Auxiliar de Seção Animada ---
const AnimatedSection: React.FC<{ 
  animation: { ref: (node?: Element | null) => void; controls: AnimationControls }; 
  children: ReactNode;
  className?: string;
  id?: string;
}> = ({ animation, children, className = "container mb-5 mt-5 pb-5 pt-5", id }) => (
  <motion.section
    ref={animation.ref}
    initial={{ opacity: 0, y: 20 }}
    animate={animation.controls}
    transition={{ duration: 0.6 }}
    className={className}
    id={id}
  >
    {children}
  </motion.section>
);

interface HomeProps {
  onOpenWhatsapp: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenWhatsapp }) => {
  // Configuração das animações de scroll para cada seção
  const sections = Array.from({ length: 8 }, () => UseScrollAnimation());

  // Estado para o contador animado
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 4) {
      const timer = setTimeout(() => setCount(count + 1), 150);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <>
      {/* Seção de introdução e chamada para ação */}
      <AnimatedSection animation={sections[0]} className="container pb-5" id="inicio">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="display-4 fw-normal w-75">
              Transformamos <span className="fw-bold">marcas</span> em negócios
              prontos para crescer no <span className="fw-bold">digital</span>.
            </h1>

            <div className="align-items-end justify-content-between row">
              <p className="col-lg-8 lead">
                Somos a Legally Designers, uma agência formada por três
                especialistas apaixonadas por design, marketing e desenvolvimento
                de sites.
              </p>

              <div className="box-projects box-transparent col-lg-3 d-lg-block d-none p-4 rounded-4">
                <div className="align-items-center d-flex flex-row gap-2 mb-3">
                  <h3>{count}+</h3>
                  <small>Projetos</small>
                </div>
                <div className="align-items-end d-flex flex-row gap-2 justify-content-between">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={i % 2 === 0 ? "bg-purple" : "bg-water-green"}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            <div className="align-items-center d-flex flex-wrap gap-3 justify-content-between mt-5 w-75">
              <h3>
                Impulsione sua <br /> presença digital
              </h3>

              <div className="d-flex flex-wrap gap-4">
                <div className="box-image box-images">
                  {TEAM.map((m, i) => (
                    <img 
                      key={m.name}
                      src={m.image} 
                      alt={m.name} 
                      style={i < 2 ? { marginRight: "-24px" } : {}} 
                    />
                  ))}
                </div>

                <div>
                  <h4>3+ Girls</h4>
                  <p>Legally Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="align-items-end d-flex flex-wrap gap-3 justify-content-between mt-3 pt-3">
          <a
            href="mailto:legallyDesigners@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white"
          >
            Quero impulsionar
            <i className="bi bi-arrow-right ms-3 text-white"></i>
          </a>

          <h6 className="text-white-50">Design Visual</h6>
          <h6 className="text-white-50">Gestão de Redes Sociais</h6> 
          <h6 className="text-white-50">Sites Estratégicos</h6>
        </div>
      </AnimatedSection>

      {/* Seção de apresentação da agência */}
      <AnimatedSection animation={sections[1]}>
        <div className="align-items-stretch d-flex flex-wrap gap-5 justify-content-between">
          <div className="col-lg-3">
            <img src="/images/home/three.png" alt="Símbolo 3D abstrato em degradê roxo, rosa, azul e verde." />
            <h4 className="ms-2">
              Criamos com propósito, estratégia e personalidade.
            </h4>
          </div>

          <div className="col-lg-4 rounded-4">
            <img className="w-100 object-fit-cover rounded-4" 
              src="/images/home/legally-designers.png" 
              alt="Três jovens mulheres em uma agência moderna, banhadas por 
              luzes neon magenta e ciano, colaboram em um projeto de identidade visual 
              exibido em um monitor de alta resolução." />
          </div>

          <div className="col-lg-3 d-flex flex-column justify-content-end">
            <p className="lead text-end">
              Porque cada detalhe comunica, e o seu merece intenção.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Seção sobre nós */}
      <article id="sobre-nos">
        <AnimatedSection animation={sections[2]}>
          <div className="mt-5 row">
            <div className="col-lg-7">
              <h2 className="display-5 fw-normal">
                A <strong>união de talentos</strong>
                <br />
                tornou tudo <strong>inevitável</strong>
              </h2>
            </div>
            
            <div className="col-lg-5">
              <p className="lead">
                A Legally Designers nasceu da união de três mulheres com talentos
                complementares e uma paixão em comum: dar vida a marcas incríveis no
                digital.
              </p>
            </div> 
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <figure className="col-lg-6 rounded-4" style={{ height: "256px" }}>
                <img
                  src="/images/home/girls-united.png"
                  alt="Duas mãos quase se tocando estilizadas..."
                  className="object-fit-cover w-100 h-100 rounded-4"
                />
              </figure>

              <div className="mt-5 row">
                <div className="col-12 col-sm-6">
                  <h5>Mentes Criativas</h5>
                  <p>Novas perspectivas</p>
                </div>
                <div className="col-12 col-sm-6">
                  <h5 className="fw-medium">Transformando ideias em resultados</h5>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-4 mb-5 mt-3">
                <a href="mailto:legallyDesigners@gmail.com" className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white">
                  Entrar em contato <i className="bi bi-arrow-right ms-3 text-white"></i>
                </a>
                <a href="#projetos" className="btn btn-border-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white">
                  Conferir projetos <i className="bi bi-arrow-right ms-3 text-white"></i>
                </a>
              </div>
            </div>

            <div className="align-items-end col-lg-6 d-flex flex-column justify-content-end position-relative" style={{ zIndex: 1 }}>
              <ul className="position-absolute px-3 w-100" style={{ top: "20px", zIndex: 10 }}>
                {[
                  { title: "Onde tudo começou", text: "Entre os estudos da faculdade e vivências, surgiu o desejo de transformar nosso conhecimento em algo aplicável." },
                  { title: "Nos encontramos no processo", text: "Cada troca nos ensinou que nossa união em cada projeto faz toda a diferença.", color: "bg-purple" },
                  { title: "Legally em movimento", text: "Hoje entregamos projetos com identidade, propósito e resultado." }
                ].map((item, idx) => (
                  <li key={idx} className={`align-items-center ${idx % 2 === 0 ? "box-transparent" : ""} d-flex flex-row gap-3 p-4 rounded-4 ${idx === 1 ? "ms-2" : ""}`}>
                    <div className={`${item.color || "bg-water-green"} dot rounded-5`}></div>
                    <div>
                      <h5 className="fw-medium mb-2">{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul> 
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation={sections[3]}>
          <h2 className="display-5 fw-normal mb-5 text-center">
            Três mentes <span className="fw-bolder">criativas</span> e um
            <br /> propósito: fazer sua <span className="fw-bolder">marca brilhar</span>.
          </h2>

          <div className="gap-4 gap-lg-0 row">
            {TEAM.map((member) => (
              <div key={member.name} className="col-lg-4">
                <div className="box-transparent h-100 p-4 rounded-4 text-center d-flex flex-column">
                  <div className="box-image mb-4">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="fw-medium mb-2">{member.name}</h3>
                  <p className="lead">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </article>
      
      {/* Seção sobre o público-alvo e os serviços oferecidos */}
      <AnimatedSection animation={sections[4]}>
        <h2 className="display-5 fw-normal mb-5 text-center">
          Somos para você que é <span className="fw-bolder">excelente</span> no que faz,
          <br />
          mas precisa de uma <span className="fw-bolder">marca à altura</span>.
        </h2>

        <div className="bg-purple rounded-5 w-100">
          <div className="h-100 p-5 row" style={{ minHeight: 432 }}>
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <h3>Se você empreende, presta serviços, vende produtos ou trabalha com criatividade, a gente entende o seu universo.</h3>
              <p className="lead">Ser bom no que faz é só o começo. Sua presença digital precisa ser forte, estratégica e transmitir confiança.</p>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <ul className="d-flex flex-wrap justify-content-end" id="ul-sales" style={{ gap: "0.5rem" }}>
                {["Feed profissional", "Conteúdos estratégicos", "Reels com propósito", "Site que converte"].map(item => (
                  <li key={item} className="badge fw-normal">{item}</li>
                ))}
              </ul>
              <div><h5 className="fw-medium text-end">Legally Designers</h5></div>
            </div>
          </div>
        </div>
      </AnimatedSection> 

      {/* Seção de serviços oferecidos pela agência */}
      <AnimatedSection animation={sections[5]} id="servicos">
        <h2 className="display-5 fw-normal mb-5 text-center">
          <span className="fw-bolder">Tudo</span> que sua <span className="fw-bolder">marca</span> <br /> precisa em um
          <span className="fw-bolder"> lugar só</span>
        </h2>

        <div className="gap-4 gap-lg-0 row">
          {SERVICES.map((service, index) => (
            <div key={index} className="col-lg-4 h-100">
              <div className="box-transparent overflow-hidden rounded-4 h-100">
                <div className={`p-4 pb-0 ${index === 0 ? "" : "pb-lg-3"}`}>
                  <small className="fw-semibold text-water-green text-uppercase">{service.category}</small>
                  <h3 className="fw-medium mb-2 mt-3">{service.title}</h3>
                  <p className="lead">{service.description}</p>
                </div>
                <div className={`d-flex ${index === 0 ? "" : "justify-content-end"}`} style={service.customStyle}>
                  <img src={service.image} alt={service.category} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Seção de projetos realizados pela agência */}
      <AnimatedSection animation={sections[6]} id="projetos">
        <div className="row"> 
          <div className="col-lg-7 mb-5"> 
              <h2 className="display-5 fw-normal">Projetos <span className="fw-bolder">criativos</span> para marcas com <span className="fw-bolder">identidade e visão</span></h2>  
          </div>
          <div className="col-lg-5">
              <p className="lead">Confira nossos projetos selecionados e conheça nossa forma de pensar, criar e entregar soluções com estratégia, estética e impacto.</p> 
          </div>
        </div>
        <ProjectsCarousel />
      </AnimatedSection>

      {/* Seção para contato */}
      <AnimatedSection animation={sections[7]}> 
        <h2 className="display-5 fw-normal mb-5 text-center">Vamos fazer sua <span className="fw-bolder">marca brilhar?</span></h2>

        <div className="box-transparent rounded-5 w-100" id="box-call-to-action">
          <div className="h-100 p-5 row" style={{ minHeight: 250 }}>
            <div className="col-lg-6 d-flex flex-column mb-5">
              <h3 className="mb-3">Pronta para elevar sua marca com um time criativo e estratégico?</h3>
              <p className="lead">Vamos conversar sobre como destacar seu negócio no digital, com identidade, propósito e resultado.</p>
              <div className="mt-4">
                <button 
                  onClick={onOpenWhatsapp}
                  className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white border-0"
                >
                  Fale com a gente <i className="bi bi-arrow-right ms-3 text-white"></i>
                </button>
              </div> 
            </div>
            <div className="align-items-end col-lg-6 d-flex justify-content-end"> 
              <h5 className="fw-medium text-end">Legally Designers</h5>
            </div>
          </div>
        </div>
      </AnimatedSection> 
    </> 
  );
};

export default Home;