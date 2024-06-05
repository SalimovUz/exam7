import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500">SKU: {item.id}</p>
                      <p className="text-lg">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 rounded px-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="bg-gray-200 rounded px-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                  <p className="text-lg font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <div className="border rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-medium mb-4">Cart Totals</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Coupon Discount</span>
                <span>(-) 00.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>$16.00</span>
              </div>
              <div className="flex justify-between text-lg font-medium mb-4">
                <span>Total</span>
                <span>${(totalPrice + 16).toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-md">
                Proceed To Checkout
              </button>
              <button className="w-full bg-transparent text-green-500 py-2 rounded-md mt-2">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
