import React from "react";
import HoverRating from "../../components/HoverRating";
import Footer from "../../components/Footer";

const Shop = () => {
  return (
    <div>
      <h1 className="text-[#3D3D3D] font-bold text-[15px] lg:mt-8">
        Home / <span className="font-normal ">Shop</span>
      </h1>

      <div className="comingItems">
        <div className="left flex">
          <div className="four flex flex-col"></div>
          <img src="" alt="" />
        </div>

        <div className="right justify-between w-1/2">
          <h1 className="text-[#3D3D3D] text-[28px] font-bold">Flower Name</h1>

          <div className="flex">
            <h2>Price</h2>

            <HoverRating />
          </div>

          <div>
            <h3>Short Description:</h3>

            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
