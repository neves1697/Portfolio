import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from "../Pages/Sobre/Sobre";
import Navegacao from "../Components/Navegacao/Navegacao";
import Projetos from "../Pages/TelaInicial/TelaInicial";
import Contatos from "../Pages/Contatos/Contatos";

const Rotas = () => {
    return <>
        <Router>
            <Navegacao />
            <Routes>
                <Route path="/" />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contatos" element={<Contatos />} />
            </Routes>
        </Router>
    </>
}

export default Rotas;