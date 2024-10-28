import BillingDetail from "../Components/BillingDetail";
import Button from "../Components/Button";
import { useCartContext } from "../context/provider";

const Checkout = () => {
  const { cartData, cartPrice } = useCartContext();

  return (
    <div className=" flex flex-col   items-center gap-2 sm:gap-48 md:flex-row ">
      <div className="">
        <BillingDetail />
      </div>
      <div className="p-6 rounded-md w-full  md:w-96">
        <h2 className="text-xl font-bold ">Your Order</h2>
        <table className="w-full border-separate border-spacing-y-6">
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span>{item.title.substring(0, 14)}</span>
                </td>
                <td className="text-right">${Math.round(item.price)}</td>
              </tr>
            ))}

            <tr className="border-t">
              <td className="font-semibold">Subtotal:</td>
              <td className="text-right">${Math.round(cartPrice)}</td>
            </tr>

            <tr>
              <td className="font-semibold">Shipping:</td>
              <td className="text-right">Free</td>
            </tr>

            <tr className="border-t font-bold">
              <td>Total:</td>
              <td className="text-right">${Math.round(cartPrice)}</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="py-2 px-4 border border-gray-500 rounded-sm"
                />
              </td>
              <td>
                <Button
                  text="Apply Coupon"
                  variant="default"
                  className="text-sm py-3  "
                />
              </td>
            </tr>
            <tr>
              <Button text="Place Order" variant="default" className="px-7 text-sm py-3"/>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkout;
