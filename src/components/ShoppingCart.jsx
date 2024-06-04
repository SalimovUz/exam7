import React from "react";
// import { CartContext } from "../context/CartContext"; // Import CartContext

const ShoppingCart = () => {
  // const { cartItems } = useContext(CartContext); // Use CartContext

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex justify-between mb-2">
            <span>Products</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{item.quantity}</span>
              <span>{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
