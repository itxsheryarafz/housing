import { appstore, google, video } from "../utils/images";

export default function Excersice() {
  return (
    <section className="exersice-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="exchnage-txt exchange-txt2">
              <p>GET PAID TO</p>
              <h2>EXCERSICE WITH UHSX</h2>
            </div>
            <div className="line"></div>

            <div className="exchange-p exchange-p2">
              <p>
                Just download the app, and start earning for the every calory
                your burn.<br></br> You also get access to tons of the exclusive
                offers and deals.<br></br>
                <br></br> You can use earning to get discounts or bank your cash
                to your Paypal account.<br></br> This is an exclusive offer to
                our member’s club to gain health and wealth as the same time.
              </p>
              <h4>Download Application Now</h4>
              <div className="icon-images">
                <img src={google} alt=""></img>
                <img src={appstore} alt=""></img>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="video-image">
              <img src={video} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
