import toast from "react-hot-toast";
import Button from "../Components/Button";
import { useCartContext } from "../context/provider";
import { Trash } from "lucide-react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartData, setCartData, cartPrice, setCartPrice } = useCartContext();

  const handleRemoveItem = (index) => {
    const updatedCartData = [...cartData];
    const itemToRemove = updatedCartData[index];

    setCartPrice(cartPrice - itemToRemove.price * itemToRemove.quantity);
    updatedCartData.splice(index, 1);
    setCartData(updatedCartData);
    toast.success(itemToRemove.title + " has been removed from Cart!!")
  };

  const handleClearCart = () => {
    setCartData([]); 
    setCartPrice(0);
    toast.success("No items left in the cart")
  };

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6">
      <h1 className="text-3xl font-semibold mb-6 text-center sm:text-left">Your Cart</h1>

      {cartData.length === 0 ? (
        <center>
          <img src="/illustrations/empty.svg" alt="empty-cart" className="object-contain size-2/3" />
        <p>Your cart is empty</p>
        <a href="/" className="btn btn-link text-primary capitalize"> Start shopping from here!!!</a>
        </center>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full hidden sm:table">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {cartData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-contain rounded-sm"
                    />
                  </td>
                  <td className="w-40">{item.title.substring(0, 17)}</td>
                  <td className="text-lg">${Math.round(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>${Math.round(item.price * item.quantity)}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="hover:text-red-500"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="sm:hidden space-y-4">
            {cartData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 border p-4 rounded-lg bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain rounded-sm"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title.substring(0, 17)}</h3>
                    <p className="text-sm">${Math.round(item.price)}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500"
                  >
                    <Trash />
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>Quantity: {item.quantity}</span>
                  <span>Subtotal: ${Math.round(item.price * item.quantity)}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleClearCart}
            className="btn btn-danger w-full sm:w-auto float-right mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-6 sm:space-y-0">
  
        <div className="flex items-center gap-4 w-full sm:w-auto flex-wrap">
          <input
            type="text"
            placeholder="Coupon code"
            className="px-6 py-2 border border-gray-600 w-full sm:w-auto"
          />
          <Button
            text="Apply Coupon"
            className="text-sm py-3 px-4 w-full sm:w-auto flex items-center justify-center"
            variant="default"
          />
        </div>


        <div className="border border-gray-500 p-6 w-full sm:w-auto space-y-4 rounded-md">
          <h1 className="font-semibold text-lg">Cart Total</h1>

          <div className="text-sm flex justify-between items-center">
            <span className="font-medium">Subtotal:</span>
            <span>${(cartPrice || 0).toFixed(2)}</span>
          </div>

          <div className="text-sm flex justify-between items-center">
            <span className="font-medium">Total:</span>
            <span>${(cartPrice || 0).toFixed(2)}</span>
          </div>

          <div>
            <NavLink to="/checkout">
              <button className="btn btn-primary w-full sm:w-auto text-white mt-4">
                Proceed to Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
