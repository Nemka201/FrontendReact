import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  const handleButtonClickLogin = () => {
    navigate('/Login');
  };
  const handleButtonClickRegister = () => {
    navigate('/Register');
  };
  const handleButtonClickLogout = () => {
    sessionStorage.clear(); // Elimina todos los datos de sessionStorage
    navigate('/');
  };
  let userLogged = JSON.parse(sessionStorage.getItem('session'));
  let isLogged = false;
  if (userLogged !== null){ isLogged = true }

  return (
  <nav className="navbar border-bottom border-bottom-dark">
    <div className="container">
        <div className="col-xl-9 col-sm-8 col-lg-9">
         <Link to="/"> <h1 className="Title" LinkTo>Prive</h1> </Link>
          </div>
        {!isLogged &&
        <>
          <div className="col-xl-1 col-sm-1 col-lg-1">
            <button className="btn btn-outline-success me-2" id="login" onClick={handleButtonClickLogin} type="button">Ingresar</button>
          </div>
          <div className="col-xl-1 col-sm-1 col-lg-1">
            <button className="btn btn-outline-danger me-2" id="register" onClick={handleButtonClickRegister} type="button">Registrarse</button>
          </div>
        </>}
        {isLogged && <>
        <h2>{userLogged.name}</h2>
          <div className="col-xl-1 col-sm-1 col-lg-1">
            <button className="btn btn-outline-danger me-2" id="logout" onClick={handleButtonClickLogout} type="button">Logout</button>
          </div>
           </>}
      </div>
  </nav>
  );
}

export default Navbar;
