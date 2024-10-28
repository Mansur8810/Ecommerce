import ReactStars from "react-stars";
import { Heart, Eye } from "lucide-react";
import { useCartContext } from "../context/provider";
import toast from "react-hot-toast";

const ProductCard = ({ title, price, image, rating, discount, readMore }) => {
  const {cartData, setCartData, cartPrice, setCartPrice } = useCartContext();

  const handleAddToCart = () => {
    const newQuantity = 1; 
    const updatedCartData = [
      ...cartData,
      {
        image: image,
        title: title,
        price: price,
        quantity: newQuantity,
        subtotal: price * newQuantity,
      },
    ];
    setCartData(updatedCartData);
    setCartPrice(cartPrice + price * newQuantity);
    toast.success("Added to Cart!!")
  };

  return (
    <div className="flex flex-col space-y-2 items-center h-[25rem]">
      <div className="bg-gray-100 h-[20rem] w-52">
        <div className="flex items-start p-2 justify-between gap-3">
          <span className="btn btn-sm no-animation btn-primary text-white">
            - {discount}%
          </span>
          <div className="flex flex-col justify-between gap-2 p-2 items-end">
            <button className="">
              <Heart className="text-gray-600 hover:fill-primary hover:text-primary" />
            </button>
            <button className="">
              <Eye className="text-gray-600 hover:fill-primary hover:text-white" />
            </button>
          </div>
        </div>
        <figure className="mx-auto">
          <img
            src={image}
            width="150"
            height="160"
            alt={title}
            className="size-40 object-contain rounded-sm mix-blend-multiply m-auto"
          />
        </figure>
      </div>
      <article className="flex flex-col justify-between items-start">
        <h2 className="text-lg font-semibold">{title.substring(0, 20)}</h2>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg text-primary">${price}</h3>
          <h3 className="line-through text-neutral-content text-sm">
            ${parseInt(price) + 40}
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
          <p className="text-neutral-content text-sm">({rating.count})</p>
        </div>
        <div>
          <button
            className="btn btn-primary btn-circle text-white px-[14px] py-2 rounded-full"
            onClick={handleAddToCart}
          >
            +
          </button>
          <a href={readMore} target="_blank" className="btn btn-link ml-auto">
            Read more
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
