import React from "react";
import banner from "../img/banner.jpg";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PortraitCard = () => {
  return (
    <>
      <div className="W-full mt-10">
        <div className="">
          <Link to="/Blog">
            <div className="h-[200px] overflow-hidden rounded-[4px]">
              <img
                src={banner}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                alt=""
              />
            </div>
          </Link>
          <div className="mt-5">
            <Link to="/Blog">
              <h1 className="text-2xl font-bold mb-2 hover:text-[#418160]">
                Google just showed us the Future of the game.
              </h1>
            </Link>
            <p className="mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <h1>K.p.s Memorial High School</h1>
              <p>20 Mar 2024</p>
            </div>
            <div className="cursor-pointer">
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortraitCard;
