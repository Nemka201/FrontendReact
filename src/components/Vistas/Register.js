import RegisterForm from "../RegisterForm";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

function Register() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid body">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <RegisterForm/>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
