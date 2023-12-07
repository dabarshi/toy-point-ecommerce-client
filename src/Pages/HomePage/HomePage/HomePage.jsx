import Carousel from "../../../components/Carousel/Carousel";
// import DemoCarousel from "../../../components/DemoCarousel/DemoCarousel";
import LogoSpin from "../../../components/LogoSpin/LogoSpin";
import SubMenuBar from "../../../components/SubMenuBar/SubMenuBar";
import TrandingSection from "../TrandingSection/TrandingSection";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-container">
            <Carousel />
            {/* <DemoCarousel /> */}
            <LogoSpin />
            <TrandingSection />
            <SubMenuBar />
            <div style={{ height: '300px' }}>

            </div>
        </div>
    );
};

export default HomePage;