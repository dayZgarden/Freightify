import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineFunction
} from "react-icons/ai";

const Nav = () => {
  return (
    <>
            <nav>
        <div className="h-[10vh] text-white text-[1.15rem] relative font-mono" role="navigation">
          <div className="p-4 sm:p-12 flex justify-between mx-auto items-center">
            <div>
              <h1 className="font-bold text-[1.5rem] flex items-center">
                Freightify <AiOutlineFunction className="h-9 w-9 ml-4" />
              </h1>
            </div>
            <div className="md:hidden flex items-center">
              {/* Hamburger icon for mobile */}
              <div className="hamburger-icon"></div>
            </div>
            <div className="pr-8 md:block hidden">
              <a href="#" className="p-4">Home</a>
              <a href="#" className="p-4">About</a>
              <a href="#" className="p-4">Contact</a>
              <a href="#" className="p-4">Blog</a>
            </div>
            <div className="icons flex space-x-6 cursor-pointer">
              <AiOutlineSearch className="h-7 w-7" />
              <AiOutlineShoppingCart className="h-7 w-7" />
              <AiOutlineUser className="h-7 w-7" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
