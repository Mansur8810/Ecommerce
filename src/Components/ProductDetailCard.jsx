import React from "react";
import ReactStars from "react-stars";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/provider";
import toast from "react-hot-toast";

const ProductDetailCard = ({
  image,
  title,
  rating,
  price,
  description,
  subtotal,
}) => {
  const { cartData, setCartData, cartPrice, setCartPrice } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col md:flex-row justify-around items-start p-6 bg-white shadow-md rounded-lg my-20">
      <figure className="bg-slate-100 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-w-[400px] object-contain"
        />
      </figure>
      <article className=" lg:w-2/5 space-y-3">
        <h1 className="font-medium text-2xl ">{title.substring(0, 20)}</h1>
        <div className="flex items-center gap-2 ">
          <ReactStars
            count={5}
            value={rating.rate}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
          <p className="text-sm">({rating?.count})</p> |
          <p className="text-accent font-poppins">In Stock</p>
        </div>
        <h2 className="font-normal text-2xl text-gray-800 ">${price}</h2>
        <p className="text-gray-600">{description.substring(0, 96)}</p>
        <hr className="mb-4" />
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium">Colors:</span>
            <div className="flex gap-2 ml-2">
              <input
                type="radio"
                name="color"
                className="radio radio-primary"
              />
              <input
                type="radio"
                name="color"
                className="radio radio-primary"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <select className="select select-bordered max-w-xs md:max-w-[200px]">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <button
                className="border px-3 py-1 text-xl"
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <button className="border px-7 py-[6px]">{quantity}</button>
              <button
                className="border px-3 py-1 text-xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <a href="/cart">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const updatedCartData = [
                    ...cartData,
                    {
                      image,
                      title,
                      price,
                      quantity,
                      subtotal: price * quantity,
                    },
                  ];
                  setCartData(updatedCartData);
                  setCartPrice(cartPrice + price * quantity);
                  toast.success("Added to Cart!!")
                }}
              >
                Buy Now
              </button>
            </a>
            <img
              src="/Productdetail/heart.svg"
              alt="heart"
              className="border border-gray-500 rounded-md px-2 py-2"
            />
          </div>
          <div className="">
            <div className="flex justify-start gap-3 border border-gray-500 items-center p-3 rounded-md">
              <img src="/Productdetail/delivery.svg" alt="delivery" />
              <article className="space-y-1">
                <h3 className="font-medium">Free Delivery</h3>
                <p className="text-gray-600">
                  Enter your postal code for Delivery Availability
                </p>
              </article>
            </div>
            <div className="flex justify-start gap-3 border border-gray-500 items-center p-3 rounded-md">
              <img src="/Productdetail/return.svg" alt="return" />
              <article className="space-y-1">
                <h3 className="font-medium">Return Delivery</h3>
                <p className="text-gray-600">
                  Free 30 Days Delivery Returns. Details
                </p>
              </article>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductDetailCard;
