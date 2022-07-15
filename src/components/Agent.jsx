import { boy } from "../utils/images";

export default function Agent() {
  return (
    <section className="agent">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agent-title">
              <h2>FOR SALE BY AGENT</h2>
              <div className="grand-line"></div>
            </div>

            <div className="agent-detail">
              <img src={boy} alt=""></img>
              <div className="agent-text">
                <p>Aron Jenkies</p>

                <h5>LISTING DETAILS</h5>

                <p>Listed on 3:39 AM</p>

                <p>Property ID #59</p>
              </div>
            </div>

            <div className="contact-info">
              <h5>AGENT CONTACT INFO:</h5>
              <ul>
                <li>
                  <a href="#">Visit Agent Website</a>
                </li>
                <li>
                  <a href="#">Agent Other Listing</a>
                </li>
                <li>Phone No : 677789 1233</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="schedule">
              <div className="schedule-text">
                <h3>SCHEDULE A SHOWING</h3>
              </div>
              <form>
                <div className="agent-name">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control schedule-field"
                    name="name"
                    required
                  />
                </div>
                <div className="agent-name">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control schedule-field"
                    required
                  />
                </div>
                <div className="agent-name">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control schedule-field"
                    required
                  />
                </div>
                <div className="agent-name">
                  <label>Message</label>
                  <input
                    type="text"
                    name="message"
                    className="form-control schedule-field"
                    required
                  />
                </div>

                <div className="schedule-btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
