import SectionCard from "../molecules/SectionCards"



import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/bannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent"



const index = () => {
  return (
    <main>
     <Nav/>
     <BannerHome/>
     <SectionCard/>
     <Carrousel/>
     <Footer/>
    </main>
  );
};

export default index;