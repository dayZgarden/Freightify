import React from 'react';
import cowboy from "../assets/cowboy.svg";
import StarRating from "./StarRating.jsx";

const ReviewBox = () => {
    return (
        <div className="border-4 rounded-2xl p-8 w-[30%] space-y-6 border-[#D6FaFd] bg-[#454C5A] flex flex-col items-center">
        <img src={cowboy} alt="" />
        <div className="stars flex text-[#ffce31]">
          <StarRating />
        </div>
        <h1>“Freight Broker Planet turned me into a multi millionaire after only 6 work weeks of hard work. I cha...”</h1>
        <h2 className="text-[#D6FaFd] font-sans font-black tracking-wide">Read Full Review {">"}</h2>
        <h3>John Doe - 09/21/2023</h3>
      </div>
    );
}

export default ReviewBox;
