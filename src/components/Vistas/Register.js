import RegisterForm from "../RegisterForm";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

function Register() {
  return (
    <div className="Register">
      <Navbar/>
      <RegisterForm/>
      <Footer/>
    </div>
  );
}

export default Register;
