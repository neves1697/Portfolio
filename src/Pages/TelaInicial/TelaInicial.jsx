import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiTerminal,
} from "react-icons/fi";
import { FaReact, FaPython } from "react-icons/fa";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript, SiMysql } from "react-icons/si";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import {
  ContactBanner,
  ProjectCard,
  SocialLinks,
  TextLink,
} from "../../Components/Portfolio/Shared";
import { profile, projects } from "../../data/portfolio";
export default function TelaInicial() {
  const technologies = [
    [FaReact, "React"],
    [SiJavascript, "JavaScript"],
    [FaPython, "Python"],
    [BiLogoJava, "Java"],
    [SiMysql, "MySQL"],
    [BiLogoPostgresql, "PostgreSQL"],
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> TECNOLOGIA COM PROPÓSITO
          </p>
          <h1>
            Olá, eu sou
            <br />
            <span>Anderson Neves.</span>
          </h1>
          <h2>{profile.role}</h2>
          <p className="hero-description">
            Entre sistemas, dados e pessoas.
            <br />
            Um olhar analítico para resolver problemas e transformar
            conhecimento em soluções.
            <br />
            Atuo como Analista de Suporte Nível 3 em CRM voltado ao Agronegócio.
          </p>
          <div className="hero-actions">
            <Link to="/projetos" className="button button-primary">
              Explore meus projetos <FiArrowUpRight />
            </Link>
            <Link to="/sobre" className="button button-secondary">
              Mais sobre mim <FiArrowUpRight />
            </Link>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-visual">
          <div className="portrait-outline" aria-hidden="true" />
          <div className="portrait-frame">
            <img src={FotoPerfil} alt="Anderson Neves" fetchpriority="high" />
            <div className="portrait-caption">
              <span>ANDERSON NEVES</span>
              <p>Curiosidade que vira solução.</p>
            </div>
          </div>
          <div className="floating-code" aria-hidden="true">
            <FiCode />
          </div>
          <div className="expert-badge">
            <FiTerminal />
            <div>
              <span>Suporte & desenvolvimento</span>
              <strong>Conectando conhecimentos</strong>
            </div>
            <span className="status-dot" />
          </div>
          <span className="portrait-side-note" aria-hidden="true">
            APRENDER. INVESTIGAR. RESOLVER.
          </span>
        </div>
      </section>
      <section className="tech-section" aria-labelledby="tech-title">
        <div>
          <p className="eyebrow" id="tech-title">
            TECNOLOGIAS & FERRAMENTAS
          </p>
          <span>Parte do meu repertório</span>
        </div>
        <div className="tech-list">
          {technologies.map(([Icon, name]) => (
            <div key={name}>
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DO CONHECIMENTO À PRÁTICA</p>
            <h2>
              Projetos em destaque<span>.</span>
            </h2>
          </div>
          <TextLink to="/projetos">Todos os projetos</TextLink>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="about-strip">
        <p className="eyebrow">
          <FiArrowDown /> UM POUCO ALÉM DO CÓDIGO
        </p>
        <div>
          <h2>Resolver começa por entender.</h2>
          <p>
            O suporte técnico e o desenvolvimento se encontram na minha
            trajetória. Aqui, compartilho projetos, tecnologias e o que faz
            parte desse caminho.
          </p>
          <TextLink to="/experiencias">Conheça minha trajetória</TextLink>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
