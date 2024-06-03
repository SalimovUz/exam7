import React from "react";
import cart from "../../public/images/cart.svg";
import logo from "../../public/images/site-logo.svg";
import logout from "../../public/images/Logout.svg";
import search from "../../public/images/search.svg";
import { NavLink } from "react-router-dom";

const Header = ({tolqin}) => {

  return (
    <div className="header">
      <nav className="mx-auto z-10 max-w-7xl px-2 sm:px-6 lg:px-0 flex items-center justify-between border-solid border-b border-[#c4e2ca]">
        <div className="left">
          <img src={logo} alt="SiteLogo" />
        </div>

        <div className="center__nav flex items-center space-x-8">
          {["Home", "Shop", "Plant Care", "Blogs"].map((text) => (
            <NavLink
              key={text}
              className={({ isActive }) =>
                `py-5 ${
                  isActive
                    ? "border-b-[#46a358] border-b-[3px] font-semibold"
                    : "pb-[22px]"
                }`
              }
              to={`/${
                text === "Home" ? "" : text.toLowerCase().replace(" ", "")
              }`}
            >
              {text}
            </NavLink>
          ))}
        </div>

        <div className="right flex items-center space-x-6">
          <img src={search} alt="Search" />

          <div>
            <button className="cartnum absolute rounded-full w-4 h-4 p-1 justify-center ml-3 bg-[#46A358] text-white text-[10px] font-medium text-center flex items-center">
              0
            </button>
            <img src={cart} alt="Cart" />
          </div>

          <button
            onClick={()=> tolqin(eski => !eski)}
            className="flex items-center bg-[#46a358] text-white px-3 py-1 rounded"
          >
            <img src={logout} alt="Logout" className="mr-2" />
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
