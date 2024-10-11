import React from "react";
import "../../Styles/TelaInicial.css"
import Projetos from "../Projetos/Projetos";
import FotoPerfil from "../../Assets/foto_perfil.jpg";
import "../../Styles/Mobile/TelaInicial.css";

const TelaInicial = () => {

    const cardData = [
        {
            title: "Projeto 1",
            description: "Descrição do projeto 1",
        },
        {
            title: "Projeto 2",
            description: "Descrição do projeto 2",
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
        }, {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
        }, {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
        },
    ];


    return <>
        <div className="container">
            <div className="container-fundo">
                <div className="container-fotoperfil">
                    <div className="foto-perfil">
                        <img src={FotoPerfil} title="Foto de Perfil" alt="Foto de Perfil" />
                    </div>
                </div>

                {/* Seção dos cards */}
                <div className="card-container">
                    <p>teste</p>
                    {cardData.map((card, index) => (
                        <div className="card" key={index}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default TelaInicial;