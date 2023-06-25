import LoginForm from "../LoginForm";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { BrowserRouter } from 'react-router-dom';

function Login() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid body">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <LoginForm/>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
