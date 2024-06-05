import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Checkout = () => {
  const { cart, totalPrice = 0, shippingCost = 0 } = useContext(CartContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    orderNotes: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Validation logic here
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.zip) newErrors.zip = "ZIP code is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form submitted", form);
      navigate("/order-success");
    }
  };

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const grandTotal = (totalPrice + shippingCost).toFixed(2);

  return (
    <div>
      {/* <Header /> */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={form.streetAddress}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.streetAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.streetAddress}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Order Notes
                </label>
                <textarea
                  name="orderNotes"
                  value={form.orderNotes}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md mx-auto"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className=" rounded-md">
              <div className="flex justify-between py-2">
                <h1>Products</h1>
                <h1>Subtotal</h1>
              </div>
              <hr  className="py-2"/>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-2 bg-gray-100 border items-center gap-2"
                >
                  <img className="h-[70px] w-[70px]" src={item.image} alt="" />
                  <div>
                    <span className="text-[14px]">
                      {item.name} x ({item.quantity})
                    </span>
                    <div className="">
                      <p className="text-gray-500 text-sm">SKU: {item.SKU}</p>
                    </div>
                  </div>
                  <span>
                    ${calculateItemTotal(item.price, item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="flex justify-between mt-4 border-t pt-4">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-4 border-t pt-4">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
