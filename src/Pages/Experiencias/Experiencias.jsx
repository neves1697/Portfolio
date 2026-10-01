import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
  FiTerminal,
  FiUsers,
} from "react-icons/fi";
import { ContactBanner, PageIntro } from "../../Components/Portfolio/Shared";
import { profile } from "../../data/portfolio";
export default function Experiencias() {
  return (
    <>
      <PageIntro
        number="03"
        label="EXPERIÊNCIAS"
        title={
          <>
            Uma trajetória de aprendizado<span>.</span>
          </>
        }
      >
        Suporte técnico, desenvolvimento e comunidade. Conhecimentos que se
        complementam na minha relação com a tecnologia.
      </PageIntro>
      <section className="experience-layout">
        <div className="section-aside">
          <span className="eyebrow">MINHA TRAJETÓRIA</span>
          <h2>
            Pessoas, sistemas
            <br />e conexões.
          </h2>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trajetória no LinkedIn <FiArrowUpRight />
          </a>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-icon">
              <FiTerminal />
            </span>
            <p className="eyebrow">ATUAÇÃO PROFISSIONAL</p>
            <h2>{profile.role}</h2>
            <p>
              Referência técnica da equipe, atuando como ponto de encontro entre a análise de
              sistemas voltados ao agronegócio, conexão com outros times, a investigação e antecipação de problemas e as necessidades de quem
              usa a tecnologia.
            </p>
            <div className="tags">
              <span>Suporte técnico</span>
              <span>Análise de sistemas</span>
              <span>Resolução de problemas</span>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-icon">
              <FiUsers />
            </span>

            <p className="eyebrow">COMUNIDADES & APRENDIZADOS</p>
            <li>
              <h2>DIO Campus Expert</h2>
              <p>
                Participação no programa de embaixadores da DIO, conectando
                aprendizado em tecnologia e comunidade.
              </p>
            </li>

            <li>
              <h2>DEVParaná</h2>
              <p>
                O DevParaná é uma comunidade sem fins lucrativos que conecta pessoas desenvolvedoras de software em todo o estado do Paraná. Desde 2015, promove meetups, workshops, hackathons e o evento itinerante DevParaná na Estrada.
              </p>
            </li>

            <li>
              <h2>Pipoca Ágil</h2>
              <p>
                Paricipação no programa Pipoca Ágil.
                A Simulação de Projetos Ágeis é um programa do Podcast Pipoca Ágil que oferece experiência prática em Agilidade. Os participantes trabalham em equipes, assistem a workshops e mentorias e participam de cerimônias Scrum enquanto desenvolvem produtos digitais, vivenciando desafios parecidos com os do ambiente corporativo.
              </p>
            </li>

            <div className="tags">
              <span>Comunidade</span>
              <span>Tecnologia</span>
              <span>Aprendizado contínuo</span>
            </div>
          </article>

        </div>
      </section>
      <section className="knowledge-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONHECIMENTOS QUE SE CONECTAM</p>
            <h2>
              Meu repertório técnico<span>.</span>
            </h2>
          </div>
        </div>
        <div className="knowledge-grid">
          <article>
            <FiLayers />
            <h3>Sistemas</h3>
            <p>
              Uma base em Análise e Desenvolvimento de Sistemas para compreender
              aplicações e suas conexões.
            </p>
          </article>
          <article>
            <FiDatabase />
            <h3>Bancos de dados</h3>
            <p>
              Interesse em dados e tecnologias como MySQL, PostgreSQL, SQLite e
              Oracle.
            </p>
          </article>
          <article>
            <FiCode />
            <h3>Desenvolvimento</h3>
            <p>Projetos e estudos com JavaScript, React, Java, C# e Python.</p>
          </article>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
