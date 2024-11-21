import React from "react";

const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center p-6 sm:p-8 lg:p-10 w-full max-w-xs md:max-w-md lg:max-w-lg transition-transform transform hover:scale-105 mx-auto">
      <figure className="bg-gray-300 rounded-full p-4">
        <img 
          src={iconSrc} 
          alt={title} 
          className="w-16 h-16 bg-black rounded-full p-2 object-contain" 
        />
      </figure>
      <article className="text-center">
        <h1 className="font-poppins text-md font-bold leading-7 sm:text-xl lg:text-md">{title}</h1>
        <p className="font-poppins text-sm sm:text-base lg:text-lg text-gray-600">{description}</p>
      </article>
    </div>
  );
};

export default ServiceCard;
