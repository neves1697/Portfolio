import React from "react";
import "../../Styles/TelaInicial.css"
import Projetos from "../Projetos/Projetos";

const TelaInicial = () => {
    return <>
        <div className="container">
            <div className="conntainer-fundo">
                <p>Tela inicial</p>
            </div>
        </div>

        <div>
            <Projetos />
        </div>

    </>
}

export default TelaInicial;