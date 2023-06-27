import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../content/Card"
const axios = require('axios');

function Habitaciones() {
  let data;
  const getAppExchangeRates = async () => {
    try {
      const response = await axios.get('https://openexchangerates.org/api/latest.json', {
        params: {
          app_id: '55b98ffe00f4417188058a0c5e06fedb'
        }
      });
      console.log(response.data);
      // Resto de tu código
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid body">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <Card
              image="135138074.jpg"
              title="Habitacion 1"
              text="Una habitación llena de placer"
            />
            <Card
              image="941667_549937958378894_616910792_n.jpg"
              title="Habitacion 2"
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