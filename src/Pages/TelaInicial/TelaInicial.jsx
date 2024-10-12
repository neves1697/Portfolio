import React from "react";
import "../../Styles/TelaInicial.css";
import "../../Styles/Mobile/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import Cards from "../../Components/Cards/Cards";
import Slides from "../../Components/Slide/Slide";

const TelaInicial = () => {
    return (
        <>
            <div className="container">
                <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />

                <div className="container-divider">
                    <div className="divider">
                    </div>
                </div>
                <Slides />
                <Cards />
            </div>
        </>
    );
}

export default TelaInicial;
