import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RxImage } from "react-icons/rx";
import LogoutIcon from "@mui/icons-material/Logout";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { LuFileLineChart } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { MdDownloading } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const Accaunt = () => {
  const [page, setPage] = useState("Accaunt-details");
  return (
    <div className="flex mt-16 gap-8 mb-28">
      <div className="sidebar bg-[#FBFBFB] py-4 w-[310px] h-[450px]">
        <h1 className="text-[#3D3D3D] font-bold text-[18px] px-4">
          My Accaunt
        </h1>

        <div className="div py-4 flex flex-col gap-1">
          <button
            onClick={() => setPage("Accaunt-details")}
            className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold"
          >
            <FaRegUser />
            Personal Information
          </button>
          <button
            onClick={() => setPage("address")}
            className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold"
          >
            <IoLocationOutline />
            Address
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold">
            <BsCart3 />
            Orders
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold">
            <MdFavoriteBorder />
            Wishlist
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold">
            <LuFileLineChart />
            Reports
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold">
            <MdDownloading />
            Downloads
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#fff] w-full transition-all duration-300 hover:text-[#46A358] hover:border-l-4 border-l-4 border-solid hover:border-[#46A358] border-transparent pl-4 py-2 gap-2 hover:font-semibold">
            <IoWarningOutline />
            Support
          </button>
          <hr className="my-4" />

          <button className="text-[#46A358] text-[15px] font-bold pl-6">
            <LogoutIcon /> Logout
          </button>
        </div>
      </div>

      <form className="w-[70%]">
        {page === "Accaunt-details" && (
          <div className=" justify-center items-center w-full">
            <h1 className="text-[#3D3D3D] font-medium text-[16px]">
              Personal Information
            </h1>
            <form className="flex w-full gap-10">
              <div className="left w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    First Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Email address
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="email"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Username
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <h1 className="text-[#3D3D3D] font-medium text-[16px] mt-8">
                  Password change
                </h1>
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    FCurrent password
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="password"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    New password
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="password"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Confirm new password
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="password"
                  />
                </label>

                <button className="bg-[#46A358] w-1/3 my-8 text-white px-4 py-2 rounded-md text-[14px]">
                  Save Changes
                </button>
              </div>

              <div className="right w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    First Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Phone Number
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <div className="flex gap-2 w-full">
                    <select className="border rounded-md border-[#EAEAEA] p-2">
                      <option value="uzb">+998</option>
                    </select>
                    <input
                      className="border rounded-md border-[#EAEAEA] p-2 w-full"
                      type="text"
                    />
                  </div>
                </label>

                <label className="flex flex-col mt-4" htmlFor="photo">
                  <h1>Photo</h1>

                  <div className="flex gap-4">
                    <RxImage className="rounded-full border bg-[#EAEAEA] p-2 h-10 w-10 text-[#46A358]" />

                    <button className="px-4 py-1 text-white text-[14px] font-semibold bg-[#46A358] rounded-lg">
                      Change
                    </button>
                    <button className="text-[#3D3D3D] text-[14px] font-normal">
                      Remove
                    </button>
                  </div>
                </label>
              </div>
            </form>
          </div>
        )}

        {page === "address" && (
          <div className=" justify-center items-center w-full">
            <div className="w-full justify-between flex ">
              <div>
                <h1 className="text-[#3D3D3D] font-medium text-[16px]">
                  Billing Address
                </h1>
                <p className="text-[#727272] text-[14px] font-normal mt-2">
                  The following addresses will be used on the checkout page by
                  default.
                </p>
              </div>

              <h2 className="text-[#46A358] text-[16px] font-medium">Add</h2>
            </div>

            <form className="flex w-full gap-10">
              <div className="left w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    First Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Country / Region
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <select
                    className="border rounded-md border-[#EAEAEA] p-2"
                    name=""
                    id=""
                  >
                    <option
                      className="text-[#A5A5A5] text-[14px]"
                      value="Country"
                      disabled
                      selected
                      hidden
                    >
                      Select a country / region
                    </option>
                    <option value="Country">Qashqadaryo</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Street Address
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    State
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <select
                    className="border rounded-md border-[#EAEAEA] p-2"
                    name=""
                    id=""
                  >
                    <option
                      className="text-[#A5A5A5] text-[14px]"
                      value="Country"
                      disabled
                      selected
                      hidden
                    >
                      Select a state
                    </option>
                    <option value="Country">Chiroqchi</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2" htmlFor="email">
                  <h1>
                    Email address
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="email"
                  />
                </label>

                <button className="bg-[#46A358] w-1/3 my-8 text-white px-4 py-2 text-[14px] rounded-md">
                  Save Changes
                </button>
              </div>

              <div className="right w-1/2 flex flex-col gap-2">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Last Name{" "}
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Town / City
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2 mt-10" htmlFor="name">
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Zip
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <input
                    className="border rounded-md border-[#EAEAEA] p-2"
                    type="text"
                  />
                </label>

                <label className="flex flex-col gap-2" htmlFor="name">
                  <h1>
                    Phone Number
                    <span className="text-[#F03800] text-[22px] font-normal">
                      *
                    </span>
                  </h1>
                  <div className="flex gap-2 w-full">
                    <select className="border rounded-md border-[#EAEAEA] p-2">
                      <option value="uzb">+998</option>
                    </select>
                    <input
                      className="border rounded-md border-[#EAEAEA] p-2 w-full"
                      type="text"
                    />
                  </div>
                </label>
              </div>
            </form>

            <div className="flex w-full justify-between">
              <div>
                <h1 className="text-[#3D3D3D] text-[17px] font-medium">
                  Shipping Address
                </h1>
                <p className="text-[#727272] text-[14px] font-normal">
                  You have not set up this type of address yet.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <label className="gap-2 flex" htmlFor="">
                  <input
                    className="border-[#46A358]"
                    type="radio"
                    name=""
                    id=""
                  />
                  <h1 className="text-[#3D3D3D] text-[14px] font-normal">
                    Same as billing address
                  </h1>
                </label>

                <h2 className="text-[#46A358] text-[16px] font-medium">Add</h2>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Accaunt;
