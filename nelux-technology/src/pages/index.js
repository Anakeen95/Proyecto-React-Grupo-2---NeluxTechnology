import SectionCard from "../molecules/SectionCards"
import BannerHome from "../organisms/Banner/bannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent"


const index = () => {
  return (
    <main>
     <BannerHome/>
     <SectionCard/>
     <Carrousel/>
    </main>
  );
};

export default index;