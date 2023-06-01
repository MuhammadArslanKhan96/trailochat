import React from "react";
import Image from "next/image";

const Plan = () => {
  return (
    <>
      <div className="flex justify-center flex-col py-[55px]  bg-[#F4F4F4]">
        <div className="flex flex-col text-center pb-[55px] ">
          <p className="text-[40px] self-center font-bold  ">
            Choose Your Plan
          </p>
          <p className="text-[20px] self-center py-[16px] ">
            14 days unlimited free trials. No Contract or credit card required.
          </p>
        </div>
        <div className="flex justify-center gap-x-5">
          <div className="flex gap-x-5 items-center">
            <div>
              {" "}
              <p className="text-[20px] font-semibold"> Monthly</p>{" "}
            </div>

            <label className="relative  inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-[50px] h-[25px] bg-[#ffff] shadow-[0px_5px_20px_5px_rgba(0,0,0,0.25)] peer-focus:outline-none  dark:peer-focus:ring-[#003498] rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#2c1fde]  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex gap-x-5 items-center">
            <p className="text-[25px]">Yearly</p>
            <div className="px-[14px] text-[19px] py-[4px] border-[3px] border-[#010796]  rounded-full">
              20% OFF
            </div>
          </div>
        </div>
        <div className="flex gap-x-20 justify-center pt-[70px]">
          <div className=" mt-[90px] max-w-sm  bg-white border border-[#353030] rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)] p-4 dark:border-gray-700 ">
            <div className="flex justify-center">
              <h5 className=" text-[37px] font-bold   text-[#000000]">
                Free trial
              </h5>
            </div>
            <div className="px-[40px]">
              <div className="flex justify-center items-center text-gray-900 ">
                <span className="text-[35px] font-bold">$</span>
                <span className="text-[35px] font-bold tracking-tight">0</span>
                <span className=" text-[20px] font-normal mt-2">/MO</span>
              </div>
              <div className="flex justify-center flex-col py-[20px] text-[20px] text-center">
                <p>Get a taste of our AI mind</p>
                <p>mapping tool with our free trial</p>
              </div>
              <ul role="list" className="space-y-5  my-10">
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Unlimited access to advance features.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">Basic support.</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    14 Days duration.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">Price: $0.</span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white font-bold mt-[30px] bg-[#1A2CB4] rounded-[10px] text-[25px] px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Start Free Trial
              </button>
            </div>
          </div>
          <div className=" mb-[90px] max-w-sm  text-[#ffffff] bg-black   rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)]    ">
            <div className="bg-[#3D45FF]  text-[27px] rounded-[15px] py-[10px] w-full flex justify-center text-center">
              {" "}
              Enhanced Package
            </div>
            <div className="px-[30px]">
              <div className="flex justify-center">
                <h5 className=" text-[30px]    ">Pro</h5>
              </div>
              <div className="flex justify-center items-center  ">
                <span className="text-[40px] font-bold">$</span>
                <span className="text-[40px] font-bold tracking-tight">
                  19.99
                </span>
                <span className=" text-[20px] font-normal mt-2">/month</span>
              </div>
              <div className="flex justify-center flex-col py-[10px] text-[18px] text-center">
                <p>Take your mind mapping experience</p>
                <p>to the next level with our premium</p>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/greencheck.svg"
                    width={18}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Limited access to advanced features
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/greencheck.svg"
                    width={18}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    All features from the Standard Package
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/greencheck.svg"
                    width={18}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Advanced AI-powered suggestions and recommendations.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/greencheck.svg"
                    width={18}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Enhanced security and data protection
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/greencheck.svg"
                    width={18}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Integration with other productivity tools
                  </span>
                </li>
              </ul>
              <div className="pb-[20px]">
                <button
                  type="button"
                  className="text-white font-bold   bg-[#1A2CB4] rounded-[10px] text-[22px] px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Upgrade tp Premium
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-[90px] max-w-sm  bg-white border border-[#353030] rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)] p-4 dark:border-gray-700 ">
            <div className="flex justify-center">
              <h5 className=" text-[30px] font-bold   text-[#000000]">
                Standard Package
              </h5>
            </div>
            <div className="px-[40px]">
              <div className="flex justify-center items-center text-gray-900 ">
                <span className="text-[40px] font-bold tracking-tight">
                  $9.99
                </span>
                <span className=" text-[20px] font-normal mt-2">/month</span>
              </div>
              <div className="flex justify-center flex-col py-[20px] text-[20px] text-center">
                <p>Get a taste of our AI mind</p>
                <p>mapping tool with our free trial</p>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Full access to all features
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Priority support.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Collaborative mind mapping
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Customization options
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="text-[15px] font-bold">
                    Price: $9.99/month
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white font-bold mt-[30px] bg-[#1A2CB4] rounded-[10px] text-[20px] px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
