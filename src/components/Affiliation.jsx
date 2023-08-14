import React from "react";
import truck from "../assets/truck.svg";


const Affiliation = () => {
  return (
    <>
      <div className="overflow-x-hidden  text-white min-h-[90vh] relative p-12 pt-24 w-full font-serif">
        <div className="max-w-[86rem] mx-auto">
          <div className="flex flex-col items-center justify-center space-x-8 py-8 md:py-16">
            <h1 className="text-[#D98D4F] font-black text-[1.75rem] font-sans">
              Affiliations
            </h1>
            <h2 className="mt-4 text-[2.25rem] w-[65%] mx-auto text-center leading-[105%]">
              We are members of the Logistics & Transportation Association of
              North America. All classes are English.
            </h2>
            <button className="w-[65%] mt-12 border-4 border-[#53d6dd] py-4 text-center text-[1.5rem]">
              FIND OUT HOW TO BECOME A MEMBER OF LTNA
            </button>
            <img className="absolute -right-[10%]" src={truck} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliation;
