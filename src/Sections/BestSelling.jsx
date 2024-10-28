import React from "react";
import BestSellingCard from "../Components/BestSellingCard";
import { BestCellingItem } from "../Constant/Main";
import { generateRandomNumber } from "../hooks/utils";
import ProductHeading from "../Components/ProductHeading";

const BestCelling = () => {
  return (
    <section className="space-y-16 ">
      <ProductHeading text="This Month" heading="Best Celling product" button="View All"/>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        {BestCellingItem.map((item) => {
          const randomNumber = generateRandomNumber(1000);
          return (
            <div key={item.imgSrc}>
              <BestSellingCard {...item} price={randomNumber} />
            </div>
          );
        })}
        ;
      </div>
    </section>
  );
};

export default BestCelling;
