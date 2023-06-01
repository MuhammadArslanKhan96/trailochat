import Image from "next/image";
import React from "react";

const Getstarted = () => {
  return (
    <>
      <div className="flex bg-[#0b0d52] justify-center  items-center py-[60px]">
        <div className="flex flex-col ">
          <div className="flex gap-x-2 items-center">
            <span class="flex w-3 h-3 bg-[#ECA53C] rounded-full"></span>
            <p className="text-[28px] text-[#e83838] font-bold ">
              Let&apos;s try it
            </p>
          </div>
          <p className="text-[55px] text-[#FFFFFF] font-medium">
            Enhance your creative
          </p>
          <div className="flex gap-x-3">
            <p className="text-[55px] text-[#ECA53C] font-medium">With</p>
            <p className="text-[55px] text-[#FFFFFF] font-medium">MindMap</p>
          </div>
          <div className="flex flex-col mt-[15px]">
            <p className="text-[#FFFFFFBD] text-[20px]">
              Unleash your boundless creativity, accelerate your <br />
              learning process, and effortlessly accomplish tasks <br />
              through an engaging, visually captivating, and neuro- <br />
              inclusive approach. Begin your journey immediately, <br />
              without spending a dime.
            </p>
          </div>
          <div className="flex justify-center mt-[50px]  w-fit  rounded-full bg-[#ECA53C] px-[45px] py-[14px]">
            <button className="text-[#ffffff] text-[20px] flex justify-center font-bold px-5">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <Image src="/images/bulb.svg" width={800} height={500} alt="" />
        </div>
      </div>
    </>
  );
};

export default Getstarted;
