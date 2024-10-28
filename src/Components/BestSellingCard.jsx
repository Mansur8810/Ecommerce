import { Heart, Eye } from "lucide-react";
import ReactStars from "react-stars";

const BestSellingCard = ({ imgSrc, ItemName, price, rating }) => {
  return (
      <div className="flex-col justify-between items-start space-y-3">
        <div className="bg-gray-100  h-[17rem] w-[17rem] ">
          <div className="flex flex-col  items-end">
            <button className="btn btn-circle btn-ghost">
              <Heart className="text-gray-600 hover:fill-primary hover:text-primary" />
            </button>
            <button className="btn btn-circle btn-ghost">
              <Eye className="text-gray-600  hover:fill-primary hover:text-white" />
            </button>
          </div>
          <figure className="w-40 mx-auto">
            <img src={imgSrc} />
          </figure>
        </div>
        <article className="flex flex-col justify-center items-start">
          <h1>{ItemName}</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-lg text-primary">${price}</h3>
            <h3 className="line-through text-neutral-content text-sm">
              ${Number(price) + 40}
            </h3>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ReactStars
              count={5}
              value={rating.rate}
              edit={false}
              size={24}
              color2={"#ffd700"}
            />
            <p className="font-medium text-gray-500">({rating.count})</p>
          </div>
        </article>
      </div>
  );
};

export default BestSellingCard;
