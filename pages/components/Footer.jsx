import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#152250] pt-[69px] pb-[100px] max-sm:pb-[40px]">
        <div className="max-lg:flex-col flex justify-between px-[80px]">
          <div className="flex flex-col ">
            <p className="font-normal text-[35px] max-sm:text-[16px]  text-[#FFF] font-['Sanchez'] leading-[150%] translate-[0.5px]">
              {" "}
              GPT-MindMap{" "}
            </p>
            <p className="text-[22px] max-sm:text-[12px] font-normal text-[#FFF] max-sm:py-[12px] py-[33px] max-w-[355px] font-['Roboto'] leading-[150%] ">
              Unleash your boundless creativity, accelerate your learning
              process, and effortlessly accomplish tasks through an engaging,
              visually captivating, and neuro-inclusive approach. Begin your
              journey immediately, without spending a dime.
            </p>
          </div>

          <div className="flex flex-col ">
            <p className="font-medium text-[27.882px] max-sm:text-[16px] text-[#FFF] font-['Archivo'] leading-[140%] ">
              {" "}
              Resources{" "}
            </p>
            <div className="flex justify-center max-lg:justify-start max-sm:py-[10px] py-[33px]  text-[#ffffff] text-[22px] max-sm:text-[12px] font-normal">
              <div className="flex flex-col gap-y-3 font-['Inter'] leading-[230%] translate-[-0.424px]">
                <p>Home</p>
                <p>FAQ</p>
                <p>Pricing</p>
                <p>Language</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col  ">
            <p className="font-bold text-[27.882px] max-sm:text-[16px] text-[#FFF] font-['Archivo'] ">
              {" "}
              Subscribe to our Newsletter{" "}
            </p>
            <p className="text-[22px] max-sm:text-[12px] font-normal text-[#FFF] max-sm:pt-[10px] pt-[33px] font-['Roboto'] leading-[150%] max-w-[587px]">
              Stay informed, stay connected! Our newsletter brings you the{" "}
              latest updates, insights, and trends in the world of AI an beyond.
              Join our community and be at the forefront of th conversation.
            </p>
            <div className="max-lg:flex-col max-sm:pt-[10px] pt-[30px] flex  justify-center items-center  gap-x-6 ">
              <div className="py-[20px]">
                {" "}
                <input
                  placeholder="Enter your email..."
                  className="bg-[#343434] border border-[#DFDFDF] font-['Inter'] text-[#DFDFDF] outline-none  rounded-[17px] py-[17px] w-full pl-[14px] pr-[70px] text-[20px] max-sm:text-[12px]"
                />
              </div>

              <div className="bg-[#FF5C00] flex  justify-center font-['Archivo'] leading-[] rounded-[17px]  h-fit px-[9px] max-sm:py-[12px] py-[20px]">
                <button className="text-[18px] max-sm:text-[12px] font-bold text-[#fff]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-[13px] pb-[5px] ">
        <p className="text-[15px] max-sm:text-[12px] font-['Inter']">
          COPYRIGHT © 2023- GPT-Mindmap
        </p>
      </div>
    </>
  );
};

export default Footer;
