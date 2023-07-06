import React from "react";
import Image from "next/image";

const Mapping = () => {
  return (
    <>
      <div className="flex justify-center max-sm:py-[25px] py-[70px] flex-col bg-[#FFFFFF]">
        <div className="max-lg:flex-col-reverse flex justify-center items-center gap-x-20 px-[40px]">
          <div className="flex flex-col">
            <p className="text-[35px] max-sm:text-[16px] font-bold leading-[120%] font-Nunito tracking-[-0.35px]">
              {" "}
              Unlock the Power of AI Mind Mapping
            </p>
            <p className="text-[16px] pt-[16px] max-sm:text-[12px] translate-[0.32px] leading-[155%] font-Nunito max-w-[614px]">
              Let our AI guide you towards greater clarity, productivity, and
              success. Try our AI mind mapping tool today and experience the
              future of ideation.
            </p>
            <div className="max-sm:mt-[20px] mt-[55px] bg-[#0E1FA2] text-[#FFF] max-sm:text-[12px] text-[16px] font-bold leading-[155%] font-Nunito w-fit max-sm:py-[6px] max-sm:px-[20px]  py-[12px] px-[56px] tracking-[0.16px] border-[3px] border-[#0E1FA2]  rounded-full">
              Try it now
            </div>
          </div>

          <div className="pb-[30px] ">
            <Image
              className="max-lg:w-[365px] max-lg:h-[342px] max-sm:w-[185px] max-sm:h-[182px]"
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
