import React from "react";
import Image from "next/image";
import { UserContext } from "../_app";
import { useRouter } from "next/router";
import axios from "axios";

const Plan = () => {
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();
  const createPlan = async (tier) => {
    if (user) {
      const { data } = await axios.post(`/api/create_session`, {
        plan: tier,
      });
      localStorage.setItem("transaction", "true");
      router.replace(data);
    } else {
      router.replace("/signin");
    }
  };

  React.useEffect(() => {
    async function init() {
      setUser((pre) => ({ ...pre, tier: router.query.product }));
      await axios.post(`/api/updateUser`, {
        id: user.id,
        tier: router.query.product,
      });
      localStorage.setItem("transaction", "false");
    }
    if (
      user &&
      router &&
      router.query.success &&
      localStorage.getItem("transaction") === "true"
    ) {
      init();
    }
    // eslint-disable-next-line
  }, [router, user]);

  return (
    <>
      <div
        id="pricing"
        className="flex justify-center flex-col max-sm:py-[10px] py-[55px]  bg-[#F4F4F4]"
      >
        <div className="flex flex-col text-center max-sm:[10px] max-sm:pb-[30px] pb-[55px] ">
          <p className="text-[40px] max-sm:text-[16px] self-center font-bold font-Poppins">
            Choose Your Plan
          </p>
          <p className="text-[20px] max-sm:text-[12px] self-center py-[16px] font-Poppins text-[#000]">
            14 days unlimited free trials. No Contract or credit card required.
          </p>
        </div>
        <div className="flex justify-center gap-x-5">
          <div className="flex gap-x-5 items-center">
            <div>
              <p className="text-[20px] max-sm:text-[12px] font-semibold font-Poppins text-[#000]">
                {" "}
                Monthly
              </p>{" "}
            </div>

            <label className="relative  inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-[95px] h-[54px] max-sm:w-[45px] max-sm:h-[27px] bg-[#ffff] shadow-[0px_5px_20px_5px_rgba(0,0,0,0.25)] peer-focus:outline-none  dark:peer-focus:ring-[#003498] rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-[#003498]  after:border after:rounded-full after:h-[44px] after:w-[44px] max-sm:after:w-[18px] max-sm:after:h-[18px] after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex gap-x-5 items-center">
            <p className="text-[25px] font-Poppins text-[#000] max-sm:text-[12px]">
              Yearly
            </p>
            <div className="text-[19px] py-[4px] px-[14px] max-sm:py-[2px] max-sm:px-[7px] border-[3px] border-[#010796]  rounded-full max-sm:text-[12px]">
              20% OFF
            </div>
          </div>
        </div>

        <div className="flex-wrap flex gap-x-20 gap-y-10 justify-center max-sm:pt-[40px] pt-[70px]">
          <div className="  max-w-[394px] max-sm:max-w-[280px] h-fit  bg-white border border-[#353030] rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)] p-4 dark:border-gray-700 ">
            <div className="flex justify-center">
              <h5 className=" text-[37px] max-sm:text-[16px] font-bold  font-Poppins text-[#000] mt-[11px]">
                Basic Package
              </h5>
            </div>
            <div className="px-[40px]">
              {/* <div className="flex justify-center items-center text-gray-900 ">
                <span className="text-[35px] font-bold">$</span>
                <span className="text-[35px] font-bold tracking-tight">0</span>
                <span className=" text-[20px] font-normal mt-2">/MO</span>
              </div> */}
              <div className="flex justify-center max-sm:text-[12px] flex-col font-Poppins py-[20px] text-[20px] text-center  text-[#000]">
                <p>
                  Get a taste of our AI mind mapping tool with our basic
                  package.
                </p>
                {/* <p>mapping tool with our free trial</p> */}
              </div>
              <ul role="list" className="space-y-5  my-10">
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px]  max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold font-Poppins text-[#000]">
                    Limited access to advanced features.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px]  max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold font-Poppins text-[#000]">
                    Basic support.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px]  max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold font-Poppins text-[#000]">
                    14 Days duration.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px]  max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold font-Poppins text-[#000]">
                    Price: $0.
                  </span>
                </li>
              </ul>
              <button
                type="button"
                disabled={user && user.tier === "Free"}
                className={
                  "text-white font-bold mt-[30px] max-sm:mt-[10px] bg-[#1A2CB4] rounded-[10px] text-[25px] max-sm:text-[12px] px-[12px] py-[9px] inline-flex justify-center w-full text-center" +
                  ` ${
                    user && user.tier === "Free"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`
                }
                onClick={() => router.replace("/signin")}
              >
                Try Now!
              </button>
            </div>
          </div>

          <div className="    max-w-[394px] max-sm:max-w-[280px] h-fit text-[#ffffff] bg-[#000425]   rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)]    ">
            <div className="bg-[#3D45FF]  text-[27px] max-sm:text-[16px]  rounded-[15px] pt-[12px] pb-[14px] px-[13px] w-full flex justify-center text-center">
              {" "}
              Enhanced Package
            </div>
            <div className="px-[30px]">
              <div className="flex justify-center py-[7px]">
                <h5 className=" text-[30px] max-sm:text-[12px] font-Poppins">
                  Pro
                </h5>
              </div>
              <div className="flex justify-center items-center  ">
                <span className="text-[40px] max-sm:text-[16px] font-bold">
                  $
                </span>
                <span className="text-[40px] max-sm:text-[16px] font-bold tracking-tight font-Poppins">
                  19.99
                </span>
                <span className=" text-[20px] max-sm:text-[12px] font-light max-sm:mt-0 mt-2 font-Poppins">
                  /month
                </span>
              </div>
              <div className="flex justify-center font-light font-Poppins flex-col py-[10px] text-[18px] max-sm:text-[14px] text-center">
                <p>Take your mind mapping experience</p>
                <p>to the next level with our premium</p>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/greencheck.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold font-Poppins">
                    Limited access to advanced features
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/greencheck.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold  font-Poppins">
                    All features from the Standard Package
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/greencheck.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold  font-Poppins">
                    Advanced AI-powered suggestions and recommendations.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:text-[12px] max-sm:h-[15px]"
                    src="/images/greencheck.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold  font-Poppins">
                    Enhanced security and data protection
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/greencheck.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold  font-Poppins">
                    Integration with other productivity tools
                  </span>
                </li>
              </ul>
              <div className="pb-[20px]">
                <button
                  disabled={user && user.tier === "Pro"}
                  type="button"
                  className={
                    "text-white font-bold mt-[28px] mb-[5px]  bg-[#1A2CB4] rounded-[10px] text-[22px] max-sm:text-[12px] px-5 py-2.5 inline-flex justify-center w-full text-center" +
                    ` ${
                      user && user.tier === "Pro"
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`
                  }
                  onClick={() => createPlan("Pro")}
                >
                  Upgrade tp Premium
                </button>
              </div>
            </div>
          </div>

          <div className="   max-w-[411px] max-sm:max-w-[280px] h-fit bg-white border border-[#353030] rounded-[30px] shadow-[10px_5px_4px_5px_rgba(0,0,0,0.25)] p-4 dark:border-gray-700 ">
            <div className="flex justify-center">
              <h5 className=" text-[30px] max-sm:text-[16px] font-bold font-Poppins text-[#000]">
                Standard Package
              </h5>
            </div>
            <div className="px-[40px]">
              <div className="flex justify-center items-center text-gray-900 ">
                <span className="text-[40px] max-sm:text-[16px] font-bold tracking-tight font-Poppins">
                  $9.99
                </span>
                <span className=" text-[20px] max-sm:text-[12px] font-normal max-sm:mt-0 mt-2 font-Poppins">
                  /month
                </span>
              </div>
              <div className="flex justify-center flex-col py-[20px] text-[20px] max-sm:text-[12px] text-center font-Poppins max-w-[340px]">
                <p>
                  With our standard package, take your mind mapping to the next
                  level.
                </p>
                {/* <p>mapping tool with our free trial</p> */}
              </div>
              <ul role="list" className="space-y-5 my-7 max-sm:my-2">
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold">
                    Full access to all features
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold">
                    Priority support.
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px] max-sm:text-[12px] font-bold text-[#000] ">
                    Collaborative mind mapping
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:text-[12px] max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px]  max-sm:text-[12px] font-bold">
                    Customization options
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <Image
                    className="max-sm:w-[15px] max-sm:h-[15px]"
                    src="/images/check_blue.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className="text-[15px]  max-sm:text-[12px] font-bold">
                    Price: $9.99/month
                  </span>
                </li>
              </ul>
              <button
                disabled={user && user.tier === "Standard"}
                type="button"
                className={
                  "text-white font-bold mt-[30px] bg-[#1A2CB4] rounded-[10px] text-[20px] max-sm:text-[12px] px-5 py-2.5 inline-flex justify-center w-full text-center" +
                  ` ${
                    user && user.tier === "Standard"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`
                }
                onClick={() => createPlan("Standard")}
              >
                Choose Standard{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
