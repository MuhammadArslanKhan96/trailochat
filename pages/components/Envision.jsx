import React from "react";
import Image from "next/image";

const Envision = () => {
  return (
    <>
      <div className="flex justify-center   bg-[#FFFFFF]">
        <div className="flex flex-col justify-center pr-40 py-[55px]">
          <div className="text-[40px] font-medium  drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)] ">
            <p>Envision a scenario </p>
            <p>where you have the </p>
            <p>ability to...</p>
          </div>
          <div className="text-[15px] flex flex-col py-[25px] gap-y-5 ">
            <div>
              <p>Envision a scenario where you have the ability to control</p>
              <p> time itself. Imagine the power to pause, rewind, or fast-</p>
              <p>forward the moments of your life at will. </p>
            </div>
            <div>
              <p>With this extraordinary ability, you could savor the most</p>
              <p>
                {" "}
                precious moments, relive your fondest memories, or even{" "}
              </p>{" "}
              <p>rectify past mistakes. </p>
            </div>
          </div>
          <div className="bg-[#2B44FF] rounded-[8px] mt-[20px] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] py-[8px] px-[50px] w-fit">
            <button className="text-[16px] text-[#FFFFFF] font-bold">
              Try Now!
            </button>
          </div>
        </div>
        <div class=" h-auto min-h-[1em] w-0.5 bg-[#000000] opacity-100 dark:opacity-50"></div>
        <div className="flex flex-col justify-center pl-20 py-[55px]">
          <div className="flex flex-col gap-y-10">
            <div className="flex  gap-x-5">
              <div>
                <Image src="/images/auto.svg" width={50} height={55} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[20px] font-bold">
                  Automaticly Generate a mindmap with AI
                </p>
                <p className="text-[15px]">
                  This innovative solution harnesses the power of artificial{" "}
                  <br />
                  intelligence to generate dynamic and visually appealing <br />{" "}
                  mind maps tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex  gap-x-5">
              <div>
                <Image
                  src="/images/oneclick.svg"
                  width={50}
                  height={55}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[20px] font-bold">
                  Continue to Explain Expand with ONE Click
                </p>
                <p className="text-[15px]">
                  Take your mindmap experience to the next level with our AI-{" "}
                  <br />
                  powered tool that allows you to effortlessly expand your ideas
                  with <br /> just one click. Gone are the days of manually
                  creating and <br />
                  connecting subtopics.
                </p>
              </div>
            </div>
            <div className="flex  gap-x-5">
              <div>
                <Image
                  src="/images/swiftly.svg"
                  width={50}
                  height={55}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[20px] font-bold">
                  Everything was done swiftly and without the use of a code.
                </p>
                <p className="text-[15px]">
                  Experience the ease and speed of mind mapping like never
                  before. <br /> Our platform enables you to create captivating
                  mind maps swiftly <br /> and effortlessly, without the need
                  for any coding.
                </p>
              </div>
            </div>
            <div className="flex  gap-x-5">
              <div>
                <Image src="/images/track.svg" width={50} height={55} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[20px] font-bold">
                  Work in Perfect Sync: Stay on Track, Together
                </p>
                <p className="text-[15px]">
                  Collaboration is the key to success when working in a team.
                  With <br />
                  our powerful collaboration tool, you can ensure that everyone
                  stays <br />
                  on track, no matter how complex the project.
                </p>
              </div>
            </div>
            <div className="flex  gap-x-5">
              <div>
                <Image src="/images/share.svg" width={50} height={55} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[20px] font-bold">
                  Share and Save with Ease
                </p>
                <p className="text-[15px]">
                  Effortlessly share and save your content across multiple
                  platforms <br />
                  with our versatile tool. Say goodbye to limitations and enjoy
                  the <br />
                  freedom of accessing your files, documents, and resources{" "}
                  <br />
                  wherever you go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  py-[20px] bg-[#0F20A5]"></div>
    </>
  );
};

export default Envision;
