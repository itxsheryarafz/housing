import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bhouse, household, newhouse, rarrow, whouse } from "../utils/images";
import { arrow } from "../utils/images";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
export default function Gallery() {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  return (
    <section>
      <div className="container">
        <div className="grand-title">
          <h2>GALLERY</h2>
          <div className="grand-line"></div>
        </div>
        <Slider {...settings}>
          <div>
            <img src={household} alt=""></img>
          </div>
          <div>
            <img src={bhouse} alt=""></img>
          </div>
          <div>
            <img src={whouse} alt=""></img>
          </div>
          <div>
            <img src={whouse} alt=""></img>
          </div>
        </Slider>
      </div>
    </section>
  );
}
