import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import RangeSlider from "../../components/RangeSlider";
import flower from "../../../public/images/Super Sale Banner.svg";
import { data } from "../../data/data";
import Popular from "../../components/Popular";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import FlowerList from "../../components/FlowerList";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("allplants");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const addtocartnum = () => {
    const cartnum = document.querySelector(".cartnum");
    cartnum.innerHTML = parseInt(cartnum.innerHTML) + 1;
  };

  return (
    <div className="heee">
      <Carousel />

      <main className="flex w-full mt-8 gap-12">
        <div className="sidebar w-[30%] bg-[#fbfbfb] py-4">
          <h1 className="font-bold px-4">Categories</h1>

          <div className="category p-4 px-8 flex flex-col space-y-3">
            <div className="flex justify-between ">
              <h4 className="text-[15px] text-[#46a358] font-bold">
                House Plants
              </h4>
              <h4 className="text-[15px] text-[#46a358] font-bold">(33)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Potter Plants</h4>
              <h4 className="font-normal text-[15px]">(12)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Seeds</h4>
              <h4 className="font-normal text-[15px]">(65)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Small Plants</h4>
              <h4 className="font-normal text-[15px]">(39)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Big Plants</h4>
              <h4 className="font-normal text-[15px]">(23)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Succulents</h4>
              <h4 className="font-normal text-[15px]">(17)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Trerrariums</h4>
              <h4 className="font-normal text-[15px]">(19)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Gardening</h4>
              <h4 className="font-normal text-[15px]">(13)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Accessories</h4>
              <h4 className="font-normal text-[15px]">(18)</h4>
            </div>
          </div>

          <h1 className="font-bold px-4">Price Range</h1>

          <div className="range">
            <RangeSlider />
            <button className="px-5 py-2 text-white bg-[#46a358] rounded-lg font-semibold mx-8 mt-4 tracking-wider">
              Filter
            </button>
          </div>

          <h1 className="font-bold px-4 mt-4">Size</h1>

          <div className="sizes px-8 space-y-2 mt-4">
            <div className="flex justify-between ">
              <h4 className="text-[15px]  font-normal">Small</h4>
              <h4 className="text-[15px]  font-normal">(119)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Medium</h4>
              <h4 className="font-normal text-[15px]">(86)</h4>
            </div>
            <div className="flex justify-between ">
              <h4 className="font-normal text-[15px]">Large</h4>
              <h4 className="font-normal text-[15px]">(78)</h4>
            </div>
          </div>

          <img
            className="mt-8 w-full object-fill"
            src={flower}
            alt="Super Sale Banner"
          />
        </div>

        <div className="section w-full">
          <div className="top flex items-center justify-between">
            {/* <ul className="cate left  flex space-x-4">
              <NavLink
                onClick={() => setCategory("allplants")}
                className="border-b-2 cursor-pointer border-[#46a358] text-[#46a358] text-[15px] font-semibold"
                to="/"
              >
                All Plants
              </NavLink>
              <NavLink
                onClick={() => setCategory("new")}
                className=" cursor-pointer text-[#3D3D3D] text-[15px]"
                to="/"
              >
                New Arrivals
              </NavLink>
              <NavLink
                onClick={() => setCategory("sale")}
                className=" cursor-pointer text-[#3D3D3D] text-[15px]"
                to="/"
              >
                Sale
              </NavLink>

              {category === "allplants" && (
                <FlowerList
                  flowers={data}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                  addtocartnum={addtocartnum}
                />
              )}
              {category === "new" && (
                <FlowerList
                  flowers={data}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                  addtocartnum={addtocartnum}
                />
              )}
              {category === "sale" && (
                <FlowerList
                  flowers={data}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                  addtocartnum={addtocartnum}
                />
              )}
            </ul> */}
            <ul className="cate left flex space-x-4">
              <li
                onClick={() => handleCategoryClick("allplants")}
                className={`cursor-pointer text-[15px] ${
                  activeCategory === "allplants"
                    ? "border-b-2 border-[#46a358] text-[#46a358] font-semibold"
                    : "text-[#3D3D3D]"
                }`}
              >
                All Plants
              </li>
              <li
                onClick={() => handleCategoryClick("new")}
                className={`cursor-pointer text-[15px] ${
                  activeCategory === "new"
                    ? "border-b-2 border-[#46a358] text-[#46a358] font-semibold"
                    : "text-[#3D3D3D]"
                }`}
              >
                New Arrivals
              </li>
              <li
                onClick={() => handleCategoryClick("sale")}
                className={`cursor-pointer text-[15px] ${
                  activeCategory === "sale"
                    ? "border-b-2 border-[#46a358] text-[#46a358] font-semibold"
                    : "text-[#3D3D3D]"
                }`}
              >
                Sale
              </li>
            </ul>
            <div className="right">
              <h3 className="text-gray-700">
                Sort by:
                <select
                  name="sort"
                  id="sort"
                  className="ml-2 border border-gray-300 rounded-md p-1 border-none"
                >
                  <option value="default">Default sorting</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="size">Size</option>
                </select>
              </h3>
            </div>
          </div>

          {/* <FlowerList
            flowers={data}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
            addtocartnum={addtocartnum}
          /> */}

          <div>
            {activeCategory === "allplants" && (
              <FlowerList
                flowers={data}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                addtocartnum={addtocartnum}
              />
            )}
            {activeCategory === "new" && (
              <FlowerList
                flowers={data}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                addtocartnum={addtocartnum}
              />
            )}
            {activeCategory === "sale" && (
              <FlowerList
                flowers={data}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                addtocartnum={addtocartnum}
              />
            )}
          </div>
        </div>
      </main>

      <Popular />
      <Blog />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
