import Image from "next/image";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const Signup = () => {

    return (
        <>
            <section className="flex justify-center bg-[#FFFFFF]"
                style={{
                    backgroundImage: `url('/Background Pattern.svg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex  flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0">
                    <div className=" px-[40px] py-[20px] bg-[#FFFFFF] shadow-[0px_6px_8px_rgba(0,0,0,0.05)] rounded-[5px] ">
                        <div className="flex gap-x-1 items-center" >
                            <p className="text-[#757575] text-[14px] font-normal">Welcome back!</p>
                            <p className="">👋</p>
                        </div>
                        <div className="text-black font-bold text-[24px]">Sign in to your account</div>
                        <div className="px-[10px] py-[20px] ">
                            <div className="flex justify-center gap-x-2 px-[55px] py-[18px] items-center 
                             rounded-[50px] shadow-[0px_15px_50px_rgba(222,95,143,0.12)] bg-gradient-to-r from-[#E5E3E0]  to-[#625BF7] ">
                                <div className="text-white items-center text-[16px]">
                                    <BsGoogle />
                                </div>
                                <div className="text-[#FFFFFF] text-[16px] font-medium">Sign in with Google Account</div>
                            </div>
                            <div className="flex mt-[20px] text-center px-[55px] py-[18px] justify-start gap-x-2 items-center 
                             rounded-full bg-[#FFFFFF] shadow-[0px_15px_50px_rgba(98,91,247,0.5)]">
                                <div className="text-[#000] items-center text-[16px]">
                                    <BsApple size={20} />
                                </div>
                                <div className="text-[#000] text-[14px] font-medium">Sign in with Apple</div>
                            </div>
                            <div className="flex mt-[20px] justify-start text-center px-[55px] py-[18px] gap-x-2 items-center 
                             rounded-full bg-[#FFFFFF] shadow-[0px_15px_50px_rgba(98,91,247,0.5)]">
                                <div className="text-blue items-center text-[16px]">
                                    <BsFacebook fill="blue" size={20} />
                                </div>
                                <div className="text-[#000] font-medium text-[16px] ">Sign in with Facebook</div>
                            </div>
                            <div className="flex mt-[20px] justify-start gap-x-2 text-center px-[55px] py-[18px] items-center 
                             rounded-full bg-[#FFFFFF] shadow-[0px_15px_50px_rgba(98,91,247,0.5)]">
                                <div className="text-blue items-center text-[16px]">
                                    <MdEmail size={20} />
                                </div>
                                <div className="text-[#000] text-[16px] font-medium">Sign in with Email</div>
                            </div>

                        </div>
                        <div className="text-[16px] text-black font-medium px-[10px]">
                            <p>By continuing you agree to Name&apos;s Terms of Use.</p>
                            <p>Read our Privacy Policy</p>
                        </div>
                        <div className="flex text-center justify-center py-[20px]">
                            <div className="flex gap-x-1">
                                <p className="text-[16px] font-medium text-[#94969A]">I have an account!</p>
                                <p className="text-[16px] font-medium  text-[#553BF1]">Sign Up</p></div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Signup;
