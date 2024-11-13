import React, { useEffect } from "react";
import "../../Styles/Cards.css";

const Cards = () => {
    const cards = [
        { title: "Seção 1", description: "Conteúdo da Seção 1" },
        { title: "Seção 2", description: "Conteúdo da Seção 2" },
        { title: "Seção 3", description: "Conteúdo da Seção 3" },
        { title: "Seção 4", description: "Conteúdo da Seção 4" },
    ];

    useEffect(() => {
        const container = document.querySelector(".card-container");
        container.addEventListener("wheel", (e) => {
            e.preventDefault();
            container.scrollBy({
                top: e.deltaY,
                behavior: "smooth",
            });
        });
    }, []);

    return (
        <div className="container-principal">
            <div className="card-container">
                {cards.map((card, index) => (
                    <section key={index} className="section">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </section>
                ))}
            </div>
        </div>

    );
};

export default Cards;
