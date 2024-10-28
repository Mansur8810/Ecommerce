import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { ServicesItem } from "../Constant/Main";
const Service = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      {ServicesItem.map((item) => {
        return (
          <div key={item.description}>
            <ServiceCard {...item} />
          </div>
        );
      })}
      
    </div>
  );
};

export default Service;
