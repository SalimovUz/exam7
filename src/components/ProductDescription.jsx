import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-20">
      <div className="border-b border-gray-300">
        <ul className="flex">
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === "description"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Product Description
          </li>
          <li
            className={`ml-4 cursor-pointer pb-2 ${
              activeTab === "reviews"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (19)
          </li>
        </ul>
      </div>
      {activeTab === "description" && (
        <div className="mt-4 text-gray-700 space-y-6">
          <p className="text-[#727272] font-normal text-[14px]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <p className="text-[#727272] font-normal text-[14px]">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
          <div>
            <h3 className="text-[#3D3D3D] text-[14px] font-bold">
              Living Room:
            </h3>
            <p className="font-normal text-[14px] text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-[#3D3D3D] text-[14px] font-bold">
              Dining Room:
            </h3>
            <p className="font-normal text-[14px] text-[#727272]">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
          </div>
          <div>
            <h3 className="text-[#3D3D3D] text-[14px] font-bold">Office:</h3>
            <p className="font-normal text-[14px] text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="mt-4 text-gray-700">
          <p>No reviews yet.</p>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
