import { couple, house, man, smallhouse } from "../utils/images";
export default function Founders() {
  return (
    <section className="founder-section">
      <container>
        <div className="row">
          <div className="col-6">
            <div className="founders-text">
              <span style={{ color: "#7FB3E0" }}>FOUNDERS GROUP FOR</span>
              <h2>USHX</h2>
            </div>

            <h2>Benefits</h2>
            <ul>
              <li>Access to the exercise app</li>
              <li>
                $100 worth of USHX monthly out of your work outs Reserved space
                even when you temprorarly falls out of good standing
              </li>
              <li>
                Life Style 2.0 perks (included) get list Founders group members
                can cash out through the exchange minimum $1000
              </li>
            </ul>

            <h3>Members Statistics:</h3>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img src={couple} alt=""></img>
              </div>
              <div className="col-6">
                <img src={house} alt=""></img>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={smallhouse} alt=""></img>
              </div>
              <div className="col-6">
                <img src={man} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  );
}
