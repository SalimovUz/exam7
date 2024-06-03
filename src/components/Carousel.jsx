import React from "react";
import bigFlower from "../../public/images/big.svg";
import smallFlower from "../../public/images/small.svg";
import { useState } from "react";


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    {
      title: "Welcome to greenshop",
      heading: "Let's make a better planet",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
      button: "Shop now",
    },
    {
      title: "Discover new plants",
      heading: "Find your perfect plant",
      description:
        "Explore our collection of rare and exotic plants that will add a touch of greenery to your space.",
      button: "Explore now",
    },
    {
      title: "Join our community",
      heading: "Connect with plant lovers",
      description:
        "Be a part of our community and share your passion for plants with like-minded individuals.",
      button: "Join now",
    },
  ];

  return (
    <div className="relative z-[-1] w-full h-[450px] bg-[#fafafa] py-12 px-8 mt-4">
      <div className="carousel flex overflow-hidden">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`flex-none w-full transition-transform duration-500 z-0 ${
              activeIndex === index ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex z-0">
              <div className="left w-1/2 flex flex-col items-start">
                <h3 className="font-medium text-[14px] tracking-widest">
                  {page.title}
                </h3>
                <h1 className="font-extrabold text-[#3D3D3D] text-[70px] uppercase leading-[70px] mt-4">
                  {page.heading.split(" ").map((word, i) => (
                    <span key={i} className={i === 4 ? "text-[#46a358]" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                <p className="text-[#727272] font-normal text-[14px] mt-4">
                  {page.description}
                </p>
                <button className="text-white mt-10 rounded-md bg-[#46a358] font-semibold px-6 py-2">
                  {page.button}
                </button>
              </div>
              <div className="right relative flex">
                <img
                  className="h-32 absolute mt-64 ml-32"
                  src={smallFlower}
                  alt=""
                />
                <img
                  className="h-[480px] relative ml-24 bottom-16"
                  src={bigFlower}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-[#46a358]" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
