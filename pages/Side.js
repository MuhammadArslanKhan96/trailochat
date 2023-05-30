import React from 'react'
import { GoPlus } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';


const Side = () => {


    return (
        <div className="w-[20%]  h-screen bg-white  border-r-[1px]">
            <div className="flex flex-col h-full py-[20px] justify-between">
                <div className="flex justify-center pt-[40px]">
                    <Link href="/send">
                        <div className="flex justify-start   gap-x-3 pl-[18px] pr-[108px] items-center py-[20px] bg-[#EBEEF2] rounded-[10px]">
                            <div className='text-[#625BF7]'><GoPlus /></div>
                            <p className="text-[16px] text-[#625BF7] font-bold">New Chat</p>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center flex-col gap-y-4 px-[20px]'>
                    <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full">
                        m
                    </div>

                    <div className='flex justify-center gap-x-[27px] items-center'>
                        <div className=' flex flex-col gap-y-[29px]'>
                            <div>    <Image src="/newdollar.svg" width={14} height={24} alt='' /> </div>
                            <div>   <Image src="/newsetting.svg" width={20} height={20} alt='' /> </div>
                        </div>
                        <div className=' flex flex-col gap-y-[29px]'>
                            <Link href="/cards" className='text-[#625BF7] text-[16px] font-bold'>Pricing Plans</Link>
                            <Link href="/signup" className='text-[#625BF7] text-[16px] font-bold'>Setting</Link>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Side