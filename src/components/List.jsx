import NavMenu from "../shared/layouts/NavMenu";
import { useState } from "react";
import Select from "react-select";
import { facebook, money, property, rooms } from "../utils/images";
import { location } from "../utils/images";

export default function List() {
  const options = [
    { value: "Moveable", label: "Moveable" },
    { value: "Public", label: "Public" },
    { value: "Private", label: "Private" },
  ];

  function handlecolumns() {}

  const [selectedOption, setSelectedOption] = useState(null);
  const [show, setshow] = useState(true);
  return (
    <section>
      <div className="container">
        <div className="listing-title">
          <h2>LISTING</h2>
          <div className="row">
            <div className="col-3">
              <div className="selection">
                <span>
                  <img src={property} alt=""></img>
                </span>
                <select name="property">
                  <option value="" disabled selected hidden>
                    Property Type
                  </option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="selection">
                <span>
                  <img src={location} alt=""></img>
                </span>
                <select placeholder="Property Type" name="property">
                  <option value="" disabled selected hidden>
                    LocatioN
                  </option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="selection">
                <span>
                  <img src={money} alt=""></img>
                </span>
                <select placeholder="Property Type" name="property">
                  <option value="" disabled selected hidden>
                    Price
                  </option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="selection">
                <span>
                  <img src={rooms} alt=""></img>
                </span>
                <select placeholder="Property Type" name="property">
                  <option value="" disabled selected hidden className="ml-10">
                    Rooms
                  </option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                  <option value="Moveable">Movable</option>
                </select>
              </div>
            </div>
          </div>
          {show ? (
            <div className="row">
              <div className="col-3">
                <div className="selection">
                  <span>
                    <img src={rooms} alt=""></img>
                  </span>
                  <select placeholder="Property Type" name="property">
                    <option value="" disabled selected hidden className="ml-10">
                      Rooms
                    </option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <div className="selection">
                  <span>
                    <img src={rooms} alt=""></img>
                  </span>
                  <select placeholder="Property Type" name="property">
                    <option value="" disabled selected hidden className="ml-10">
                      Rooms
                    </option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <div className="selection">
                  <span>
                    <img src={rooms} alt=""></img>
                  </span>
                  <select placeholder="Property Type" name="property">
                    <option value="" disabled selected hidden className="ml-10">
                      Rooms
                    </option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <div className="selection">
                  <span>
                    <img src={rooms} alt=""></img>
                  </span>
                  <select placeholder="Property Type" name="property">
                    <option value="" disabled selected hidden className="ml-10">
                      Rooms
                    </option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                    <option value="Moveable">Movable</option>
                  </select>
                </div>
              </div>
            </div>
          ) : null}

          <div className="view-more-btn">
            <button onClick={() => setshow(!show)}>
              {!show ? "View More" : "Show less"}
            </button>
            <a className="view-more"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
