import React from "react";
import "../../Styles/TelaInicial.css";
import { Link } from "react-router-dom";

const Projetos = () => {
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
    ];

    return <>
        <div>
            <p>Projetos</p>
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
    </>
}

export default Projetos;