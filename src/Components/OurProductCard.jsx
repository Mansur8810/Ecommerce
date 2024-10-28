import React from 'react';
import ReactStars from "react-stars";
import { Heart, Eye } from 'lucide-react';

const OurProductCard = ({ imgSrc, ItemName, price, rating }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full max-w-xs mx-auto space-y-3 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="bg-gray-100 h-72 w-full relative flex items-center justify-center">
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <button className="btn btn-circle btn-ghost">
            <Heart className="text-gray-600 hover:fill-primary hover:text-primary transition" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <Eye className="text-gray-600 hover:fill-primary hover:text-white transition" />
          </button>
        </div>
        <img 
          src={imgSrc} 
          alt={ItemName} 
          className="object-contain h-full w-auto p-4" 
        />
      </div>
      <article className="flex flex-col justify-center items-start px-4 py-2">
        <h1 className="text-lg font-semibold truncate">{ItemName}</h1>
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-lg text-primary font-bold">${price}</h3>
          <div className="flex items-center gap-2">
            <ReactStars
              count={5}
              value={rating.rate}
              edit={false}
              size={24}
              color2={"#ffd700"}
            />
            <p className="font-medium text-gray-500">({rating.count})</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default OurProductCard;
