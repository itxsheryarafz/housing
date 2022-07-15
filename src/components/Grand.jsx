import { slocation } from "../utils/images";
export default function Grand() {
  const property = [
    {
      id: "AGS1234",
      size: "3000 Sqt",
      bedroom: 4,
      bathroom: 2,
    },
    {
      id: "AGS1234",
      size: "3000 Sqt",
      bedroom: 4,
      bathroom: 2,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grand-title">
          <h2>GRAND FAMILY HOUSE</h2>

          <div className="grand-line"></div>
          <div className="south-location">
            <img src={slocation} alt=""></img>
            <p>Ohio St. South Gate, California</p>
          </div>

          <h2>DISCRIPTION</h2>
          <div className="grand-line"></div>

          <div className="discription-text">
            <p>
              We will have a bank of our own exchange platform and the pool of
              people paying the $100 worth of crypto will be used to buy back
              tokens and the monthly difference will be put into marketing, site
              development, staff and operations, new enhancements.<br></br>
              <br></br>
              Odds will be tracked on what percentage of people will want to
              liquidate their tokens every $1000 so we can get aggressive with
              liquating the tokens.
            </p>
          </div>

          <h2>PROPERTY OVERVIEW</h2>
          <div className="grand-line"></div>
          {property.map((data, index) => (
            <div className="row">
              <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card property-card">
                  <div className="card-body">
                    <div className="card-title property-title">
                      <h4>PROPERTY ID</h4>
                      <p>{data.id}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card property-card">
                  <div className="card-body">
                    <div className="card-title property-title">
                      <h4>PROPERTY Size</h4>
                      <p>{data.size}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card property-card">
                  <div className="card-body">
                    <div className="card-title property-title">
                      <h4>BEDROOMS</h4>
                      <p>{data.bedroom}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card property-card">
                  <div className="card-body">
                    <div className="card-title property-title">
                      <h4>BATHROOMS</h4>
                      <p>{data.bathroom}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <h2>SPECIAL FEATURES</h2>
          <div className="grand-line"></div>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY ID</h4>
                    <p>AGS1234</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY Size</h4>
                    <p>3000 Sq Ft</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BEDROOMS</h4>
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BATHROOMS</h4>
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>AMENITIES</h2>
          <div className="grand-line"></div>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY ID</h4>
                    <p>AGS1234</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY Size</h4>
                    <p>3000 Sq Ft</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BEDROOMS</h4>
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BATHROOMS</h4>
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>BEDROOMS</h2>
          <div className="grand-line"></div>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY ID</h4>
                    <p>AGS1234</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>PROPERTY Size</h4>
                    <p>3000 Sq Ft</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BEDROOMS</h4>
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="card property-card">
                <div className="card-body">
                  <div className="card-title property-title">
                    <h4>BATHROOMS</h4>
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
