import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };
  render() {
    return (
      <section className="address">
        <div className="container">
          <div className="address-title">
            <h2>ADDRESS</h2>
            <div className="line"></div>
          </div>
          <div className="address-map">
            <Map
              google={this.props.google}
              style={{ width: "50%", height: "50%" }}
              initialCenter={{
                lat: 31.52037,
                lng: 74.358749,
              }}
            >
              <Marker
                onClick={() => this.handleToggleOpen()}
                name={"Current location"}
              />
              {this.state.isOpen && (
                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>Sheryar</div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9wQyY-guqNcBfCylmUV5s45bQQpbMAi8",
})(MapContainer);
