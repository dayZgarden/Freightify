import React from "react";
import behind from '../assets/behind.svg'

const Hero = () => {
  return (
    <>
      <div className="h-[90vh] flex p-12 pt-24 justify-between">
        <div className="w-1/2 translate-y-[-10%]">
          <div className=" flex flex-wrap rotate-[18deg] scale-[.65] w-full h-full ">
            <div className="w-full border-4 border-[#485163] m-2 rectangle animate-moveAround transition-all duration-300  aspect-square  backdrop-opacity-  max-w-[40%]"></div>
            <div className="w-full border-4 border-[#485163] m-2 rectangle animate-moveAround transition-all duration-300  aspect-square  backdrop-opacity-0  max-w-[40%]"></div>
            <div className="w-full border-4 border-[#485163] m-2 rectangle animate-moveAround transition-all duration-300 aspect-square  backdrop-opacity-0  max-w-[40%]"></div>
            <div className="w-full border-4 border-[#485163] m-2 rectangle animate-moveAround transition-all duration-300 aspect-square  backdrop-opacity-0  max-w-[40%]"></div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col w-full justify-center leading-none space-y-12">
            <h1 className="text-white text-[4rem] font-black w-[90%]  ">
              Become a licensed{" "}
              <span className="text-[#54D6DD]"> Freight Broker </span> today
            </h1>
            <h2 className="text-white text-[2.25rem] w-[65%] leading-[105%]">
              Freightify is the best available online training for Freight Brokers &
              Dispatch Services 
            </h2>
            <div className="relative w-[20%] cursor-pointer">
              <button className="rounded-[11px] z-[2] font-bold text-[1.25rem] bg-[#D98D4F] px-4 py-6 text-[#2f3541] w-[100%]">
                Get Started
              </button>
              <img
                draggable={false}
                className="absolute  top-0 left-0 scale-110 translate-y-[-30%]"
                src={behind}
                alt=""
              />
            </div>
            <div className="text-[#C0BCBC]">All Majors Cards Accepted.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
