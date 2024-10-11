import React from "react";
import "../../Styles/TelaInicial.css"
import Projetos from "../Projetos/Projetos";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import "../../Styles/Mobile/TelaInicial.css";

const TelaInicial = () => {
    return <>
        <div className="container">
            <div className="container-fundo">
                <div className="container-fotoperfil">
                    <div className="foto-perfil">
                        <img src={FotoPerfil} title="Foto de Perfil" alt="Foto de Perfil" />
                    </div>
                    <div className="teste"><p>t</p></div>
                </div>
            </div>
        </div>
    </>
}

export default TelaInicial;