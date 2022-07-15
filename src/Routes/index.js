import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "../views/home/home";
import Social from "../components/Social";
import Properities from "../components/Properties";
import Investor from "../components/Investors";
import USHX from "../components/USHX";
import Realtors from "../components/Realtors";
export default function HomeRouters() {
  const routes = [
    {
      path: "/",
      name: "Home",
      page: <Home />,
    },
    {
      path: "/social",
      name: "Social",
      page: <Social />,
    },
    {
      path: "/properties",
      name: "properties",
      page: <Properities />,
    },
    {
      path: "/investors",
      name: "Investors",
      page: <Investor />,
    },
    {
      path: "/uhx-token",
      name: "Social",
      page: <USHX />,
    },
    {
      path: "/realtors",
      name: "Realtors",
      page: <Realtors />,
    },
  ];
  return (
    <>
      <Router>
        <Switch>
          {routes.map((data, index) => (
            <Route key={index} exact path={data.path} children={data.page} />
          ))}
        </Switch>
      </Router>
      {/* <Route path="/" element={<Home />}></Route>
        <Route path="/social" element={<Social></Social>}></Route>
        <Route path="/properties" element={<Properities />}></Route>
        <Route path="/investors" element={<Investor />}></Route>
        <Route path="/uhx-token" element={<USHX />}></Route>
        <Route path="/realtors" element={<Realtors />}></Route> */}
    </>
  );
}
