import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import cart from "../../public/images/cart-card.svg";
import like from "../../public/images/heart 1.svg";
import search from "../../public/images/searching.svg";
import { CartContext } from "../context/CartContext";

const FlowerList = ({ flowers }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 9;
  const offset = currentPage * itemsPerPage;
  const currentPageData = flowers.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(flowers.length / itemsPerPage);
  const { addToCart } = useContext(CartContext); 

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleAddToCartClick = (flower) => {
    addToCart(flower); 
    const cartNum = document.querySelector(".cartnum");
    cartNum.innerHTML = parseInt(cartNum.innerHTML) + 1;
  };

  return (
    <div className="data">
      <div className="flowers flex flex-wrap  w-full justify-between gap-8 mt-8">
        {currentPageData.map((flower) => (
          <NavLink
            key={flower.id}
            className="w-[30%] shadow-md main-card cursor-pointer border-t-2 border-transparent transition-all duration-300 hover:border-t-2 hover:border-[#46a358]"
          >
            <div className="p-6 w-full border">
              <NavLink to={`/shop/flower/${flower.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={flower.image}
                  alt={flower.name}
                />
              </NavLink>
              <div className="hovver flex relative gap-4 justify-center opacity-0">
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCartClick(flower);
                  }}
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
            <div className="px-4">
              <p className="mt-2 text-[16px] font-normal text-[#3D3D3D]">
                {flower.name}
              </p>
              <h2 className="text-[18px] font-bold text-[#46a358]">
                {flower.price}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
      <ReactPaginate
        className="flex justify-end mt-16"
        previousLabel={
          currentPage === 0 ? null : <FontAwesomeIcon icon={faChevronLeft} />
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
  );
};

export default FlowerList;
