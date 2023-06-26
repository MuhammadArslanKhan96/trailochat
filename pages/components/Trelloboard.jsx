import React from "react";
import Image from "next/image";

const Trelloboard = () => {
  return (
    <>
      <div className="flex justify-center pt-[55px] flex-col bg-[#FFFFFF]">
        <div className="flex justify-center gap-x-20   py-[40px]">
          <div className="flex flex-col">
            <p className="text-[45px] font-Poppins font-bold pb-[21px] drop-shadow-[7px_3px_20px_rgba(0,0,0,0.25)]">
              {" "}
              Trello boards
            </p>
            <p className="text-[20px] font-Poppins text-[#000] w-[591px]">
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
            <div className="bg-[#5d6afb] rounded-[8px] mt-[40px] shadow-[10px_5px_10px_rgba(0,0,0,0.25)] py-[22px] px-[123px] w-fit">
              <button className="text-[20px] text-[#FFFFFF] font-bold font-Inter">
                Try Now!
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/trelloboards.svg"
              width={620}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="w-full mt-[10px] py-[30px] bg-[#0F20A5]"></div>
      </div>
    </>
  );
};

export default Trelloboard;
