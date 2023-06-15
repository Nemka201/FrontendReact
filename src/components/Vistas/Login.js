import LoginForm from "../LoginForm";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Login() {
  return (
    <div className="Login">
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
  );
}

export default Login;
