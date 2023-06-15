import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./components/Vistas/Home";
import Register from "./components/Vistas/Register";
import Login from "./components/Vistas/Login";
import Habitaciones from './components/Vistas/Habitaciones';
import Contactanos from './components/Vistas/Contactanos';
import Error404 from './components/Vistas/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home/>} />
        <Route path="/Register" component={<Register/>} />
        <Route path="/Login" component={<Login/>} />
        <Route path="/Habitaciones" component={<Habitaciones/>} />
        <Route path="/Contactanos" component={<Contactanos/>} />
        <Route path="*" component={<Error404/>} />
      </Routes>
    </Router>

  );
}

export default App;