import React from "react";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <div className="flex justify-center py-[55px] border-[#858484] border-dashed border-2 flex-col bg-[#FFFFFF]">
        <p className="text-[40px] text-center font-bold font-Poppins pb-[41px]">
          Frequently Asked Questions
        </p>
        <div className="flex px-[100px]">
          <ul role="list" className="space-y-5  my-10">
            <li className="flex space-x-3 items-center">
              <Image src="/images/plus.svg" width={43} height={37} alt="" />
              <span className="text-[20px] font-bold font-Poppins">
                What features are included in the Free Trial?
              </span>
            </li>
            <li className="flex px-[15px]  space-x-3 items-start">
              <Image
                src="/images/minus.svg"
                width={30}
                height={30}
                alt=""
                className="py-[8px]"
              />
              <span
                className="text-[18px] max-w-[880px] break-words
              "
              >
                <p>
                  During the Free Trial period, you have access to basic mind
                  mapping functionality. This includes creatinind maps, adding
                  nodes and branches, and limited collaboration features. The
                  Free Trial lasts for 14 days,giving you a chance to explore
                  the tool and its capabilities.
                </p>
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <Image src="/images/plus.svg" width={43} height={37} alt="" />
              <span className="text-[28px] font-bold font-Poppins">
                How can I create a mind map using this AI tool?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <Image src="/images/plus.svg" width={43} height={37} alt="" />
              <span className="text-[28px] font-bold font-Poppins">
                What features are included in the Free Trial?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <Image src="/images/plus.svg" width={43} height={37} alt="" />
              <span className="text-[28px] font-bold font-Poppins">
                What features are included in the Free Trial?
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-[2px] bg-[#0a204f]"></div>
    </>
  );
};

export default Faq;
