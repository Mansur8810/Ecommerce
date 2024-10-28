import Categoreis from "./Components/Categoreis";
import CategoreisCard from "./Sections/CategoreisCard";
import Countdown from "./Components/Count";
import Sidebaar from "./Components/Sidebaar";
import Hero from "./Sections/Hero";
import Products from "./Sections/Products";
import "./Styles/index.css";
import BestCelling from "./Sections/BestSelling";
import EventBanner from "./Sections/EventBanner";
import OurProduct from "./Sections/OurProduct";
import NewArrivals from "./Sections/NewArrivals";
import Service from "./Sections/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex items-center">
        <div className=" flex-none">
          <Sidebaar />
        </div>
        <div className="flex-1">
          <Hero />
        </div>
      </div>
      <Countdown />
      <Products />
      <Categoreis />
      <CategoreisCard />
      <BestCelling />
      <EventBanner />
      <OurProduct />
      <NewArrivals />
      <Service />
    </>
  );
}

export default App;
