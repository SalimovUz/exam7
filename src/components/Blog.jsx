import React from "react";
import { blogdata } from "../data/blogposts";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="lg:mt-24">
      <h1 className="text-center text-[30px] font-bold">Our Blog Posts</h1>
      <p className="text-[#727272] text-center text-[14px] font-normal">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.{" "}
      </p>

      <div className="cards flex mt-8 gap-8">
        {blogdata.map((data) => (
          <div key={data.id} className="card w-1/4 bg-[#FBFBFB]">
            <img className="w-full" src={data.image} alt={data.title} />
            <div className="card-content px-4 py-3 flex flex-col gap-2">
              <p className="card-description text-[#46A358] font-medium text-[14px]">
                {data.day}
              </p>
              <h2 className="card-title font-bold text-[20px] text-[#3D3D3D]">
                {data.title}
              </h2>
              <p className="card-description text-[#727272] text-[14px] font-normal">
                {data.desc}
              </p>

              <button className="flex gap-2 items-center text-[#3D3D3D] text-[14px] font-medium">
                Read More
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
