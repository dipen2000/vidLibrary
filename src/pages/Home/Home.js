import { Navbar } from "../../components/Navbar/Navbar";
import { AsideNavbar } from "../../components/AsideNavbar/AsideNavbar";
import { VideosSection } from "../../components/VideosSection/VideosSection";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="grid-container">
          <AsideNavbar />
          <VideosSection />
        </div>
      </div>
    </>
  );
};

export { Home };
