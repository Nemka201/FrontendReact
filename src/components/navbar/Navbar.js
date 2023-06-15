function Navbar() {
  return (
  <nav className="navbar border-bottom border-bottom-dark">
    <div className="container">
        <div className="col-xl-9 col-sm-8 col-lg-9">
          <h1 className="Title">Prive</h1>
          </div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn me-2" id="login" type="button">Ingresar</button>
        </div>
        <div className="col-xl-1 col-sm-1 col-lg-1">
          <button className="btn me-2" id="register" type="button">Registrarse</button>
        </div>
      </div>
  </nav>
  );
}

export default Navbar;
