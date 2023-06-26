import React from "react";
import Image from "next/image";

const Mapping = () => {
  return (
    <>
      <div className="flex justify-center py-[70px] flex-col bg-[#FFFFFF]">
        <div className="flex justify-center items-center gap-x-20   ">
          <div className="flex flex-col">
            <p className="text-[35px] font-bold leading-[120%] font-Nunito tracking-[-0.35px]">
              {" "}
              Unlock the Power of AI Mind Mapping
            </p>
            <p className="text-[16px] pt-[16px] font-bold translate-[0.32px] leading-[155%] font-Nunito w-[614px]">
              Let our AI guide you towards greater clarity, productivity, and
              success. Try our AI mind mapping tool today and experience the
              future of ideation.
            </p>
            <div className=" mt-[55px] bg-[#0E1FA2] text-[#FFF] text-[16px] font-bold leading-[155%] font-Nunito w-fit py-[12px] px-[56px] tracking-[0.16px] border-[3px] border-[#0E1FA2]  rounded-full">
              Try it now
            </div>
          </div>
          <div>
            <Image
              src="/images/mindmapping.svg"
              width={465}
              height={442}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mapping;
