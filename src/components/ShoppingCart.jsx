import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShopCarousel from "./ShopCarousel";
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  const calculateItemTotal = (price, quantity) => {
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      return 0;
    }
    return parsedPrice * quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + calculateItemTotal(item.price, item.quantity),
      0
    );
  };

  const totalPrice = calculateTotalPrice();
  const shippingCost = 16.0;
  const grandTotal = totalPrice + shippingCost;

  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cart, totalPrice, shippingCost, grandTotal },
    });
  };


  return (
    <div className="ShopCard">
      <div className="lg:px-8 mt-8">
        <nav className="mb-4 text-sm">
          <div>
            <NavLink className="text-[#3D3D3D] font-bold text-[15px]" to="/">
              Home
            </NavLink>{" "}
            / <NavLink to="/shop">Shop</NavLink> /{" "}
            <NavLink to="/cart">Shopping Cart</NavLink>
          </div>
        </nav>
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
                        className="w-20 h-20 object-cover rounded-md"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">SKU: {item.SKU}</p>
                        <p className="text-lg font-medium">
                          {(item.price)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-2 text-lg">{item.quantity}</span>
                      <button
                        className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-4 text-gray-500 hover:text-red-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                    <p className="text-lg font-medium">
                      $
                      {calculateItemTotal(item.price, item.quantity).toFixed(2)}
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
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Coupon Discount</span>
                  <span>(-) 00.00</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium mb-4">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded-md"
                  onClick={handleCheckout}
                >
                  Proceed To Checkout
                </button>
                <NavLink to="/">
                  <button className="w-full bg-transparent text-green-500 py-2 rounded-md mt-2">
                    Continue Shopping
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
      <ShopCarousel />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
