import Image from "next/image";
import React from "react";

const Getstarted = () => {
  return (
    <>
      <div className="flex bg-[#0b0d52] justify-center items-center md:py-[60px] md:px-[41px]">
        <div className="flex flex-col md:pl-[80px] max-sm:px-[50px] max-md:py-[20px]">
          <div className="flex gap-x-2 items-center">
            <span className="flex w-[10px] h-[10px] max-sm:w-[5px] max-sm:h-[5px] bg-[#ECA53C] rounded-full"></span>
            <p className="text-[20px] max-sm:text-[16px] font-['Poppins]  text-[#FF4646] font-bold ">
              Let&apos;s try it
            </p>
          </div>
          <p className="text-[47px] max-sm:text-[14px] text-[#FFFFFF] font-medium font-['Poppins] max-w-[551px]">
            Enhance your creative{" "}
            <span className="text-[55px] max-sm:text-[14px] text-[#ECA53C] font-medium font-['Poppins] ">
              With{" "}
            </span>{" "}
            GPT-MindMap
          </p>
         
          <div className="flex flex-col mt-[15px]">
            <p className="text-[#FFFFFFBD] text-[20px] max-sm:text-[12px] max-sm:max-w-[400px]  font-['Poppins] max-w-[506px]">
              Unleash your boundless creativity, accelerate your learning
              process, and effortlessly accomplish tasks through an engaging,
              visually captivating, and neuro- inclusive approach. Begin your
              journey immediately, without spending a dime.
            </p>
          </div>
          <div className="flex justify-center max-sm:mt-[20px] mt-[50px]  w-fit  rounded-full bg-[#ECA53C] max-sm:py-[7px] max-sm:px-[25px] px-[45px] py-[14px]">
            <button className="text-[#FFF] text-[20px] max-sm:text-[12px] flex justify-center font-bold px-5 font-['Poppins']">
              Get Started
            </button>
          </div>
        </div>
        <div className="pr-[80px] max-lg:hidden ">
          <Image src="/images/bulb.svg" width={830} height={530} alt="" />
        </div>
      </div>
    </>
  );
};

export default Getstarted;
