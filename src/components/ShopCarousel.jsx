import React, { useState } from "react";
import { data } from "../data/data";
import "tailwindcss/tailwind.css";
import cart from "../../public/images/cart-card.svg";
import like from "../../public/images/heart 1.svg";
import search from "../../public/images/searching.svg";
import "../App.css";
import { NavLink } from "react-router-dom";

const TOTAL_PAGES = 3;
const ITEMS_PER_PAGE = Math.ceil(data.length / TOTAL_PAGES);

const ShopCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  const currentItems = data.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="relative w-full">
      <h1 className="text-[#46A358] text-[17px] font-bold py-4 pt-20">
        Releted Products
      </h1>
      <hr className="py-4" />
      <div className="flex overflow-hidden">
        {currentItems.map((item) => (
          <NavLink
            className="flex-shrink-0"
            to={`/shop/flower/${item.id}`}
          >
            <div key={item.id} className="w-full flex-shrink-0 p-4">
              <div className="p-4 w-full shadow-md main-card">
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="hovver flex relative gap-4 justify-center opacity-0">
                  <img
                    className="bg-[#fafafa] px-2 py-2 rounded-lg"
                    src={cart}
                    alt=""
                  />
                  <img
                    className="bu bg-[#fafafa] px-2 py-2 rounded-lg"
                    src={like}
                    alt=""
                  />
                  <img
                    className="bg-[#fafafa] px-2 py-2 rounded-lg"
                    src={search}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <p className="mt-2 text-[16px] font-normal text-[#3D3D3D]">
                  {item.name}
                </p>
                <h2 className="text-[18px] font-bold text-[#46a358]">
                  {item.price}
                </h2>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              index === currentPage
                ? "bg-[#46A358]"
                : "border-[#46A358] border-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ShopCarousel;
