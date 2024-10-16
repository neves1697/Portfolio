import React from "react";
import "../../Styles/TelaInicial.css";
import "../../Styles/Mobile/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import Cards from "../../Components/Cards/Cards";
import Slides from "../../Components/Slide/Slide";
import Divider from "../../Components/Divider/Divider";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const TelaInicial = () => {

    const linkedin = "https://www.linkedin.com/in/anderson-neves-405968118/";

    return (
        <>
            <div className="container">
                <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />
                <p>
                    <a href={linkedin} target="_blank"><FaLinkedin size={40} color="#0077B5" title="Linkedin" /></a>
                </p>
                <Divider />
                <Slides />
                <Cards />
            </div>
        </>
    );
}

export default TelaInicial;
