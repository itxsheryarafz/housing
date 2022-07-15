import { couple } from "../utils/images";
import { house } from "../utils/images";
import { smallhouse } from "../utils/images";
export default function News() {
  return (
    <section>
      <div className="container">
        <div className="everyone-txt">
          <h2>NEWS AND UPDATE</h2>
          <div className="feed-line">
            <div className="line"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="card card-box2">
              <div className="card-image-top">
                <img src={couple} alt=""></img>
              </div>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>An Ugly Myspace Profile Will Sure</h3>
                </div>
                <div className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="card card-box2">
              <div className="card-image-top">
                <img src={house} alt=""></img>
              </div>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3>An Ugly Myspace Profile Will Sure</h3>
                </div>
                <div className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="card card-box2">
              <div className="card-image-top">
                <img src={smallhouse} alt=""></img>
              </div>
              <div className="card-body card-bg">
                <div className="card-title">
                  <h3> An Ugly Myspace Profile Will Sure</h3>
                </div>
                <div className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feed-btn">
          <button>VIEW MORE</button>
        </div>
      </div>
    </section>
  );
}
