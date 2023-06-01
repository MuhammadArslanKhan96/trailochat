import React from "react";
import Image from "next/image";

const Mapping = () => {
  return (
    <>
      <div className="flex justify-center py-[70px] flex-col bg-[#FFFFFF]">
        <div className="flex justify-center items-center gap-x-20   ">
          <div className="flex flex-col">
            <p className="text-[35px] font-bold ">
              {" "}
              Unlock the Power of AI Mind Mapping
            </p>
            <p className="text-[16px] pt-[16px] font-bold">
              Let our AI guide you towards greater clarity, productivity, and
              success. Try our <br />
              AI mind mapping tool today and experience the future of ideation.
            </p>
            <div className="px-[40px] mt-[55px] text-[#0E1FA2] r w-fit py-[8px] border-[3px] border-[#0E1FA2]  rounded-full">
              Try it mow
            </div>
          </div>
          <div>
            <Image src="/images/mapping.svg" width={509} height={350} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mapping;
