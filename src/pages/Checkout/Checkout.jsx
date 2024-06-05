import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import payment from "../../../public/images/payment.svg";
import "tailwindcss/tailwind.css";
import Footer from "../../components/Footer";
import "../../App.css"

// Generate a random order number
const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000);

const Checkout = () => {
  const location = useLocation();
  const { cart, totalPrice, shippingCost, grandTotal } = location.state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber] = useState(generateOrderNumber());
  const [paymentMethod, setPaymentMethod] = useState("");
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="checkout-page">
      <div className="container mx-auto mt-8">
        <nav className="mb-4 text-sm">
          <div>
            <NavLink className="text-[#3D3D3D] font-bold text-[15px]" to="/">
              Home
            </NavLink>{" "}
            / <NavLink to="/shop">Shop</NavLink> /{" "}
            <NavLink to="/checkout">Checkout</NavLink>
          </div>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
            <form className="flex w-full gap-10">
              <div className="left w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    First Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Country / Region
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <select
                    className="border rounded-md border-[#EAEAEA] p-2"
                    name=""
                    id=""
                  >
                    <option
                      className="text-[#A5A5A5] text-[14px]"
                      value="Country"
                      disabled
                      selected
                      hidden
                    >
                      Select a country / region
                    </option>
                    <option value="Country">Qashqadaryo</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Street Address
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    State
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <select
                    className="border rounded-md border-[#EAEAEA] p-2"
                    name=""
                    id=""
                  >
                    <option
                      className="text-[#A5A5A5] text-[14px]"
                      value="Country"
                      disabled
                      selected
                      hidden
                    >
                      Select a state
                    </option>
                    <option value="Country">Chiroqchi</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2" htmlFor="email">
                  <h1>
                    Email address
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="email"
                  />
                </label>
                <label className="flex gap-2" htmlFor="radio">
                  <input type="radio" name="" id="" />
                  <h1>Ship to a different address?</h1>
                </label>

                <label htmlFor="area">
                  <h1>Order notes (optional)</h1>
                  <fieldset>
                    <textarea
                      className="border rounded-md border-[#EAEAEA] p-2"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </fieldset>
                </label>
              </div>

              <div className="right w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Last Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Town / City
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2 mt-10" htmlFor="name">
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Zip
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Phone Number
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <div className="flex gap-2 w-full">
                    <select className="border rounded-md border-[#EAEAEA] p-2">
                      <option value="uzb">+998</option>
                    </select>
                    <input
                      className="border rounded-md border-[#EAEAEA] p-2 w-full"
                      type="text"
                    />
                  </div>
                </label>
              </div>
            </form>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="border rounded-lg p-4 shadow-md">
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4 flex items-center gap-6">
                        <div>
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-gray-500 text-sm">
                            SKU: {item.SKU}
                          </p>
                        </div>
                        <p>(x {item.quantity})</p>
                      </div>
                    </div>
                    <p className="text-lg font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
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
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium mb-4">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="flex flex-col mb-4">
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment-method"
                    value="paypal"
                    className="mr-2"
                    onChange={() => setPaymentMethod("PayPal")}
                  />
                  <img src={payment} alt="" />
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment-method"
                    value="bank-transfer"
                    className="mr-2"
                    onChange={() => setPaymentMethod("Direct bank transfer")}
                  />
                  Direct bank transfer
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment-method"
                    value="cod"
                    className="mr-2"
                    onChange={() => setPaymentMethod("Cash on delivery")}
                  />
                  Cash on delivery
                </label>
              </div>
              <button
                className="w-full bg-green-500 text-white py-2 rounded-md"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50]">
          <div className="bg-white rounded-lg p-8 max-w-lg mx-auto animate-fadeIn">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-500">Thank You</h2>
                <p className="text-gray-700">Your order has been received</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Order Number: {orderNumber}</p>
              <p className="text-gray-700">Date: {today}</p>
              <p className="text-gray-700">Total: ${grandTotal.toFixed(2)}</p>
              <p className="text-gray-700">Payment Method: {paymentMethod}</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Products</th>
                    <th className="text-left">Qty</th>
                    <th className="text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md mr-4"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-gray-500 text-sm">
                              SKU: {item.SKU}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2">x{item.quantity}</td>
                      <td className="py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Your order is currently being processed. You will receive an
                order confirmation email shortly with the expected delivery date
                for your items.
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
              >
                Track your order
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
