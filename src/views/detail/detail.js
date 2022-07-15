import Address from "../../components/Address";
import Agent from "../../components/Agent";
import ApartmentGallery from "../../components/ApartmentGallery";
import Gallery from "../../components/Gallery";
import Grand from "../../components/Grand";
import Grandpannel from "../../components/Grandpannel";
import Subscribe from "../../components/Subscribe";
import Footer from "../../shared/layouts/Footer";
import NavMenu from "../../shared/layouts/NavMenu";

export default function Detail() {
  return (
    <>
      <NavMenu />
      <Grandpannel />
      <Grand />
      <Gallery />
      <ApartmentGallery />
      <Agent />
      <Subscribe />
      <Footer />
    </>
  );
}
