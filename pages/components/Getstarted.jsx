import Image from "next/image";
import React from "react";

const Getstarted = () => {
  return (
    <>
      <div className="flex bg-[#0b0d52] justify-center items-center py-[60px] px-[41px]">
        <div className="flex flex-col pl-[80px]">
          <div className="flex gap-x-2 items-center">
            <span className="flex w-[10px] h-[10px] bg-[#ECA53C] rounded-full"></span>
            <p className="text-[20px] font-['Poppins]  text-[#FF4646] font-bold ">
              Let&apos;s try it
            </p>
          </div>
          <p className="text-[55px] text-[#FFFFFF] font-medium font-['Poppins] w-[551px]">
            Enhance your creative
          </p>
          <div className="flex gap-x-3">
            <p className="text-[55px] text-[#ECA53C] font-medium font-['Poppins] ">
              With
            </p>
            <p className="text-[55px] text-[#FFFFFF] font-medium font-['Poppins] ">
              GPT-MindMap
            </p>
          </div>
          <div className="flex flex-col mt-[15px]">
            <p className="text-[#FFFFFFBD] text-[20px] font-['Poppins] w-[506px]">
              Unleash your boundless creativity, accelerate your learning
              process, and effortlessly accomplish tasks through an engaging,
              visually captivating, and neuro- inclusive approach. Begin your
              journey immediately, without spending a dime.
            </p>
          </div>
          <div className="flex justify-center mt-[50px]  w-fit  rounded-full bg-[#ECA53C] px-[45px] py-[14px]">
            <button className="text-[#FFF] text-[20px] flex justify-center font-bold px-5 font-['Poppins']">
              Get Started
            </button>
          </div>
        </div>
        <div className="pr-[80px]">
          <Image src="/images/bulb.svg" width={830} height={530} alt="" />
        </div>
      </div>
    </>
  );
};

export default Getstarted;
