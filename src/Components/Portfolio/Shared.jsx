import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCode,
  FiDatabase,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../data/portfolio";

export function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Anderson Neves (abre em nova aba)"
      >
        <FaGithub />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Anderson Neves (abre em nova aba)"
      >
        <FaLinkedinIn />
      </a>
      <span>
        Vamos nos conectar <FiArrowUpRight />
      </span>
    </div>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.style}`}>
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${project.title} no GitHub (abre em nova aba)`}
      >
        <div className="project-art" aria-hidden="true">
          <span className="project-number">PROJETO / {project.number}</span>
          {project.style === "database" ? (
            <FiDatabase className="project-symbol" />
          ) : (
            <FiCode className="project-symbol" />
          )}
          <span className="project-art-label">
            {project.style === "database"
              ? "dados → possibilidades"
              : "< ideias em código />"}
          </span>
          <span className="project-open">
            <FiArrowUpRight />
          </span>
        </div>
        <div className="project-copy">
          <p className="eyebrow">{project.category}</p>
          <h3>
            {project.title}
            <FiArrowUpRight />
          </h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

export function PageIntro({ number, label, title, children }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">
        <span>{number} /</span> {label}
      </p>
      <h1>{title}</h1>
      <p className="page-description">{children}</p>
    </header>
  );
}

export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div>
        <p className="eyebrow">UMA BOA CONVERSA É UM COMEÇO</p>
        <h2>
          Vamos trocar ideias<span>?</span>
        </h2>
      </div>
      <Link to="/contatos" className="button button-primary">
        Entre em contato <FiArrowUpRight />
      </Link>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link to="/inicio" className="brand" aria-label="Anderson Neves — Início">
        an<span>.</span>
      </Link>
      <p>© {new Date().getFullYear()} Anderson Neves</p>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        Feito com React e dedicação <FiArrowUpRight />
      </a>
    </footer>
  );
}

export function TextLink({ to, children }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <FiArrowRight />
    </Link>
  );
}
