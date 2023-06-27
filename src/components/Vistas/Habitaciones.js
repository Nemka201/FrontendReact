import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../content/Card"

function Habitaciones() {

  return (
    <>
      <Header />
      <div className="container-fluid body">
        <div className="row ">
          <div className="col-2"></div>
          <div className="col-10 container-cards">
            <Card
              image="135138074.jpg"
              title="Quinteros"
              text="Una habitación llena de placer"
            />
            <Card
              image="941667_549937958378894_616910792_n.jpg"
              title="Soliz"
              text="Una habitación llena de placer"
            />
            <Card
              image="941667_549937958378894_616910792_n.jpg"
              title="noloHaga"
              text="Una habitación llena de placer"
            />
          </div>
          <div className="col-2"></div>

        </div>
      </div>
      <Footer />
    </>

  );
}

export default Habitaciones;