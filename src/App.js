import "./App.css";
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
function App() {
  return (
    <div className="App">
      <NavMenu />
      <Heropannel />
      <Everyone />
      <Feed />
      <Offering />
      <Exchange />
      <Excersice />
      <News />
      <Subscribe />
      <Footer></Footer>
    </div>
  );
}

export default App;
