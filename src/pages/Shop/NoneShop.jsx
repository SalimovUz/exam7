import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import ProductDescription from "../../components/ProductDescription";
import HoverRating from "../../components/HoverRating";
import { data } from "../../data/data";
import ShopCarousel from "../../components/ShopCarousel";

const NoneShop = () => {
  const { id } = useParams();
  const flower = data.find((f) => f.id === id);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <h1 className="text-[#3D3D3D] font-bold text-[15px] lg:mt-8">
          <NavLink to="/">Home</NavLink> /{" "}
          <span className="font-normal ">Shop</span>
        </h1>

        <h2 className="py-12 text-[15px] font-semibold opacity-80 text-center">
          Siz hali birorta hech narsa tanlamadiz, tanlash uchun pastdagi tugmani
          bosing
        </h2>

        <img className="w-[200px] h-[200px] flex mx-auto"
          src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
          alt=""
        />

        <NavLink
          to="/"
          className="bg-[#46a358] text-white px-4 py-2 rounded mb-20 inline-flex"
        >
          Go to shop
        </NavLink>

        <ProductDescription />

        <ShopCarousel />

        <Footer />
      </div>
    </div>
  );
};

export default NoneShop;
