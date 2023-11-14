
import './App.css';
import PaginaInicial from './components/PaginaInicial';
import Empregados from './components/Empregados';
import Substituicoes from './components/Substituicoes';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial </Nav.Link>
        <Nav.Link as={Link} to="/empregados">Empregados </Nav.Link>
        <Nav.Link as={Link} to="/substituicoes">Substituições </Nav.Link>
      </Nav>
      <Routes>
        <Route path="/" index element={<PaginaInicial/>}></Route>
        <Route path="/empregados" element={<Empregados/>}></Route>
        <Route path="/substituicoes" element={<Substituicoes/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
