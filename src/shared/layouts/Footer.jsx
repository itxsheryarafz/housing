import { Ulogo } from "../../utils/images";
import { facebook } from "../../utils/images";
import { google } from "../../utils/images";
import { appstore } from "../../utils/images";
import { twitter } from "../../utils/images";
import { linkdin } from "../../utils/images";
import { insta } from "../../utils/images";
export default function Footer() {
  const tag = [
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#home",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
    {
      hashtag: "#realstate",
    },
  ];
  return (
    <section className="footer-1">
      <div className="container">
        <div className="row footer-row">
          <div className="col-lg-3 col-sm-12 col-md-12">
            <div className="footer-logo">
              <img src={Ulogo} alt=""></img>
            </div>
            <div className="footer-p">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo dapibus fermentum.
              </p>
            </div>
            <div className="footer-txt">
              <p>
                PHONE NO: <span>042 (4567) 85423</span>
              </p>
              <p>
                EMAIL: <span>ushx@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="col-4 col-md-3 col-lg-2">
            <div className="footer-list">
              <h5>SITE MENU</h5>

              <div className="footer-li">
                <ul>
                  <li>Social Media</li>
                  <li>Properities</li>
                  <li>USHX Token</li>
                  <li>Realtors</li>
                  <li>Investors</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <div className="footer-list">
              <h5>SITE MENU</h5>

              <div className="footer-li">
                <ul>
                  <li>Social Media</li>
                  <li>Properities</li>
                  <li>USHX Token</li>
                  <li>Realtors</li>
                  <li>Investors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 col-lg-2">
            <div className="footer-list">
              <h5>SITE MENU</h5>
              <div className="footer-li">
                <ul>
                  <li>Social Media</li>
                  <li>Properities</li>
                  <li>USHX Token</li>
                  <li>Realtors</li>
                  <li>Investors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12 col-md-12">
            <div className="footer-list">
              <h5>TAGS</h5>
            </div>
            <div className="footer-tags">
              {tag.map((items) => (
                <div className="tags-all">{items.hashtag}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="row sc align-items-center mt-3">
          <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
            <div className="icons-social">
              <img src={facebook} alt=""></img>
              <img src={linkdin} alt=""></img>
              <img src={twitter} alt=""></img>
              <img src={insta} alt=""></img>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 justify-content-end align-items-center footer-col">
            <div className="">
              <div className="download-icons">
                <h4>Download Application Now: </h4>{" "}
                <div className="icons-download">
                  <img src={google} alt=""></img>
                  <img src={appstore} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
