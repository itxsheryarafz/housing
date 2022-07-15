import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renthouse, sofa } from "../utils/images";
import ReactStars from "react-stars";
import { bed } from "../utils/images";
import { square } from "../utils/images";
import { tub } from "../utils/images";
import { arrow } from "../utils/images";
import { rarrow } from "../utils/images";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
export default function ApartmentGallery() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="arrow" onClick={onClick}>
        <div class="angle-right">
          <FaAngleRight />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="rarrow" onClick={onClick}>
        <div className="angle-left">
          <FaAngleLeft />
        </div>
      </div>
    );
  }

  const apartments = [
    {
      image: sofa,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: sofa,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: sofa,
      title: "Michal Jhone Home",
      starting: "Starting From $1000",
      text: "Utilize our revolutionary construction management system to earn consistent jobs through our USHX mobile app!",
      address: "11700 washington street, new york, USA",
      bed: 2,
      area: "2561 sq ft",
      washroom: 2,
    },
    {
      image: sofa,
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
        <div className="slider-appartment">
          <Slider {...settings}>
            {apartments.map((data, index) => (
              <div>
                <div className="card card-appartment">
                  <div className="card-img-top img-top">
                    <img src={data.image} alt=""></img>
                  </div>
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
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
