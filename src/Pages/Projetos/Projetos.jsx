import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import {
  ContactBanner,
  PageIntro,
  ProjectCard,
} from "../../Components/Portfolio/Shared";
import { profile, projects } from "../../data/portfolio";
export default function Projetos() {
  return (
    <>
      <PageIntro
        number="02"
        label="PROJETOS"
        title={
          <>
            Conhecimento em prática<span>.</span>
          </>
        }
      >
        Uma seleção dos meus projetos de desenvolvimento e estudos. Cada
        repositório conta um pouco desse caminho.
      </PageIntro>
      <div className="project-list-heading">
        <span>
          {String(projects.length).padStart(2, "0")} projetos selecionados
        </span>
        <a
          className="text-link"
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Todos no GitHub <FiArrowUpRight />
        </a>
      </div>
      <section
        className="projects-grid all-projects"
        aria-label="Projetos selecionados"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
      <ContactBanner />
    </>
  );
}
