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
            <p className="font-normal  text-[35px] text-[#FFF] font-['Sanchez'] leading-[150%] translate-[0.5px]">
              {" "}
              GPT-MindMap{" "}
            </p>
            <p className="text-[22px] font-normal text-[#FFF] py-[33px] w-[355px] font-['Roboto'] leading-[150%] ">
              Unleash your boundless creativity, accelerate your learning
              process, and effortlessly accomplish tasks through an engaging,
              visually captivating, and neuro-inclusive approach. Begin your
              journey immediately, without spending a dime.
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="font-medium text-[27.882px] text-[#FFF] font-['Archivo'] leading-[140%] ">
              {" "}
              Resources{" "}
            </p>
            <div className="flex justify-center py-[33px]  text-[#ffffff] text-[22px] font-normal">
              <div className="flex flex-col gap-y-3 font-['Inter'] leading-[230%] translate-[-0.424px]">
                <p>Home</p>
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
            <p className="font-bold text-[27.882px] text-[#FFF] font-['Archivo'] ">
              {" "}
              Subscribe to our Newsletter{" "}
            </p>
            <p className="text-[22px] font-normal text-[#FFF] pt-[33px] font-['Roboto'] leading-[150%] w-[587px]">
              Stay informed, stay connected! Our newsletter brings you the{" "}
              latest updates, insights, and trends in the world of AI an beyond.
              Join our community and be at the forefront of th conversation.
            </p>
            <div className="pt-[30px] flex  gap-x-6 ">
              <div className="">
                {" "}
                <input
                  placeholder="Enter your email..."
                  className="bg-[#343434] border border-[#DFDFDF] font-['Inter'] text-[#DFDFDF] outline-none  rounded-[17px] py-[17px] w-full pl-[14px] pr-[70px] text-[20px]"
                />
              </div>
              <div className="bg-[#FF5C00] flex justify-center font-['Archivo'] leading-[] rounded-[17px]  px-[82px] py-[17px]">
                <button className="text-[18px] font-bold text-[#fff]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-[13px] pb-[5px] ">
        <p className="text-[15px] font-['Inter']">
          COPYRIGHT © 2023- GPT-Mindmap
        </p>
      </div>
    </>
  );
};

export default Footer;
