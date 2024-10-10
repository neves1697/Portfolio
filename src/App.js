import logo from './logo.svg';
import './App.css';
import TelaInicial from './Pages/Projetos/Projetos';
import Navegacao from './Components/Navegacao/Navegacao'
import { Route, Router, Routes } from 'react-router-dom';
import Rotas from './Routes/Rotas';
import Sobre from './Pages/Sobre/Sobre';

function App() {
  return (
    <div className="App">
      <Rotas />
    </div>
  );
}

export default App;
