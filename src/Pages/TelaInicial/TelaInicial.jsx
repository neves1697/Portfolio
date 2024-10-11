import React from "react";
import "../../Styles/TelaInicial.css"
import Projetos from "../Projetos/Projetos";
import FotoPerfil from "../../Assets/foto_perfil.jpg";

const TelaInicial = () => {
    return <>
        <div className="container">
            <div className="container-fundo">
                <div className="container-fotoperfil">
                    <div className="foto-perfil">
                        <img src={FotoPerfil} title="Foto de Perfil" alt="Foto de Perfil" />
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default TelaInicial;