import React from "react";
import ImagGrid from "../Components/ImagGrid";
import OurHeading from "./OurHeading";

const NewArrivals = () => {
  return (
    <div>
      <OurHeading text="Featured" heading="New Arrival" />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-12">
        {/* Large Item Spanning Two Rows */}
        <div className="lg:row-span-2 lg:col-span-2 col-span-2">
          <ImagGrid
            imgSrc="/Featurs/PlayStation.svg"
            title="PlayStation 5"
            description="Black white version of the PS5 coming out on sale."
          />
        </div>
        
        {/* Single Items */}
        <div className="col-span-2 md:col-span-1">
          <ImagGrid
            imgSrc="/Featurs/Woman.svg"
            title="Woman's Collections"
            description="Explore new fashion collections."
          />
        </div>
        
        {/* Grid of Smaller Items */}
        <div className="grid  gap-3 col-span-2 md:col-span-2 lg:col-span-1">
          <ImagGrid
            imgSrc="/Featurs/Speaker.svg"
            title="Speakers"
            description="High-quality sound for your entertainment."
          />
          <ImagGrid
            imgSrc="/Featurs/Perfume.svg"
            title="Perfume"
            description="Luxury fragrances for every occasion."
          />
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
