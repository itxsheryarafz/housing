import { boximg } from "../utils/images";
import { dots } from "../utils/images";
import { img } from "../utils/images";
export default function Heropannel() {
  return (
    <section className="hero-banner">
      <container>
        <div className="row row-bg">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="market-text">
              <h2>Marketplace for buyers,sellers,investors, and contractors</h2>
              <div class="line"></div>

              <h5>
                Largest Social media platform that creates Real Estate deals in
                realtime!{" "}
              </h5>
              <button>GET HELP</button>
            </div>
          </div>
          <div className="col-6 col-sm-12 col-md-6 d-none d-md-block">
            <div class="">
              <img src={img} alt=""></img>
            </div>
          </div>
        </div>
      </container>
    </section>
  );
}
