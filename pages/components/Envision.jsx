import React from "react";
import Image from "next/image";

const Envision = () => {
  return (
    <>
      <div className="max-lg:flex-wrap flex justify-center md:pr-[20px] max-sm:px-[40px] pl-[75px]  bg-[#FFFFFF]">
        <div className="flex w-[100%]">
          <div className="flex flex-col max-lg:justify-center pt-[88px]   max-sm:pb-[10px] max-lg:max-w-[451px]">
            <div className=" text-[40px] max-sm:text-[16px] max-sm:mt-[20px] font-medium font-Poppins drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)]">
              <p className="max-w-[400px] ">
                Envision a scenario where you have the ability to...
              </p>
            </div>

            <div className="text-[15px] max-sm:text-[12px] font-Poppins  flex flex-col py-[25px] gap-y-5 ">
              <div>
                <p className="max-w-[400px]">
                  Envision a scenario where you have the ability to control time
                  itself. Imagine the power to pause, rewind, or fast- forward
                  the moments of your life at will.
                </p>
              </div>
              <div className="text-[15px] max-sm:text-[12px]  font-Poppins flex flex-col">
                <p className="max-w-[400px]">
                  With this extraordinary ability, you could savor the most
                  precious moments, relive your fondest memories, or even
                  rectify past mistakes.
                </p>
                <p> </p> <p> </p>
              </div>
            </div>

            <div className="bg-[#2B44FF] rounded-[8px] md:mt-[20px] max-w-[400px] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] max-sm:py-[12px] py-[12px] max-sm:px-[30px] px-[58px] w-fit">
              <button className="text-[16px] max-sm:text-[12px] text-[#FFFFFF] font-bold">
                Try Now!
              </button>
            </div>
          </div>
        </div>

        <div className=" h-auto min-h-[1em] w-0.5  bg-[#000000] opacity-100 dark:opacity-50 max-lg:hidden"></div>

        <div className="flex w-[100%]">
          <div className="flex flex-col justify-start md:pl-[18px] py-[55px] max-sm:py-[10px]">
            <div className="flex flex-col gap-y-10">
              <div className="flex  gap-x-5">
                <div>
                  <Image
                    src="/images/auto.svg"
                    width={50}
                    height={55}
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[20px] max-sm:text-[16px] font-bold font-Poppins text-[#000]">
                    Automaticly Generate a mindmap with AI
                  </p>
                  <p className="text-[15px] max-sm:text-[12px] font-Poppins text-[#000] max-w-[400px]">
                    This innovative solution harnesses the power of artificial{" "}
                    intelligence to generate dynamic and visually appealing mind
                    maps tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ">
                <div>
                  <Image
                    src="/images/oneclick.svg"
                    width={50}
                    height={55}
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[20px] max-sm:text-[16px] font-bold font-Poppins text-[#000]">
                    Continue to Explain Expand with ONE Click
                  </p>
                  <p className="text-[15px] max-sm:text-[12px] font-Poppins text-[#000] font-Poppins max-w-[400px]">
                    Take your mindmap experience to the next level with our AI-{" "}
                    powered tool that allows you to effortlessly expand your
                    ideas with just one click. Gone are the days of manually
                    creating and connecting subtopics.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div>
                  <Image
                    src="/images/swiftly.svg"
                    width={50}
                    height={55}
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[20px] max-sm:text-[16px] font-bold font-Poppins break-words">
                    Everything was done swiftly and without the use of a code.
                  </p>
                  <p className="text-[15px] max-sm:text-[12px] font-Poppins text-[#000] max-w-[441px]">
                    Experience the ease and speed of mind mapping like never
                    before. Our platform enables you to create captivating mind
                    maps swiftly and effortlessly, without the need for any
                    coding.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div>
                  <Image
                    src="/images/track.svg"
                    width={50}
                    height={55}
                    alt=""
                    className="min-w-[50px] max-sm:min-w-[25px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[20px]  font-bold font-Poppins max-sm:text-[16px]">
                    Work in Perfect Sync: Stay on Track, Together
                  </p>
                  <p className="text-[15px]  font-Poppins  max-sm:text-[12px]">
                    Collaboration is the key to success when working in a team.
                    With our powerful collaboration tool, you can ensure that
                    everyone stays on track, no matter how complex the project.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div>
                  <Image
                    src="/images/share.svg"
                    width={50}
                    height={55}
                    alt=""
                    className="min-w-[50px] max-sm:min-w-[20px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[20px] font-bold font-Poppins max-sm:text-[16px]">
                    Share and Save with Ease
                  </p>
                  <p className="text-[15px] font-Poppins font-Poppins  max-sm:text-[12px]">
                    Effortlessly share and save your content across multiple
                    platforms with our versatile tool. Say goodbye to
                    limitations and enjoy the freedom of accessing your files,
                    documents, and resources wherever you go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[20px] max-sm:py-[10px] bg-[#0F20A5]"></div>
    </>
  );
};

export default Envision;
