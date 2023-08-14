import React from "react";
import { AiOutlineTool, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";
import try1 from "../assets/try1.svg";

const About = () => {
  return (
    <>
      <div className=" text-white min-h-[100vh] p-12 pt-24 w-full font-serif">
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
            <div className="w-1/2 flex space-x-4  transition-all duration-300">
              <div className="rectangle overflow-hidden relative z-[1] w-[8rem] h-[24rem] ">
                <img
                  className="absolute w-full object-cover object-left h-full top-0 left-0"
                  src={try1}
                  alt=""
                />
              </div>
              <div className="rectangle overflow-hidden relative z-[1] translate-y-[10%] w-[8rem] h-[24rem] ">
                <img
                  className="absolute w-full h-full object-center object-cover top-0 left-0"
                  src={try1}
                  alt=""
                />
              </div>
              <div className="rectangle overflow-hidden relative z-[1] w-[8rem] h-[24rem] ">
                <img
                  className="absolute w-full h-full object-cover object-position-75 top-0 left-0"
                  src={try1}
                  alt=""
                />
              </div>
              <div className="rectangle overflow-hidden relative  z-[1] translate-y-[11%] w-[8rem] h-[24rem] ">
                <img
                  className="absolute w-full object-cover object-right h-full top-0 left-0"
                  src={try1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
