import React from "react";
import "./css.scss";

const CardSkills = () => {
  const cards = [
    { title: "Seção 1", description: "Teste 1" },
    { title: "Seção 2", description: "Conteúdo da Seção 2" },
    { title: "Seção 3", description: "Conteúdo da Seção 3" },
    { title: "Seção 4", description: "Conteúdo da Seção 4" },
  ];

  return (
    <>
      <div className="card-principals">
        <div className="card-interno">
          <p></p>
        </div>
      </div>
    </>
  );
};

export default CardSkills;
