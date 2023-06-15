function Navbar() {
  return (
  <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div className="container">
        <div className="col-xl-9 col-sm-8 col-lg-9"></div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn btn-outline-success me-2" id="login" type="button">Ingresar</button>
        </div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn btn-outline-danger me-2" id="register" type="button">Registrarse</button>
        </div>
      </div>
  </nav>
  );
}

export default Navbar;
