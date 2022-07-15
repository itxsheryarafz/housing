import "./assets/styles/main.css";
import Everyone from "./components/Everyone";
import Excersice from "./components/Excersice";
import Exchange from "./components/Exchange";
import Feed from "./components/Feed";
import Founders from "./components/Founders";
import Heropannel from "./components/Heropannel";
import News from "./components/News";
import Offering from "./components/Offering";
import Subscribe from "./components/Subscribe";
import Footer from "./shared/layouts/Footer";
import NavMenu from "./shared/layouts/NavMenu";
import Home from "./views/home/home";
import Social from "./components/Social";
// import { Routes, Route } from "react-router-dom";
import Properities from "./components/Properties";
import Realtors from "./components/Realtors";
import USHX from "./components/USHX";
import Investor from "./components/Social";
import HomeRouters from "./Routes";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Listing from "./views/list/listing";
import Detail from "./views/detail/detail";
import Address from "./components/Address";
import Agent from "./components/Agent";
import HouseGallery from "./components/HouseGallery";
import Gallery from "./components/Gallery";
import ApartmentGallery from "./components/ApartmentGallery";
function App() {
  return (
    <div className="App">
      <>
        {/* <BrowserRouter> */}

        {/* <HomeRouters /> */}
        {/* <Listing /> */}
        {/* <Listing /> */}
        {/* </BrowserRouter> */}

        {/* <Detail /> */}
        {/* <Address /> */}
        {/* <HouseGallery /> */}
        {/* <Agent /> */}

        <Detail />

        {/* <Gallery /> */}
        {/* <ApartmentGallery /> */}
      </>
    </div>
  );
}

export default App;
