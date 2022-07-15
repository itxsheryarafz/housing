import { renthouse } from "../utils/images";
import ReactStars from "react-stars";
import { bed } from "../utils/images";
import { square } from "../utils/images";
import { tub } from "../utils/images";

export default function Apartment() {
  const apartments = [
    {
      image: renthouse,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: renthouse,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: renthouse,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: renthouse,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
  ];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section>
      <div className="container">
        <div className="apartment-title">
          <h3>APARTMENTS</h3>
          <div className="line"></div>

          <p>11700 washington street, new york, USA</p>
        </div>

        <div className="row">
          {apartments.map((data, index) => (
            <div className="col-sm-12 col-lg-6 col-md-6">
              <div className="rent-houses">
                <img src={renthouse} alt=""></img>
                <div className="card">
                  <div className="card-body">
                    <div className="card-p">
                      <p>{data.starting}</p>
                    </div>
                    <div className="card-title card-t">
                      <h3>{data.title}</h3>
                    </div>
                    <div className="card-text card-txt">
                      <p>{data.text}</p>
                      <a href="#">{data.address}</a>
                    </div>

                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#D7524D"}
                    />
                    <div className="icons">
                      <img src={bed} alt=""></img> <div>{data.bed}</div>
                      <img src={square} alt=""></img>
                      <div> {data.area}</div>
                      <img src={tub} alt=""></img> <div>{data.washroom}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
