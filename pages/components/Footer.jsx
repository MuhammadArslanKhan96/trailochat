import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#152250] pt-[69px] pb-[100px]">
        {/* <div className="flex flex-col items-center  py-[40px]   justify-center self-center">
          <div className="flex flex-col ml-[25px] gap-y-3 text-[#ffffff] text-[21px] font-light">
            <p>Support</p>
            <p>Pricing</p>
            <p>FAQ</p>
            <p>Language</p>
            <p>Contact us</p>
          </div>
        </div> */}
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
            <div className="flex justify-center py-[33px]  text-[#ffffff] text-[22px] font-normal">
              <div className="flex flex-col gap-y-3">
                <p>Support</p>
                <p>FAQ</p>
                <p>Pricing</p>
                <p>Language</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col font-medium text-[27px] text-[#FFF]">
            Resources
          </div> */}
          <div className="flex flex-col  ">
            <p className="font-bold text-[27px] text-[#FFF]">
              {" "}
              Subscribe to our Newsletter{" "}
            </p>
            <p className="text-[22px] font-normal text-[#FFF] pt-[33px]">
              Stay informed, stay connected! Our newsletter brings you the{" "}
              <br />
              latest updates, insights, and trends in the world of AI and <br />
              beyond. Join our community and be at the forefront of the <br />
              conversation.
            </p>
            <div className="pt-[30px] flex  gap-x-6 ">
              <div className="">
                {" "}
                <input
                  placeholder="Enter your email..."
                  className="bg-[#343434] border border-[#DFDFDF] text-[#DFDFDF] outline-none  rounded-[17px] py-[17px] w-full pl-[14px] pr-[70px] text-[20px]"
                />
              </div>
              <div className="bg-[#FF5C00] flex justify-center rounded-[17px]  px-[82px] py-[17px]">
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
