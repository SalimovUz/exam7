import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/data"; // Adjust the import path as needed
import HoverRating from "./HoverRating";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";

const FlowerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFlower, setSelectedFlower] = useState(
    data.find((f) => f.id === id)
  );

  const handleImageClick = (flowerId) => {
    const newFlower = data.find((f) => f.id === flowerId);
    setSelectedFlower(newFlower);
    navigate(`/shop/flower/${flowerId}`);
  };

  const randomFlowers = data.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="py-4 flex gap-8">
      <div className="flex flex-col gap-[18px] ">
        {randomFlowers.map((flower) => (
          <img
            key={flower.id}
            className={`w-24 h-24 bg-[#FBFBFB] shadow-lg border object-cover cursor-pointer ${
              flower.id === selectedFlower.id ? "border-2 border-green-500" : ""
            }`}
            src={flower.image}
            alt={flower.name}
            onClick={() => handleImageClick(flower.id)}
          />
        ))}
      </div>

      <div className="flex gap-20">
        <img
          className="shadow-lg border rounded-[6px] h-[440px] w-[440px] object-cover"
          src={selectedFlower.image}
          alt={selectedFlower.name}
        />
        <div>
          <h1 className="text-3xl font-bold text-[#46a358] mt-6">
            {selectedFlower.name}
          </h1>
          <div className="flex justify-between border-b-2">
            <h2 className="text-xl text-gray-700 mt-2">
              {selectedFlower.price}
            </h2>
            <HoverRating />
          </div>
          <div className="mt-4">
            <h1 className="text-[#3D3D3D] text-[15px] font-medium">
              Short Description:
            </h1>
            <p className="text-gray-600">{selectedFlower.desc}</p>
            <div className="flex items-center mt-6">
              <span className="text-lg font-bold mr-4">Size:</span>
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="p-1 h-[30px] w-[30px] text-[14px] border border-gray-300 rounded-full mx-1 hover:bg-gray-200 hover:border-[#46A358]"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center mt-6">
              <button className="bg-[#46a358] text-white px-6 py-2 rounded hover:bg-green-700">
                BUY NOW
              </button>
              <button className="bg-white border border-[#46a358] text-[#46a358] px-6 py-2 rounded ml-4 hover:bg-gray-100">
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-[15px] font-normal text-[#adabab]">
                SKU:{" "}
                <span className="text-[#727272] text-[15px] font-normal">
                  {selectedFlower.SKU}
                </span>
              </h1>
              <h1 className="text-[15px] font-normal text-[#adabab]">
                Categories:{" "}
                <span className="text-[#727272] text-[15px] font-normal">
                  {selectedFlower.category}
                </span>
              </h1>
              <h1 className="text-[15px] font-normal text-[#adabab]">
                Tags:{" "}
                <span className="text-[#727272] text-[15px] font-normal">
                  {selectedFlower.tags}
                </span>
              </h1>
            </div>

            <div className="flex mt-4 gap-4 items-center">
              <h1 className="text-[#3D3D3D] text-[15px] font-medium">
                Share this products:
              </h1>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <MdOutlineForwardToInbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
