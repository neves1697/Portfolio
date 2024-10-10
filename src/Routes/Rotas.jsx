import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from "../Pages/Sobre/Sobre";
import Navegacao from "../Components/Navegacao/Navegacao";
import Contatos from "../Pages/Contatos/Contatos";
import Experiências from "../Pages/Experiencias/Experiencias";
import Projetos from "../Pages/Projetos/Projetos";
import TelaInicial from "../Pages/TelaInicial/TelaInicial";

const Rotas = () => {
    return <>
        <Router>
            <Navegacao />
            <Routes>
                <Route exact path="/" />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/experiencias" element={<Experiências />} />
                <Route path="/telainicial" element={<TelaInicial />} />
                
            </Routes>
        </Router>
    </>
}

export default Rotas;