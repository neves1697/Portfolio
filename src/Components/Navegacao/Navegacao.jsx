import React from "react";
import "../../Styles/Navegacao.css"
import { Link } from "react-router-dom";

const Navegacao = () => {

    return <>
        <nav className="nav">
            <Link to={"/home"}>Início</Link>
            <ul>
                <li> <Link to={"/projetos"}> Projetos </Link> </li>
                <li> <Link to={"/experiencias"}> Experiências </Link> </li>
                <li> <Link to={"/sobre"}>Sobre mim</Link> </li>
                <li> <Link to={"/contatos"}>Contatos</Link> </li>
            </ul>
        </nav>
    </>
}

export default Navegacao;