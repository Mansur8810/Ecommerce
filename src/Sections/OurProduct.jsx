import React from "react";
import OurProductCard from "../Components/OurProductCard";
import { Ousrproducts } from "../Constant/Main";
import { generateRandomNumber } from "../hooks/utils";
import OurHeading from "./OurHeading";
import Button from "../Components/Button";

const OurProduct = () => {
  return (
    <section>
      <div className="space-y-16 ">
        <OurHeading text="Our Products" heading="Explore Our Products" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {Ousrproducts.map((item) => {
            const randomNumber = generateRandomNumber(1000);
            return (
              <div key={item.imgSrc}>
                <OurProductCard {...item} price={randomNumber} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <Button
          text="View All Products"
          variant="default"
          className=" btn py-3 px-6  text-sm"
        />
      </div>
    </section>
  );
};

export default OurProduct;
