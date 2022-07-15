import Apartment from "../../components/Apartments";
import NavMenu from "../../shared/layouts/NavMenu";
import List from "../../components/List";
import Subscribe from "../../components/Subscribe";
import Footer from "../../shared/layouts/Footer";
export default function Listing() {
  return (
    <>
      <NavMenu />
      <List />
      <Apartment />
      <Subscribe />
      <Footer />
    </>
  );
}
