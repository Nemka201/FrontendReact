import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./components/Vistas/Home";
import Register from "./components/Vistas/Register";
import Login from "./components/Vistas/Login";
import Habitaciones from './components/Vistas/Habitaciones';
import Contactanos from './components/Vistas/Contactanos';
import Error404 from './components/Vistas/Error404';
import Usuario from './components/Vistas/Usuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Habitaciones" element={<Habitaciones/>} />
        <Route path="/Contactanos" element={<Contactanos/>} />
        <Route path="/Usuario" element={<Usuario/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>

  );
}

export default App;