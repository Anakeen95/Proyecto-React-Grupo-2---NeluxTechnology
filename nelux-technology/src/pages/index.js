import SectionCard from "../molecules/SectionCards"
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent"



const index = () => {
  return (
    <main>
      <Nav />
      <section id="Home"><BannerHome /></section>
      <section id="Products"><SectionCard /></section>
      <section id="Gallery"><Carrousel /></section>
      <section id="Contact"><Footer /></section>
      {/* <section id="Cart"></section> */} // Aca agregar el componente del Carrito para que este vinculado a la Nav
    </main>
  );
};

export default index;