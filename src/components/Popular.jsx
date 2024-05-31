import React from "react";
import one from "../../public/images/popular1.svg";
import two from "../../public/images/popular2.svg";
import { FaLongArrowAltRight } from "react-icons/fa";


const Popular = () => {
  return (
    <div className="flex justify-between w-full lg:mt-16 gap-8">
      <div className="left flex w-1/2 border rounded-lg p-4 shadow-lg">
        <img className="bg-transparent" src={one} alt="" />
        <div className="text-end flex flex-col gap-6 items-end justify-center ">
          <h1 className="text-2xl font-bold">Summer cactus & succulents</h1>
          <p className="text-gray-500">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>

          <button className=" items-center bg-[#46A358] text-white rounded-lg px-5 py-2 gap-2 flex">
            Find more
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="left flex w-1/2 border rounded-lg p-4 shadow-lg">
        <img className="bg-transparent" src={two} alt="" />
        <div className="text-end flex flex-col gap-6 items-end justify-center ">
          <h1 className="text-2xl font-bold">Styling Trends & much more</h1>
          <p className="text-gray-500">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>

          <button className=" items-center bg-[#46A358] text-white rounded-lg px-5 py-2 gap-2 flex">
            Find more
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
