import React from "react";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import wave from "../assets/wave.svg";
import About from "../components/About.jsx";
import Featured from "../components/Featured.jsx";
import Affiliation from "../components/Affiliation.jsx";
import Reviews from "../components/Reviews.jsx";
import Footer from "../components/Footer.jsx";


const Landing = () => {
  return (
    <>
      <div className="bg-[#2f3541] font-serif">
        <div className="min-h-screen bg-cover bg-center bg-heroTruck max-w-[100vw]">
          <div className="min-h-screen w-full bg-[#2f3541] backdrop-blur-sm backdrop-opacity-30 bg-opacity-70">
            <div className="px-4 sm:px-6 lg:px-8">
              <Nav />
              <Hero />
            </div>
          </div>
        </div>

        <About />
 
        <div className="flex flex-col items-center mt-28 mb-56">
          <div className="text-white text-center text-[1.5rem] font-sans font-extrabold w-[40%] mx-auto">
            Use coupon “May-22” for $202 off Platinum Plus
          </div>
          <div className="bg-[#54D6DD]  h-2 mt-1  rounded-sm w-[40%] mx-auto"></div>
        </div>

        <Featured />
 
        <img className="w-[100vw]" src={wave} alt="" />

        <Affiliation />

        <div className="bg-[#394150] h-1 w-full"></div>
        
        <Reviews />

        <Footer />
      </div>
    </>
  );
};

export default Landing;
