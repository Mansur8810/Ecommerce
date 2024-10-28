import React from "react";
import Button from "./Button";

const ProductHeading = ({ heading, text, button,}) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className={`flex gap-3`}>
          <Button variant="default" className="h-12" />
          <h1 className="font-medium text-lg text-primary">{text}</h1>
        </div>
        <div className="my-4">
          <h1 className="tracking-wide font-poppins font-bold text-3xl">
            {heading}
          </h1>
        </div>
      </div>
      <button className="bg-primary h-10 px-9 py-2 rounded-sm text-white">
        {button}
      </button>
    </div>
  );
};

export default ProductHeading;
