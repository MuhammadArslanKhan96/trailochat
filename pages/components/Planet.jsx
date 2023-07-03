import Image from "next/image";
import React from "react";

const Planet = () => {
  return (
    <>
      <div className=" flex justify-center py-[55px] flex-col bg-[#FFFFFF] px-[100px]">
        <p className="text-[55px] text-[#000] font-Poppins font-medium pb-[55px] drop-shadow-[10px_6px_10px_rgba(0,0,0,0.25)]">
          GPT-MindMap with AI is unique to the planet.{" "}
        </p>
        <div className="max-md:flex-wrap gap-y-[70px] flex justify-around items-center ">
          <div className="flex flex-col">
            <p className="text-[25px] text-[#000] font-Poppins max-w-[650px]">
              Unleash the power of one of the most expansive deep learning
              networks ever developed and tap into a world of boundless
              creativity.
            </p>
            <p className="text-[25px] text-[#000] font-Poppins max-w-[650px]">
              {" "}
              Our cutting-edge AI tool harnesses this state-of-the-art network
              to generate original and innovative ideas for anything your
              imagination desires.
            </p>
            <p className="text-[25px] text-[#000] font-Poppins max-w-[650px]">
              {" "}
              From brainstorming new products to crafting captivating stories,
              our AI-driven solution provides an endless well of inspiration.{" "}
            </p>

            <div className="px-[10px] py-[30px] text-[25px] font-bold font-Poppins text-[#000]">
              <li>Make the proper inquiries</li>
              <li>Move past the blocks</li>
              <li>Investigate alternative perspectives</li>
              <li>Remove obstacles</li>
              <li>Full-flowing mindmap</li>
            </div>
            <div>
              <p className="text-[25px] font-Poppins text-[#000]">
                Use artificial intelligence to advance your mind <br /> maps.
              </p>
            </div>
            <div className="bg-[#2B44FF] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] rounded-[8px] mt-[20px] py-[17px] px-[33px] w-fit">
              <button className="text-[20px] text-[#FFFFFF] font-bold font-Inter">
                Find Out More
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/images/planet.svg" width={605} height={543} alt="" />
          </div>
        </div>
      </div>
      <hr className="mt-12 h-0.5 border-t-0 bg-[#000000B2] opacity-100 dark:opacity-50" />
    </>
  );
};

export default Planet;
