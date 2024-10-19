import React from "react";
import "../../Styles/Navegacao.css"
import { Link, useLocation } from "react-router-dom";

const Navegacao = () => {
    const location = useLocation();

    return <>
        <nav className="nav">
            <Link to={"/inicio"} className={location.pathname === "/inicio" ? "active" : ""}>Início</Link>
            <ul>
                <li>
                    <Link to={"/projetos"} className={location.pathname === "/projetos" ? "active" : ""} > Projetos </Link>
                </li>
                <li>
                    <Link to={"/experiencias"} className={location.pathname === "/experiencias" ? "active" : ""}> Experiências </Link>
                </li>
                <li>
                    <Link to={"/sobre"} className={location.pathname === "/sobre" ? "active" : ""} >Sobre mim</Link>
                </li>
                <li>
                    <Link to={"/contatos"} className={location.pathname === "/contatos" ? "active" : ""} >Contatos</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Navegacao;