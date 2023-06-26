import Header from "../header/Header";
import Footer from "../footer/Footer";
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Contactanos() {
  return (
    <>
      <Header />
      <div className="container-fluid body padre">
        <div className="contacto">
          <h2 className="titulo-contactanos">Cualquier duda que tengas, te las respondemos a la brevedad! Contactanos</h2>
        </div>
        <div class="contact-card">
          <div class="phone">Número de teléfono: +54 9 3816 53-9371 </div>
          <div class="facebook-link">

            <a href="https://www.facebook.com/tu-pagina">Visitar Facebook</a>
          </div>
        </div>          
      </div>
      <Footer />
    </>

  );
}

export default Contactanos;