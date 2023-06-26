import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter();
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full  bg-[#F4F4F4] z-10 ease-in duration-300">
      <div className="w-auto mx-8  flex justify-between h-[81px] items-center py-4 text-white">
        <div className="flex items-center">
          {/* <div>
            <Link href="/">
              <Image
                src={logo}
                className="cursor-pointer"
                alt="logo"
                width={13}
                height={10}
              />
            </Link>
          </div> */}
          {/*  */}
          <div
            className="px-3 pt-[25px] pb-[20px] pl-[27px] text-[20px] font-bold text-[#000000]
         font-['Poppins]"
          >
            GPT-MINDMAP
          </div>
        </div>
        <div className="flex items-center">
          <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
            <li className="p-4 pr-[38px] pt-[33px] pb-[27px] text-[#000000] text-[14px] font-bold font-['Poppins]">
              <Link href="# ">Home</Link>
            </li>
            <li className="p-4 pr-[46px] pt-[33px] pb-[27px] text-[#000000] text-[14px] font-bold font-['Poppins]">
              <Link href="# ">FAQ</Link>
            </li>
            <li className="p-4 pr-[43px] pt-[33px] pb-[27px] text-[#000000] text-[14px] font-bold font-['Poppins]">
              <Link href="#pricing">Price Plan</Link>
            </li>

            <li className="p-4 pr-[55px] pt-[33px] pb-[27px] text-[#000000] text-[14px] font-bold font-['Poppins]">
              <Link href="# ">About</Link>
            </li>
            <li className="p-4 pr-[42px] pt-[33px] pb-[27px] text-[#000000] text-[14px] font-bold font-['Poppins]">
              <Link href="# ">Support</Link>
            </li>
            <Link
              href="/mindmap"
              className="flex items-center gap-x-2 border mr-[43px] mt-[22px] mb-[16px]  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-[#FFF7F7] text-white text-[14px] px-8 bg-[#2B44FF]  rounded-[5px]"
            >
              <button className="  text-white font-bold text-[16px]  font-['Inter'] ">
                Start For Free
              </button>
              <FiArrowRight size={20} />
            </Link>
          </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `#0D1296` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `#0D1296` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#e9f1fc] text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#work">Lanugae</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#services">FAQ</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#testimonials'>Testimonials</Link>
            </li> */}
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#contact">Support</Link>
            </li>
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03">
              <button className="bg-[#0D1296] text-[#fff]  text-lg font-bold px-4">
                Start For Free
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
