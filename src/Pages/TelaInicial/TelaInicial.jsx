import React from "react";
import "../../Styles/TelaInicial.css";
import "../../Styles/Mobile/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import Cards from "../../Components/Cards/Cards";
import Slides from "../../Components/Slide/Slide";
import Divider from "../../Components/Divider/Divider";
import Redes from "../../Components/Redes/Redes";

const TelaInicial = () => {

    return (
        <>
            <div className="container">
                <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />
                <Redes />
                <Divider />
                <Slides />
                <Cards />
            </div>
        </>
    );
}

export default TelaInicial;
