import React from "react";
import Image from "next/image";

const Ultimate = () => {
  return (
    <>
      <div className="flex justify-center pt-[55px] flex-col bg-[#FFFFFF]">
        <div className="flex flex-col text-center pb-[55px] ">
          <p className="text-[55px] font-Poppins font-medium drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)] ">
            Look into GPT-MindMap Ultimate{" "}
          </p>
          <p className="text-[25px]  py-[16px] text-[#000] font-Poppins">
            Includes GPT Task, GPT MindMap, AI, and much more.
          </p>
        </div>
        <div className="max-md:flex-wrap px-[40px] flex justify-center gap-x-10   ">
          <div>
            <Image src="/images/mindmap.svg" width={700} height={400} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-[50px] font-bold pb-[21px] font-Poppins drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)]">
              {" "}
              MindMap
            </p>
            <p className="text-[18px] font-Poppins text-[#000] max-w-[687px]">
              This groundbreaking tool empowers you to effortlessly organize and{" "}
              visualize your thoughts, sparking new insights and connections.Our{" "}
              intelligent algorithms work in harmony with your input,
              automatically structuring and arranging your ideas into visually
              captivating mind maps. Dive deeper into your creative process as
              our AI suggests related concepts, expanding your brainstorming
              horizons. Collaborate seamlessly with your team, sharing and
              refining your mind maps in real-time. With customizable visuals
              and seamless export options, our GPT MindMap is the ultimate
              catalyst for innovation. Experience the future of ideation and
              elevate your creative endeavors to unprecedented heights.
            </p>
            <div className="bg-[#2B44FF] rounded-[9px] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] mt-[20px] py-[19px] px-[44px] max-md:px-[38px] max-md:py-[12px] w-fit">
              <button className="text-[20px] text-[#FFFFFF] font-bold">
                Chart Your Ideas!
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-[30px] mt-[10px] bg-[#0F20A5]"></div>
      </div>
    </>
  );
};

export default Ultimate;
