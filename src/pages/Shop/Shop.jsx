import React from "react";
import { useParams, NavLink } from "react-router-dom";
import HoverRating from "../../components/HoverRating";
import Footer from "../../components/Footer";
import ProductDescription from "../../components/ProductDescription";
import { data } from "../../data/data";
import NoneShop from "./NoneShop";
import FlowerDetail from "../../components/FlowerDetail";
import ShopCarousel from "../../components/ShopCarousel";

const Shop = () => {
  const { id } = useParams();
  const flower = data.find((f) => f.id === id);

  if (!id) {
    return (
      <div className="flex flex-col justify-center items-center">
        <NoneShop />
      </div>
    );
  }

  // if (!flower) {
  //   return <div>Flower not found</div>;
  // }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
      <h1 className="text-[#3D3D3D] font-bold text-[15px] lg:mt-8">
        <NavLink to="/">Home</NavLink> /{" "}
        <span className="font-normal ">Shop</span>
      </h1>

      {/* <div className="comingItems flex">
        <div className="left flex w-1/2">
          <img src={flower.image} alt={flower.name} className="w-full h-auto" />
        </div>

        <div className="right w-1/2 pl-8">
          <h1 className="text-[#3D3D3D] text-[28px] font-bold">
            {flower.name}
          </h1>

          <div className="flex items-center mt-4">
            <h2 className="text-xl font-semibold text-[#46a358] mr-4">
              {flower.price}
            </h2>
            <HoverRating />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Short Description:</h3>
            <p className="text-gray-600 mt-2">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>
          </div>
        </div>
      </div> */}

      <FlowerDetail />

      <ProductDescription />

      <ShopCarousel />

      <Footer />
    </div>
  );
};

export default Shop;
