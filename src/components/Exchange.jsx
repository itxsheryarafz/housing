import { code } from "../utils/images";
import { yellow } from "../utils/images";
import { orange } from "../utils/images";
export default function Exchange() {
  return (
    <section className="exchange-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="exchnage-txt">
              <p>US HOUSING</p>
              <h2>EXCHANGE TOKEN</h2>
            </div>
            <div className="line"></div>
            <div className="exchange-p">
              <p>
                We will have a bank of our own exchange platform and the pool of
                people paying the $100 worth of crypto will be used to buy back
                tokens and the monthly difference will be put into marketing,
                site development, staff, and operations, new enhancements
              </p>
              <div className="exchange-btn">
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="exchange-images">
              <div class="boxe">
                <img src={code} alt=""></img>
              </div>
              <div className="boxes">
                <img src={yellow} alt=""></img>
                <img src={orange} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
