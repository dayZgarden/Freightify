import React from 'react';
import training from "../assets/training.svg";


const Featured = () => {
    return (
        <>
                   <div className=" bg-[#fff] min-h-[100vh] p-12 pt-24 w-full font-serif">
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
                  <button className=" w-[50%] mx-auto font-bold font-sans py-2 bg-white">
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
                  <button className=" w-[50%] mx-auto font-bold font-sans py-2 bg-white">
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
                  <button className="w-[50%] mx-auto font-bold font-sans py-2 bg-white">
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Featured;
