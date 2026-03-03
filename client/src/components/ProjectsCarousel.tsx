import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  indication: string;
  link: string;
} 

const projects: Project[] = [
  {
    id: 1,
    title: 'Indicart',
    category: 'Design Visual',
    imageUrl: 'images/home/projects/indicart.png',
    indication: "Criação de identidade visual e desenvolvimento de uma landing page fictícia voltada ao nicho artístico.",
    link: '#'
  },
  {
    id: 2,
    title: 'Lumine',
    category: 'Gestão de Redes Sociais',
    imageUrl: 'images/home/projects/lumine.png',
    indication: "Projeto real voltado ao nicho de estética, com produção de vídeos e gestão de redes sociais, focando no posicionamento digital.",
    link: '#'
  },
  {
    id: 3,
    title: 'Kiwi Estética',
    category: 'Sites Estratégicos',
    imageUrl: 'images/home/projects/kiwiEstetica.png',
    indication: "Criação de identidade visual e sistema fictício de agendamento online para o nicho de estética.",
    link: '#'
  },
  {
    id: 4,
    title: 'Boom Design',
    category: 'Todas',
    imageUrl: 'images/home/projects/boomDesign.png',
    indication: "Projeto autoral para divulgação de vivências da faculdade, com desenvolvimento de identidade visual e conteúdo para TikTok.",
    link: '#'
  }
];

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = (): void => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleProjects = (): Project[] => {
    const numCards = projects.length;
    const cardsToShow = 4;
    const visible: Project[] = [];

    for (let i = 0; i < cardsToShow; i++) {
      visible.push(projects[(currentIndex + i) % numCards]);
    }

    return visible;
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <small className="fw-semibold mb-2 text-uppercase text-water-green">
          Legally Designers
        </small>

        <div className="d-flex gap-2">
          <button
            aria-label="Anterior"
            className="btn btn-border-purple d-none d-md-flex p-2 pb-1 pt-1 rounded-circle text-white"
            onClick={goToPrevious}
            type="button"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            aria-label="Próximo"
            className="btn btn-border-purple d-none d-md-flex p-2 pb-1 pt-1 rounded-circle text-white"
            onClick={goToNext}
            type="button"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div> 

      <div className="container container-sm-fluid mt-4 overflow-hidden px-0">
        <ul className="flex-nowrap ps-1 ps-lg-0 row">
          {getVisibleProjects().map((project) => (
            <li className="col-12 col-lg-4 col-md-5" key={project.id}>
              <div className="align-items-start box-transparent d-flex flex-column h-100 p-4 rounded-4 w-100"> 
                <img
                  alt={project.title}
                  className="card-img-top mb-3 rounded-4"
                  src={project.imageUrl}
                  style={{
                    maxHeight: "525px",
                    objectFit: "cover",
                    width: "100%"
                  }}
                /> 
                <small className="fw-medium mb-3 text-uppercase text-water-green">
                  {project.category}
                </small>
                <h5>{project.title}</h5> 
                <p>{project.indication}</p>
                  
                <div className="d-flex justify-content-end mt-3 w-100">
                  <small className="fw-medium mb-3 text-uppercase text-white">
                    Em breve mais detalhes
                  </small>
                </div> 
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProjectsCarousel;