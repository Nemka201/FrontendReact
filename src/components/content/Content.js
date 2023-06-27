import Slide from "./Slide";

function Content() {
  return (
    <div className="Content">
      <div className="container-fluid body">
        <div className="row">
          <div className="col-4">
            <br></br><br></br><br></br>
            <section className="main-text-container">
            <h1 className="main-text">Descubre un refugio íntimo en el corazón de Tucumán, donde la sensualidad y la privacidad se entrelazan en una experiencia inolvidable. Bienvenido a Prive, tu oasis de placer y discreción</h1>
            </section>
          </div>
          <div className="col-8">
            <section>
              <div className="contenedor-slide">
                
                <Slide/>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
