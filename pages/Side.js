import React, { useContext } from 'react'
import { GoPlus } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
import { UserContext } from './_app';
import { useRouter } from 'next/router';


const Side = () => {
    const { maps, trelloTickets } = useContext(UserContext)
    const router = useRouter();

    return (
        <div className="w-[20%]  h-screen bg-white  border-r-[1px]">
            <div className="flex flex-col h-full py-[20px] justify-between">
                <div className="flex justify-center pt-[40px]">
                    <div className='flex flex-col gap-y-6'>
                        <Link href="/mindmap">
                            <div className="flex justify-start   gap-x-3 pl-[18px] pr-[108px] items-center py-[20px] bg-[#EBEEF2] rounded-[10px]">
                                <div className='text-[#625BF7]'><GoPlus /></div>
                                <p className="text-[16px] text-[#625BF7] font-bold">New Chat</p>
                            </div>
                        </Link>
                        {router.pathname.startsWith('/chart') && maps.length ?
                            <div className='bg-black/10 px-4 py-2 rounded-xl flex flex-col gap-y-2 text-2xl font-bold'>
                                <p className='font-normal'>Use an existing chart: </p>
                                {maps.map((item, idx) => (
                                    <Link href={'/chart?topic=' + item.mapId} key={idx} className='rounded bg-white px-4 py-2 '>
                                        {item.topic}
                                    </Link>
                                ))}
                            </div>
                            : null}
                        {router.pathname.startsWith('/project') && trelloTickets.length ?
                            <div className='bg-black/10 px-4 py-2 rounded-xl flex flex-col gap-y-2 text-2xl font-bold'>
                                <p className='font-normal'>Open an existing Project: </p>
                                {trelloTickets.map((item, idx) => (
                                    <Link href={'/project?topic=' + item.mapId} key={idx} className='rounded bg-white px-4 py-2 '>
                                        {item.topic}
                                    </Link>
                                ))}
                            </div>
                            : null}
                    </div>
                </div>
                <div className='flex justify-center flex-col gap-y-4 px-[20px]'>
                    <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full">
                    </div>

                    <div className='flex justify-center gap-x-[27px] items-center'>
                        <div className=' flex flex-col gap-y-[29px]'>
                            <div>    <Image src="/images/newdollar.svg" width={14} height={24} alt='' /> </div>
                            <div>   <Image src="/images/newsetting.svg" width={20} height={20} alt='' /> </div>
                        </div>
                        <div className=' flex flex-col gap-y-[29px]'>
                            <Link href="/#pricing" className='text-[#625BF7] text-[16px] font-bold'>Pricing Plans</Link>
                            <Link href="/signup" className='text-[#625BF7] text-[16px] font-bold'>Setting</Link>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Side