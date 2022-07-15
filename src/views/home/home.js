import NavMenu from "../../shared/layouts/NavMenu";
import Heropannel from "../../components/Heropannel";
import Everyone from "../../components/Everyone";
import Feed from "../../components/Feed";
import Offering from "../../components/Offering";
import Exchange from "../../components/Exchange";
import Excersice from "../../components/Excersice";
import News from "../../components/News";
import Subscribe from "../../components/Subscribe";
import Footer from "../../shared/layouts/Footer";
export default function Home() {
  return (
    <>
      <NavMenu />
      <Heropannel />
      <Everyone />
      <Feed />
      <Offering />
      <Exchange />
      <Excersice />
      <News />
      <Subscribe />
      <Footer />
    </>
  );
}
