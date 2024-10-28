import React from "react";
import { NavbarItems } from "../Constant/Main";
import { AlignLeft, Heart, Search, ShoppingCart } from "lucide-react";
import { useCartContext } from "../context/provider";

const Navbar = () => {
  const { cartData, cartPrice } = useCartContext();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignLeft />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a >Home</a>
            </li>
            <li>
              <a>About</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          Exclusive
        </a>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {NavbarItems.map((items) => (
            <li key={items.title} className="">
              <a href={items.href}>{items.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className=" md:block hidden mx-4">
          <label className="input input-bordered flex items-center">
            <input type="text" className="grow" placeholder="Search" />
            <Search />
          </label>
        </div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator flex space-x-3">
              <Heart className="size-6" strokeWidth={1.4} />
              <ShoppingCart />
              <span className="badge badge-sm indicator-item">
                {cartData?.length || 0}{" "}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-slate-700 z-50 mt-3 w-52 right-1 sm:w-64 lg:w-72 shadow backdrop-filter backdrop-blur-md bg-opacity-30"
          >
            <div className="card-body p-4 sm:p-6">  
              <span className="text-lg font-bold text-white">
                {cartData?.length || 0} Items
              </span>
              <span className="text-white mt-2 block">
                Subtotal: ${Math.round(cartPrice)}
              </span>
              <div className="card-actions mt-4">
                <a href="/cart" className="btn btn-primary btn-block">
                  View cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
