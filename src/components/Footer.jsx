import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#000817] text-white min-h-[50vh] p-12 pt-24 mt-36 w-full font-serif">
          <div className="max-w-[86rem] mx-auto">
            <div className="flex flex-col  items-center space-x-8 py-8 md:py-16">
              <p className="text-[1.05rem] w-[40%] mx-auto text-center">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
              <p className="text-[2rem] mt-12">
                100% Coder Owned. Copyright © 2024. All Rights Reserved.
              </p>
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
                  <FaTwitter className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
