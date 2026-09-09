import { useEffect, useRef } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sobre from '../Pages/Sobre/Sobre';
import Navegacao from '../Components/Navegacao/Navegacao';
import Contatos from '../Pages/Contatos/Contatos';
import Experiencias from '../Pages/Experiencias/Experiencias';
import Projetos from '../Pages/Projetos/Projetos';
import TelaInicial from '../Pages/TelaInicial/TelaInicial';
import { Footer } from '../Components/Portfolio/Shared';
function Layout() {
  const { pathname } = useLocation();
  const main = useRef(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    const titles = { '/inicio': 'Início', '/projetos': 'Projetos', '/experiencias': 'Experiências', '/sobre': 'Sobre Mim', '/contatos': 'Contatos' };
    document.title = `${titles[pathname] || 'Portfólio'} | Anderson Neves`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);
  return <><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); main.current?.focus(); }}>Pular para o conteúdo</a><Navegacao /><main id="main-content" ref={main} tabIndex={-1} className="shell main-content"><Routes><Route path="/" element={<Navigate to="/inicio" replace />} /><Route path="/inicio" element={<TelaInicial />} /><Route path="/projetos" element={<Projetos />} /><Route path="/experiencias" element={<Experiencias />} /><Route path="/sobre" element={<Sobre />} /><Route path="/contatos" element={<Contatos />} /><Route path="*" element={<Navigate to="/inicio" replace />} /></Routes></main><Footer /></>;
}
export default function Rotas() { return <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Layout /></HashRouter>; }
