import { bbhouse, bhouse, kitchen } from "../utils/images";


export default function Grandpannel() {
  return (
    <section className="grandpannel-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="grandpannel-kitchen">
              <img src={kitchen} alt=""></img>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 d-none d-sm-block">
            <div className="row">
              <div className="col-6">
                <div className="grandpannel-img">
                  <img src={bbhouse} alt=""></img>
                </div>
              </div>
              <div className="col-6">
                <div className="grandpannel-img">
                  <img src={bbhouse} alt=""></img>
                </div>
              </div>
              <div className="col-6">
                <div className="grandpannel-img">
                  <img src={bbhouse} alt=""></img>
                </div>
              </div>
              <div className="col-6">
                <div className="grandpannel-img">
                  <img src={bbhouse} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
