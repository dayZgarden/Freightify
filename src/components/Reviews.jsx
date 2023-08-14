import React from "react";
import { FcGoogle } from "react-icons/fc";
import ReviewBox from "./ReviewBox.jsx";
import StarRating from "./StarRating.jsx";


const Reviews = () => {
  return (
    <div className="overflow-x-hidden text-white min-h-[100vh] relative p-12 pt-24 w-full font-serif">
      <div className="max-w-[86rem] mx-auto">
        <div className="flex flex-col items-center justify-center space-x-8 py-8 md:py-16">
          <h1 className="text-[#D98D4F] font-black text-[1.75rem] font-sans">
            Affiliations
          </h1>
          <h2 className="mt-4 text-[2.25rem] w-[60%] mx-auto text-center leading-[105%]">
            Reviews as seen on my Google Business Page. <br /> We have a 5 Star
            Rating.
          </h2>
          <div className="flex space-x-6 mt-12 items-center">
            <div className="rating text-[2.25rem] flex flex-col leading-none items-center">
              <FcGoogle className="w-12 h-12" />
              4.9
            </div>
            <div className="flex flex-col">
              <div className="name font-bold font-sans text-[1.25rem]">
                Freightify Broker Planet Inc.
              </div>
              <div className="stars flex text-[#ffce31]">
                <StarRating />
              </div>
              <div className="amt">41 reviews</div>
            </div>
          </div>
          <div className="w-full flex justify-between mt-20">
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
          </div>
          <div className="mt-12 space-x-4">
            <button className="h-4 w-4 rounded-full border-2 bg-white"></button>
            <button className="h-4 w-4 rounded-full border-2 "></button>
            <button className="h-4 w-4 rounded-full border-2"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
