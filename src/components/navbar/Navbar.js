import { BrowserRouter as useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleButtonClickLogin = () => {
    navigate('/Login');
  };
  const handleButtonClickRegister = () => {
    navigate('/Register');
  };
  return (
  <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div className="container">
        <div className="col-xl-9 col-sm-8 col-lg-9"></div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn btn-outline-success me-2" id="login" onClick={handleButtonClickLogin} type="button">Ingresar</button>
        </div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn btn-outline-danger me-2" id="register" onClick={handleButtonClickRegister} type="button">Registrarse</button>
        </div>
      </div>
  </nav>
  );
}

export default Navbar;
