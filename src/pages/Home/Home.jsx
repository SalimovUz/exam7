import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import RangeSlider from "../../components/RangeSlider";
import flower from "../../../public/images/Super Sale Banner.svg";
import { data } from "../../data/data";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import cart from "../../../public/images/cart-card.svg";
import like from "../../../public/images/heart 1.svg";
import search from "../../../public/images/searching.svg";
import Popular from "../../components/Popular";
import Blog from "../../components/Blog";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

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
            <ul className="cate left  flex space-x-4">
              <NavLink
                className="border-b-2 border-[#46a358] text-[#46a358] text-[15px] font-semibold"
                to="/"
              >
                All Plants
              </NavLink>
              <NavLink className=" text-[#3D3D3D] text-[15px]" to="/">
                New Arrivals
              </NavLink>
              <NavLink className=" text-[#3D3D3D] text-[15px]" to="/">
                Sale
              </NavLink>
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

          <div className="data">
            <div className="flowers flex flex-wrap w-full justify-between gap-8 mt-8">
              {currentPageData.map((flower) => (
                <div
                  className="w-[30%] shadow-md main-card cursor-pointer border-t-2 border-transparent transition-all duration-300 hover:border-t-2 hover:border-[#46a358]"
                  key={flower.id}
                >
                  <div className="p-6 w-full border">
                    <img
                      className="w-full h-48 object-cover"
                      src={flower.image}
                      alt={flower.name}
                    />

                    <div className="hovver flex relative gap-4 justify-center opacity-0">
                      <img
                        onClick={addtocartnum}
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
                  <p className="mt-2 text-[16px] font-normal text-[#3D3D3D]">
                    {flower.name}
                  </p>
                  <h2 className="text-[18px] font-bold text-[#46a358]">
                    {flower.price}
                  </h2>
                </div>
              ))}
            </div>
            <ReactPaginate
              className="flex justify-end mt-16"
              previousLabel={
                currentPage === 0 ? null : (
                  <FontAwesomeIcon icon={faChevronLeft} />
                )
              }
              nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination flex justify-center mt-8"}
              pageClassName={"mx-1"}
              pageLinkClassName={
                "px-3 py-0 border rounded hover:bg-[#46a358] hover:text-white transition-colors"
              }
              previousLinkClassName={
                "px-3 py-0 border rounded hover:bg-[#46a358] hover:text-white transition-colors border-none"
              }
              nextLinkClassName={
                "px-3 py-0 border rounded hover:bg-[#46a358] hover:text-white transition-colors border-none"
              }
              activeClassName={"bg-[#46a358] text-white scale-125"}
            />
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
