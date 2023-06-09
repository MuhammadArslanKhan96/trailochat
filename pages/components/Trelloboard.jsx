import React from "react";
import Image from "next/image";

const Trelloboard = () => {
  return (
    <>
      <div className="flex justify-center md:pt-[55px] flex-col bg-[#FFFFFF]">
        <div className="max-lg:flex-wrap-reverse px-[40px] flex justify-center gap-x-20   py-[40px]">
          <div className="flex flex-col  max-sm:pt-[20px]">
            <p className="text-[45px] max-sm:text-[16px] font-Poppins font-bold pb-[21px] drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)]">
              {" "}
              Trello boards
            </p>
            <p className="text-[20px] max-sm:text-[12px] font-Poppins text-[#000] max-w-[591px]">
              Effortlessly manage your projects and streamline team
              collaboration with our powerful Trello Board. With intuitive drag-{" "}
              and-drop functionality, easily organize tasks, assign
              responsibilities, and track progress. Gain a clear overview of
              project timelines, deadlines, and priorities. Foster seamless
              communication through comments, attachments, and real-time
              updates. Boost productivity with automated workflows and
              customizable labels. Whether you&apos;re working on a personal
              project or leading a team, our Trello Board provides a visual and
              organized space to bring your ideas to life.
            </p>
            <div className="bg-[#2B44FF]  rounded-[8px] mt-[40px] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] py-[14px] px-[46px] w-fit max-lg:px-[30px] max-lg:py-[12px]">
              <button className="text-[20px]  max-sm:text-[12px] text-[#FFFFFF] font-bold font-Inter">
                Try Now!
              </button>
            </div>
          </div>
          <div className="md:py-[50px] ">
            <Image
              src="/images/trelloboards.svg"
              width={620}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="w-full mt-[10px] max-sm:py-[10px] py-[30px] bg-[#0F20A5]"></div>
      </div>
    </>
  );
};

export default Trelloboard;
