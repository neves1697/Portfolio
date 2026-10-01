import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import {
  ContactBanner,
  PageIntro,
  SocialLinks,
} from "../../Components/Portfolio/Shared";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import { profile } from "../../data/portfolio";
const groups = [
  {
    title: "Desenvolvimento",
    icon: FiCode,
    items: ["JavaScript", "React", "HTML", "CSS", "Java", "C#", "Python"],
  },
  {
    title: "Bancos de dados",
    icon: FiDatabase,
    items: ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
  },
  {
    title: "Ferramentas & mobile",
    icon: FiTool,
    items: ["Postman", "Insomnia", "Expo"],
  },
];
export default function Sobre() {
  return (
    <>
      <PageIntro
        number="04"
        label="SOBRE MIM"
        title={
          <>
            A pessoa por trás das soluções<span>.</span>
          </>
        }
      >
        Prazer, Anderson. O suporte é minha atuação; a curiosidade por
        tecnologia conecta o restante da minha trajetória.
      </PageIntro>
      <section className="about-layout">
        <div className="about-photo">
          <div className="portrait-frame">
            <img
              src={FotoPerfil}
              alt="Anderson Neves, participante do DIO Campus Expert"
            />
            <div className="portrait-caption">
              <span>ANDERSON NEVES</span>
              <p>{profile.role}</p>
            </div>
          </div>
          <SocialLinks />
        </div>
        <div className="about-copy">
          <p className="eyebrow">SUPORTE, DESENVOLVIMENTO E DADOS</p>
          <h2>
            Entender o problema.
            <br />
            Construir o próximo passo.
          </h2>
          <p>
            Sou Anderson Neves, Analista de Suporte Nível 3 e formado em Análise
            e Desenvolvimento de Sistemas.
          </p>
          <p>
            Meu interesse por bancos de dados e desenvolvimento aparece nos
            projetos que compartilho. Este portfólio reúne essas experiências e
            abre espaço para novas conexões.
          </p>
          <div className="education-note">
            <FiBookOpen />
            <div>
              <span>FORMAÇÃO</span>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Conheça também meu perfil no GitHub <FiArrowUpRight />
          </a>
        </div>
      </section>
      <section className="knowledge-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MINHA CAIXA DE FERRAMENTAS</p>
            <h2>
              Tecnologias & conhecimentos<span>.</span>
            </h2>
          </div>
        </div>
        <div className="knowledge-grid">
          {groups.map(({ title, icon: Icon, items }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
