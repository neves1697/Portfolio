import React, { useEffect } from "react";
import "../../Styles/TelaInicial.css";
import "../../Styles/Mobile/TelaInicial.css";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import Cards from "../../Components/Cards/Cards";
import Slides from "../../Components/Slide/Slide";
import Divider from "../../Components/Divider/Divider";
import Redes from "../../Components/Redes/Redes";
import CardSkills from "../../Components/Cards/CardsSkills";

const TelaInicial = () => {

    useEffect(() => {
        document.title = "Portfólio";
    }, [])

    return (
        <>
            <div className="container">
                <img src={FotoPerfil} alt="Foto de Perfil" title="Foto de Perfil" className="foto-perfil" />
                <Redes />
                <Divider />
                <Slides />
                <CardSkills />
                <p>Teste</p>
            </div>

        </>
    );
}

export default TelaInicial;
