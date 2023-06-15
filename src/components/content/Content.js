import Slide from "./Slide";

function Content() {
  return (
    <div className="Content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <section>

            </section>
          </div>
          <div className="col-8">
            <section>
              <Slide/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
