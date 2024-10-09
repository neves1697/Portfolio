import React from "react";
import "../../Styles/Navegacao.css"
import { Link } from "react-router-dom";

const Navegacao = () => {

    return <>
        <nav className="nav">
            <a href="/home" className="icon">Início</a>
            <ul>
                <li > <a href="/projetos"> Projetos </a> </li>
                <li > <a href="/experiencias"> Experiências </a> </li>
                <li> <a href="/sobre"> Sobre mim </a> </li>
                <li> <a href="/contatos"> Contatos </a> </li>
            </ul>
        </nav>
    </>
}

export default Navegacao;