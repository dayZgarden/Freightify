import React from "react";
import behind from '../assets/behind.svg'
import heroTruck from '../assets/heroTruck.svg'
import logo from '../assets/logo.svg'
import trucker from '../assets/trucker.svg'

const Hero = () => {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col md:flex-row p-4 md:p-12 pt-8 md:pt-24 justify-between">
        <div className="w-full hidden md:inline md:w-1/2 translate-y-[-10%] md:translate-y-0 mb-8 md:mb-0"></div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col w-full justify-center leading-none space-y-4 md:space-y-12">
            <h1 className="text-white text-2xl leading-[105%] md:text-[4rem] font-black w-full md:w-[90%]">
              Become a licensed <span className="text-[#54D6DD]"> Freight Broker </span> today
            </h1>
            <h2 className="text-white text-xl md:text-[2.25rem] w-full md:w-[65%] leading-[105%]">
              Freightify is the best available online training for Freight Brokers & Dispatch Services
            </h2>
            <div className="relative w-full md:w-[20%] cursor-pointer">
              <button className="rounded-[11px] z-[2] font-bold text-lg md:text-[1.25rem] bg-[#D98D4F] px-2 md:px-4 py-4 md:py-6 text-[#2f3541] w-[100%]">
                Get A Quote
              </button>
              <img draggable={false} className="absolute top-0 left-0 scale-110 translate-y-[-30%]" src={behind} alt="" />
            </div>
            <div className="text-[#C0BCBC]">All Majors Cards Accepted.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
