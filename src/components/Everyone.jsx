import { couple } from "../utils/images";
import { smallhouse } from "../utils/images";
import { house } from "../utils/images";
import { man } from "../utils/images";
export default function Everyone() {
  return (
    <section>
      <div className="container">
        <div className="everyone-txt">
          <p>Bringing Everyone Together Where</p>
          <h2>EVERYONE WINS</h2>
          <div className="feed-line">
            <div className="line"></div>
          </div>
        </div>

        <div className="row everyone-row">
          <div className="col-sm-12 col-lg-3 col-md-6 col-xl-3">
            <div className="card card-box">
              <img
                src={couple}
                className="card-image-top card-image"
                alt=""
              ></img>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>BUYERS</h3>
                </div>
                <div className="card-text">
                  <p>
                    Tired of paying rent and someone else's mortgage? Let us buy
                    a house for you even if you have bad credit!{" "}
                  </p>
                  <button>GET ACCESS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6 col-xl-3">
            <div className="card card-box">
              <img
                src={house}
                className="card-image-top card-image"
                alt=""
              ></img>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>BUYERS</h3>
                </div>
                <div className="card-text">
                  <p>
                    Tired of paying rent and someone else's mortgage? Let us buy
                    a house for you even if you have bad credit!{" "}
                  </p>
                  <button>GET ACCESS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6 col-xl-3">
            <div className="card card-box">
              <img
                src={smallhouse}
                className="card-image-top card-image"
                alt=""
              ></img>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>BUYERS</h3>
                </div>
                <div className="card-text">
                  <p>
                    Tired of paying rent and someone else's mortgage? Let us buy
                    a house for you even if you have bad credit!{" "}
                  </p>
                  <button>GET ACCESS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6 col-xl-3">
            <div className="card card-box">
              <img
                src={man}
                className="card-image-top  card-image"
                alt=""
              ></img>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>BUYERS</h3>
                </div>
                <div className="card-text">
                  <p>
                    Tired of paying rent and someone else's mortgage? Let us buy
                    a house for you even if you have bad credit!{" "}
                  </p>
                  <button>GET ACCESS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
