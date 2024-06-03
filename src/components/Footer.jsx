import React from "react";
import round from "../../public/images/round.svg";
import cactustop from "../../public/images/cactustop.svg";
import cactusbottom from "../../public/images/cactusbottom.svg";
import logo from "../../public/images/logo-navbar.svg";
import location from "../../public/images/Location.svg";
import message from "../../public/images/Message.svg";
import call from "../../public/images/Calling.svg";
import facebook from "../../public/images/Facebook.svg";
import linkedin from "../../public/images/Linkedin.svg";
import twitter from "../../public/images/Twitter.svg";
import union from "../../public/images/Union.svg";
import instagram from "../../public/images/Instagram.svg";
import master from "../../public/images/MasterCard_Logo.svg.png";
import amerecan from "../../public/images/american.png";

const Footer = () => {
  return (
    <div className="z-[-1]">
      <footer className="lg:mt-32 bg-[#FBFBFB] mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 z-[-1]">
        <div className="top p-6 flex gap-8 z-[-5]">
          <div className="card relative w-1/5 flex flex-col space-y-2 border-solid border-r-2 border-[#46A3581A]">
            <div className="relative">
              <img className="mt-6 absolute z-[-1]" src={round} alt="" />
              <img className="ml-6 z-[-1]" src={cactustop} alt="" />
              <img className="ml-6 z-[-1]" src={cactusbottom} alt="" />
            </div>
            <h1 className="text-[#3D3D3D] text-[17px] font-bold">
              Garden Care
            </h1>
            <p className="font-normal text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="card relative w-1/5 flex flex-col space-y-2 border-solid border-r-2 border-[#46A3581A]">
            <div className="relative">
              <img className="mt-6 absolute" src={round} alt="" />
              <img className="ml-6" src={cactustop} alt="" />
              <img className="ml-6" src={cactusbottom} alt="" />
            </div>
            <h1 className="text-[#3D3D3D] text-[17px] font-bold">
              Garden Care
            </h1>
            <p className="font-normal text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="card relative w-1/5 flex flex-col space-y-2 ">
            <div className="relative">
              <img className="mt-6 absolute" src={round} alt="" />
              <img className="ml-6" src={cactustop} alt="" />
              <img className="ml-6" src={cactusbottom} alt="" />
            </div>
            <h1 className="text-[#3D3D3D] text-[17px] font-bold">
              Garden Care
            </h1>
            <p className="font-normal text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <form className="flex flex-col gap-8 w-[30%]">
            <h1 className="text-[#3D3D3D] text-[18px] font-bold">
              Would you like to join newsletters?
            </h1>

            <label htmlFor="email flex bg-[#FFFFFF] w-full ">
              <input
                className="bg-[#FFFFFF] h-full px-3 rounded-tl-lg rounded-bl-lg w-[75%] border-none outline-none"
                type="email"
                placeholder="enter your email address..."
              />
              <button className="text-white bg-[#46A358] px-5 py-2 rounded-tr-lg rounded-br-lg">
                Join
              </button>
            </label>

            <p className="text-[#727272] font-normal text-[13px]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </form>
        </div>

        <div className="center bg-[#46A3581A] px-6 py-7 flex items-center lg:gap-20">
          <img src={logo} alt="" />

          <a href="#" className="flex items-center gap-2">
            <img src={location} alt="" />
            <p className="text-[#3D3D3D] text-[14px] font-normal">
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </a>

          <a
            href="mailto:salimofftolqin7@gmail.com"
            className="flex items-center gap-2"
          >
            <img src={message} alt="" />
            <p className="text-[#3D3D3D] text-[14px] font-normal">
              contact@greenshop.com
            </p>
          </a>

          <a href="tel:+998777777777" className="flex items-center gap-2">
            <img src={call} alt="" />
            <p className="text-[#3D3D3D] text-[14px] font-normal">
              +88 01911 717 490
            </p>
          </a>
        </div>

        <div className="bottom flex py-7 px-6 gap-4">
          <div className="accaunt flex flex-col gap-4 w-1/5">
            <h1 className="text-[#3D3D3D] font-bold text-[18px]">My Accaunt</h1>

            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              My Accaunt
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Our Stores
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Contact Us
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Career
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Specials
            </a>
          </div>

          <div className="accaunt flex flex-col gap-4 w-1/5">
            <h1 className="text-[#3D3D3D] font-bold text-[18px]">
              Help & Guide
            </h1>

            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Help Center
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              How to Buy
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Shipping & Delivery
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Product Policy
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              How to Return
            </a>
          </div>

          <div className="accaunt flex flex-col gap-4  w-1/5">
            <h1 className="text-[#3D3D3D] font-bold text-[18px]">Categories</h1>

            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              House Plants
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Potter Plants
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Seeds
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Small Plants
            </a>
            <a
              className="font-normal text-[14px] text-[#3D3D3D] hover:text-black hover:font-medium transition-all duration-300"
              href="#"
            >
              Accessories
            </a>
          </div>

          <div className="social__media">
            <h1 className="text-[#3D3D3D] font-bold text-[18px]">
              Social Media
            </h1>

            <div className="social-media-logos flex items-center gap-3 mt-5">
              <img
                className="border rounded-md h-8 w-8 p-[6px] border-[#46A35833]"
                src={facebook}
                alt=""
              />
              <img
                className="border rounded-md h-8 w-8 p-[6px] border-[#46A35833]"
                src={instagram}
                alt=""
              />
              <img
                className="border rounded-md h-8 w-8 p-[6px] border-[#46A35833]"
                src={twitter}
                alt=""
              />
              <img
                className="border rounded-md h-8 w-8 p-[6px] border-[#46A35833]"
                src={linkedin}
                alt=""
              />
              <img
                className="border rounded-md h-8 w-8 p-[6px] border-[#46A35833]"
                src={union}
                alt=""
              />
            </div>

            <h1 className="text-[#3D3D3D] font-bold text-[18px] mt-8">
              We accept
            </h1>

            <div className="flex items-center gap-3">
              <a href="#">
                <img
                  className="h-9 w-19 object-fill cursor-pointer"
                  src="https://pngimg.com/d/paypal_PNG1.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-19 object-fill cursor-pointer"
                  src={master}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-19 object-fill cursor-pointer"
                  src="https://cdn.worldvectorlogo.com/logos/visa.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-19 object-fill cursor-pointer"
                  src={amerecan}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <p className="text-center text-[#3D3D3D] my-8 text-[14px] font-normal">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
