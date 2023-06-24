import LoginForm from "../LoginForm";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { BrowserRouter } from 'react-router-dom';

function Login() {
  return (
    <>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </>
  );
}

export default Login;
