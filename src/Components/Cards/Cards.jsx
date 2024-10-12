import React from "react";
import "../../Styles/Cards.css";

const Cards = () => {

    const cards = [
        { title: "Sobre Mim", description: "Desenvolvedor Frontend com paixão por criar interfaces incríveis." },
        { title: "Habilidades", description: "React, JavaScript, CSS, HTML, Node.js." },
        { title: "Contato", description: "Email: exemplo@email.com" },
        { title: "Projeto", description: "Projeto XYZ em desenvolvimento." },
        { title: "Experiência", description: "2 anos de experiência em desenvolvimento." },
        { title: "Educação", description: "Graduado em Ciência da Computação." },
    ];

    return <>
        <div className="card-container">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    </>
}

export default Cards;