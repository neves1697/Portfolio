import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../../data/portfolio";
export default function Navegacao() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const links = [
    ["/inicio", "Início"],
    ["/projetos", "Projetos"],
    ["/experiencias", "Experiências"],
    ["/sobre", "Sobre Mim"],
    ["/contatos", "Contatos"],
  ];
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="header-inner shell">
        <Link
          className="brand"
          to="/inicio"
          aria-label="Anderson Neves — Início"
        >
          an<span>.</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="main-navigation"
          className={`main-navigation ${open ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {links.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <a
          className="header-contact"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <FiArrowUpRight />
        </a>
      </div>
    </header>
  );
}
