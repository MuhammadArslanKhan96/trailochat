import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center py-[55px] border-[#858484] border-dashed border-2 flex-col bg-[#FFFFFF]">
        <p className="text-[40px] max-sm:text-[16px] text-center font-bold font-Poppins pb-[41px]">
          Frequently Asked Questions
        </p>
        <div className="flex px-[100px] max-sm:px-[40px]">
          <ul role="list" className="space-y-5  my-10 max-sm:my-[2px]">
            {FaqData.map((item, idx) => (
              <div key={idx}>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/plus.svg"
                    className="max-sm:w-[22px] max-sm:h-[22px] cursor-pointer"
                    width={43}
                    height={37}
                    alt=""
                    onClick={() => setOpen(idx)}
                  />
                  <span className="text-[20px] max-sm:text-[14px] font-bold font-Poppins">
                    {item.Q}
                  </span>
                </li>
                {open === idx && (
                  <li className="flex px-[15px]  space-x-3 items-start">
                    <Image
                      src="/images/minus.svg"
                      className="max-sm:w-[15px] max-sm:h-[15px] mt-4 max-sm:mt-0 cursor-pointer"
                      width={30}
                      height={30}
                      alt=""
                      onClick={() => setOpen(false)}
                    />
                    <span
                      className="text-[18px] max-sm:text-[12px] max-w-[880px] break-words
              "
                    >
                      <p>{item.A}</p>
                    </span>
                  </li>
                )}
              </div>
            ))}
            {/* <li className="flex space-x-3 items-center">
              <Image
                src="/images/plus.svg"
                className="max-sm:w-[22px] max-sm:h-[22px]"
                width={43}
                height={37}
                alt=""
              />
              <span className="text-[28px] max-sm:text-[14px]  font-bold font-Poppins">
                How can I create a mind map using this AI tool?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <Image
                src="/images/plus.svg"
                className="max-sm:w-[22px] max-sm:h-[22px]"
                width={43}
                height={37}
                alt=""
              />
              <span className="text-[28px] max-sm:text-[14px]  font-bold font-Poppins">
                What features are included in the Free Trial?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <Image
                src="/images/plus.svg"
                className="max-sm:w-[22px] max-sm:h-[22px]"
                width={43}
                height={37}
                alt=""
              />
              <span className="text-[28px] max-sm:text-[14px]  font-bold font-Poppins">
                What features are included in the Free Trial?
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="w-full py-[2px] bg-[#0a204f]"></div>
    </>
  );
};

export default Faq;

const FaqData = [
  {
    Q: "How does AI enhance the mind mapping experience?",
    A: "AI enhances the mind mapping experience by generating intelligent suggestions, expanding on topics, and providing explanations or breaking down tasks. This streamlines the creative process, making it more efficient and effective.",
  },
  {
    Q: "Can I collaborate with others using the AI mind mapping tool?",
    A: "Absolutely! Our AI mind mapping tool is designed for real-time collaboration, allowing multiple users to contribute, edit, and share ideas simultaneously, making teamwork more efficient and seamless.",
  },
  {
    Q: "Is the AI mind mapping tool suitable for both personal and professional use?",
    A: "es, the AI mind mapping tool is versatile and can be used for both personal and professional purposes, including brainstorming, project planning, knowledge management, and more.",
  },
  {
    Q: "How does the AI mind mapping tool help improve productivity?",
    A: "The AI mind mapping tool improves productivity by providing a visually organized structure for ideas, reducing cognitive load, and promoting quicker decision-making. Additionally, AI-generated suggestions and real-time collaboration features streamline the creative process.",
  },
  {
    Q: "Is it easy to get started with the AI mind mapping tool?",
    A: "Yes, our AI mind mapping tool is designed to be user-friendly, with an intuitive interface that makes it easy for both beginners and experienced users to create and navigate their mind maps.",
  },
];
