import Header from "../header/Header";
import Footer from "../footer/Footer";


function Contactanos() {
  return (
    <>
      <Header />
      <div className="container-fluid body padre">
        <div className="contacto">
          <h2 className="titulo-contactanos">Cualquier duda que tengas, te las respondemos a la brevedad! Contactanos</h2>
        </div>
        <div className="contact-card">
          <div className="phone">Número de teléfono: +54 9 3816 53-9371 </div>
          <div className="facebook-link">

            <a href="https://www.facebook.com/tu-pagina">Visitar Facebook</a>
          </div>
        </div>          
      </div>
      <Footer />
    </>

  );
}

export default Contactanos;