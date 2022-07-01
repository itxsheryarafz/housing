import { renthouse } from "../utils/images";
import ReactStars from "react-stars";
import { bed } from "../utils/images";
import { tub } from "../utils/images";
import { square } from "../utils/images";

export default function Feed() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section>
      <div className="container">
        <div className="everyone-txt">
          <h2>LATEST FEED</h2>
          <div className="feed-line">
            <div className="line"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-md-6">
            <div className="rent-houses">
              <img src={renthouse} alt=""></img>
              <div className="card">
                <div className="card-body">
                  <div className="card-p">
                    <p>Starting from $1000</p>
                  </div>
                  <div className="card-title card-t">
                    <h3>Michael Jhone Home</h3>
                  </div>
                  <div className="card-text card-txt">
                    <p>
                      Utilize our revolutionary construction management system
                      to earn consistent jobs through our USHX mobile app!
                    </p>
                  </div>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#D7524D"}
                  />
                  <div className="icons">
                    <img src={bed} alt=""></img> 2
                    <img src={square} alt=""></img> 2561 sq ft
                    <img src={tub} alt=""></img> 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-6">
            <div className="rent-houses">
              <img src={renthouse} alt=""></img>
              <div className="card">
                <div className="card-body">
                  <div className="card-p">
                    <p>Starting from $1000</p>
                  </div>
                  <div className="card-title card-t">
                    <h3>Michael Jhone Home</h3>
                  </div>
                  <div className="card-text card-txt">
                    <p>
                      Utilize our revolutionary construction management system
                      to earn consistent jobs through our USHX mobile app!
                    </p>
                  </div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#D7524D"}
                  />
                  <div className="icons">
                    <img src={bed} alt=""></img> 2
                    <img src={square} alt=""></img> 2561 sq ft
                    <img src={tub} alt=""></img> 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-6">
            <div className="rent-houses">
              <img src={renthouse} alt=""></img>
              <div className="card">
                <div className="card-body">
                  <div className="card-p">
                    <p>Starting from $1000</p>
                  </div>
                  <div className="card-title card-t">
                    <h3>Michael Jhone Home</h3>
                  </div>
                  <div className="card-text card-txt">
                    <p>
                      Utilize our revolutionary construction management system
                      to earn consistent jobs through our USHX mobile app!
                    </p>
                  </div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#D7524D"}
                  />
                  <div className="icons">
                    <img src={bed} alt=""></img> 2
                    <img src={square} alt=""></img> 2561 sq ft
                    <img src={tub} alt=""></img> 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-6">
            <div className="rent-houses">
              <img src={renthouse} alt=""></img>
              <div className="card">
                <div className="card-body">
                  <div className="card-p">
                    <p>Starting from $1000</p>
                  </div>
                  <div className="card-title card-t">
                    <h3>Michael Jhone Home</h3>
                  </div>
                  <div className="card-text card-txt">
                    <p>
                      Utilize our revolutionary construction management system
                      to earn consistent jobs through our USHX mobile app!
                    </p>
                  </div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#D7524D"}
                  />
                  <div className="icons">
                    <img src={bed} alt=""></img> 2
                    <img src={square} alt=""></img> 2561 sq ft
                    <img src={tub} alt=""></img> 2
                  </div>
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
