import React from "react";
import "../../Styles/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import "../../Styles/Mobile/TelaInicial.css";
import Cards from "../../Components/Cards/Cards";
import Slides from "../../Components/Slide/Slide";

const TelaInicial = () => {
    return (
        <>
            <div className="container">
                <div className="container-fundo">
                    <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />
                </div>
                <Slides />
                <Cards />
            </div>
        </>
    );
}

export default TelaInicial;
