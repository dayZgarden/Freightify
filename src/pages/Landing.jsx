import React from "react";
import Nav from "../components/Nav.jsx";
import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import {
  AiOutlineTool,
  AiOutlineVideoCameraAdd,
  AiFillStar,
} from "react-icons/ai";
import { FaFacebook, FaPodcast, FaTwitter } from "react-icons/fa";
import training from "../assets/training.svg";
import wave from "../assets/wave.svg";
import truck from "../assets/truck.svg";
import { FcGoogle } from "react-icons/fc";
import cowboy from "../assets/cowboy.svg";

const Landing = () => {
  return (
    <>
      <div className="bg-[#2f3541]">
        <div className="min-h-screen bg-cover bg-center bg-heroTruck max-w-[100vw]">
          <div className=" min-h-screen w-full bg-[#2f3541] backdrop-blur-lg backdrop-opacity-30 bg-opacity-90">
            <div className="px-4  sm:px-6 lg:px-8">
              <Nav />
              <Hero />
            </div>
          </div>
        </div>
        <div className="bg-[#394150] h-1 w-full"></div>
        <div className=" text-white min-h-[100vh] p-12 pt-24 w-full font-mono">
          <div className="max-w-[86rem] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-8 py-8 md:py-16">
              <div className="flex flex-col w-1/2 ">
                <h1 className="text-[#D98D4F] font-black text-[1.75rem]">
                  About Us
                </h1>
                <h2 className="font-semibold text-[2.25rem]">
                  Build the skills to become a Freight Broker with our product
                </h2>
                <div className="flex items-center space-x-6 mt-12">
                  <AiOutlineTool className="w-12 h-12" />
                  <div>
                    <h1 className="text-[#54D6DD] font-black text-[1.5rem]">
                      Training
                    </h1>
                    <h2 className="text-[1.25rem] w-[60%] leading-normal">
                      We provide the training for you to jump start your career
                    </h2>
                  </div>
                </div>
                <div className="flex items-center space-x-6 mt-8">
                  <AiOutlineVideoCameraAdd className="w-12 h-12" />
                  <div>
                    <h1 className="text-[#54D6DD] font-black text-[1.5rem]">
                      Blogs
                    </h1>
                    <h2 className="text-[1.25rem] w-[60%] leading-normal">
                      Feel free to get involved by checking out our blog
                    </h2>
                  </div>
                </div>
                <div className="flex items-center space-x-6 mt-8">
                  <FaPodcast className="w-12 h-12" />
                  <div>
                    <h1 className="text-[#54D6DD] font-black text-[1.5rem]">
                      Podcast
                    </h1>
                    <h2 className="text-[1.25rem] w-[60%] leading-normal">
                      Our podcast covers the latest logistics topics on our
                      program
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex space-x-4 animate-moveAround transition-all duration-300">
                <div className="rectangle w-[8rem] h-[24rem] border-4 border-[#485163]"></div>
                <div className="rectangle translate-y-[10%] w-[8rem] h-[24rem] border-4 border-[#485163]"></div>
                <div className="rectangle w-[8rem] h-[24rem] border-4 border-[#485163]"></div>
                <div className="rectangle translate-y-[11%] w-[8rem] h-[24rem] border-4 border-[#485163]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-28 mb-56">
          <div className="text-white text-center text-[1.5rem] font-sans font-extrabold w-[40%] mx-auto">Use coupon “May-22” for $202 off Platinum Plus</div>
          <div className="bg-[#54D6DD]  h-2 mt-1  rounded-sm w-[40%] mx-auto"></div>
        </div>

        <div className=" bg-[#fff] min-h-[100vh] p-12 pt-24 w-full font-mono">
          <div className="max-w-[86rem] mx-auto">
            <div className="flex flex-col items-center justify-center space-x-8 py-8 md:py-16">
              <h1 className="text-[#D98D4F] font-black text-[1.75rem] font-sans">
                Featured Products
              </h1>
              <h2 className="font- text-[2.25rem] w-[60%] mx-auto text-center leading-[105%]">
                The Best Freight Broker Training available. We have the best
                Freight Broker Training on the planet.
              </h2>
              <div className="flex justify-between mt-16">
                <div className="card1 w-[30%] shadow-light p-8 flex flex-col">
                  <h1 className="font-[700] text-[1.25rem] font-sans w-[60%] text-center mx-auto pb-12">
                    Live Coaching for Freight Brokers
                  </h1>
                  <h2 className="">FREE SHIPPING</h2>
                  <img
                    className="py-1 border-2 border-black"
                    src={training}
                    alt=""
                  />
                  <div className="mb-6">
                    <span className="line-through text-[#A9A8A8]">
                      $1595.00
                    </span>{" "}
                    <span>$1500.00</span>
                  </div>
                  <button className="shadow-light w-[50%] mx-auto font-bold font-sans py-2 bg-white">
                    Check out
                  </button>
                </div>
                <div className="card1 w-[30%] shadow-light p-8 flex flex-col">
                  <h1 className="font-[700] text-[1.25rem] font-sans w-[60%] text-center mx-auto pb-12">
                    Live Coaching for Freight Brokers
                  </h1>
                  <h2 className="">FREE SHIPPING</h2>
                  <img
                    className="py-1 border-2 border-black"
                    src={training}
                    alt=""
                  />
                  <div className="mb-6">
                    <span className="line-through text-[#A9A8A8]">
                      $1595.00
                    </span>{" "}
                    <span>$1500.00</span>
                  </div>
                  <button className="shadow-light w-[50%] mx-auto font-bold font-sans py-2 bg-white">
                    Check out
                  </button>
                </div>
                <div className="card1 w-[30%] shadow-light p-8 flex flex-col">
                  <h1 className="font-[700] text-[1.25rem] font-sans w-[60%] text-center mx-auto pb-12">
                    Live Coaching for Freight Brokers
                  </h1>
                  <h2 className="">FREE SHIPPING</h2>
                  <img
                    className="py-1 border-2 border-black"
                    src={training}
                    alt=""
                  />
                  <div className="mb-6">
                    <span className="line-through text-[#A9A8A8]">
                      $1595.00
                    </span>{" "}
                    <span>$1500.00</span>
                  </div>
                  <button className="shadow-light w-[50%] mx-auto font-bold font-sans py-2 bg-white">
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[100vw]" src={wave} alt="" />

        <div className="overflow-x-hidden  text-white min-h-[90vh] relative p-12 pt-24 w-full font-mono">
          <div className="max-w-[86rem] mx-auto">
            <div className="flex flex-col items-center justify-center space-x-8 py-8 md:py-16">
              <h1 className="text-[#D98D4F] font-black text-[1.75rem] font-sans">
                Affiliations
              </h1>
              <h2 className="mt-4 text-[2.25rem] w-[60%] mx-auto text-center leading-[105%]">
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

        <div className="bg-[#394150] h-1 w-full"></div>

        <div className="overflow-x-hidden  text-white min-h-[100vh] relative p-12 pt-24 w-full font-mono">
          <div className="max-w-[86rem] mx-auto">
            <div className="flex flex-col items-center justify-center space-x-8 py-8 md:py-16">
              <h1 className="text-[#D98D4F] font-black text-[1.75rem] font-sans">
                Affiliations
              </h1>
              <h2 className="mt-4 text-[2.25rem] w-[60%] mx-auto text-center leading-[105%]">
                Reviews as seen on my Google Business Page. We have a 5 Star
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
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                  </div>
                  <div className="amt">41 reviews</div>
                </div>
              </div>
              <div className="w-full flex justify-between mt-20">
                <div className="border-4 rounded-2xl p-8 w-[30%] space-y-6 border-[#D6FaFd] bg-[#454C5A] flex flex-col items-center">
                  <img className="" src={cowboy} alt="" />
                  <div className="stars flex text-[#ffce31]">
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                  </div>
                  <h1>
                    “Freight Broker Planet turned me into a multi millionaire
                    after only 6 work weeks of hard work. I cha...”
                  </h1>
                  <h2 className="text-[#D6FaFd] font-sans font-black tracking-wide">
                    Read Full Review {">"}
                  </h2>
                  <h3>John Doe - 09/21/2023</h3>
                </div>
                <div className="border-4 rounded-2xl p-8 w-[30%] space-y-6 border-[#D6FaFd] bg-[#454C5A] flex flex-col items-center">
                  <img className="" src={cowboy} alt="" />
                  <div className="stars flex text-[#ffce31]">
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                  </div>
                  <h1>
                    “Freight Broker Planet turned me into a multi millionaire
                    after only 6 work weeks of hard work. I cha...”
                  </h1>
                  <h2 className="text-[#D6FaFd] font-sans font-black tracking-wide">
                    Read Full Review {">"}
                  </h2>
                  <h3>John Doe - 09/21/2023</h3>
                </div>
                <div className="border-4 rounded-2xl p-8 w-[30%] space-y-6 border-[#D6FaFd] bg-[#454C5A] flex flex-col items-center">
                  <img className="" src={cowboy} alt="" />
                  <div className="stars flex text-[#ffce31]">
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                    <AiFillStar className="w-6 h-6" />
                  </div>
                  <h1>
                    “Freight Broker Planet turned me into a multi millionaire
                    after only 6 work weeks of hard work. I cha...”
                  </h1>
                  <h2 className="text-[#D6FaFd] font-sans font-black tracking-wide">
                    Read Full Review {">"}
                  </h2>
                  <h3>John Doe - 09/21/2023</h3>
                </div>
              </div>
              <div className="mt-12 space-x-4">
                <button className="h-4 w-4 rounded-full border-2 bg-white"></button>
                <button className="h-4 w-4 rounded-full border-2 "></button>
                <button className="h-4 w-4 rounded-full border-2"></button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="bg-[#000817] text-white min-h-[50vh] p-12 pt-24 mt-36 w-full font-mono">
            <div className="max-w-[86rem] mx-auto">
              <div className="flex flex-col  items-center space-x-8 py-8 md:py-16">
                <p className="text-[1.05rem] w-[40%] mx-auto text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <p className="text-[2rem] mt-12">100% Coder Owned. Copyright © 2024. All Rights Reserved.</p>
                <div className="mt-24 flex justify-between w-full text-[1.25rem]">
                  <p>800-619-5281</p>
                  <div className="flex w-[30%] justify-between">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>      
                  </div>
                  <div className="flex space-x-12">
                    <FaFacebook className="w-10 h-10 tex-t[" />
                    <FaTwitter className="w-10 h-10"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
