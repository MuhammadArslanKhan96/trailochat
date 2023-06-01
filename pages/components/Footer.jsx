import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#152250] pt-[100px] pb-[20px]">
        <div className="flex flex-col items-center  py-[40px]   justify-center self-center">
          <div className="flex flex-col ml-[25px] gap-y-3 text-[#ffffff] text-[21px] font-light">
            <p>Support</p>
            <p>Pricing</p>
            <p>FAQ</p>
            <p>Language</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="flex justify-between px-[80px]">
          <div className="flex flex-col ">
            <p className="font-normal  text-[35px] text-[#FFF]">
              {" "}
              GPT-MindMap{" "}
            </p>
            <p className="text-[22px] font-normal text-[#FFF] py-[33px]">
              Unleash your boundless creativity,
              <br /> accelerate your learning process, and <br /> effortlessly
              accomplish tasks through <br /> an engaging, visually captivating,
              and <br /> neuro-inclusive approach. Begin your <br /> journey
              immediately, without spending <br /> a dime.
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="font-medium text-[27px] text-[#FFF]"> Resources </p>
            <div className="flex justify-center py-[33px]  text-[#ffffff] text-[21px] font-light">
              <div className="flex flex-col gap-y-3">
                <p>Support</p>
                <p>FAQ</p>
                <p>Pricing</p>
                <p>Language</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-medium text-[27px] text-[#FFF]">
            Resources
          </div>
          <div className="flex flex-col  ">
            <p className="font-bold text-[27px] text-[#FFF]">
              {" "}
              Subscribe to our Newsletter{" "}
            </p>
            <div className="pt-[100px] flex-col ">
              <div className="pb-[25px]">
                {" "}
                <input
                  placeholder="Enter your email..."
                  className="bg-[#343434] border border-[#DFDFDF] text-[#DFDFDF] outline-none  rounded-[17px] py-[17px] w-full px-[14px] text-[20px]"
                />
              </div>
              <div className="bg-[#FF5C00] flex justify-center rounded-[17px] py-[17px]">
                <button className="text-[18px] font-bold text-[#fff]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-[13px] pb-[5px]">
        <p className="text-[15px]">COPYRIGHT © 2023- GPT-Mindmap</p>
      </div>
    </>
  );
};

export default Footer;
