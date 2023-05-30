import React from 'react';
import Header from './Header';
import Search from './Search';
import Side from './Side';

const Cards = () => {
    return (
        <>
            <div className='flex bg-[#BBBEC740]'>
                <Side />
                <div className='w-[80%] flex flex-col'>
                    <Header />

                    <div className='flex items-center justify-center '>
                        <div className='bg-[#FFFFFF] flex-col mt-[10px] mb-[20px] py-[25px] gap-y-[31px] rounded-[10px] px-[46px] flex justify-center items-center '>
                            <div className='text-[16px] text-[#625BF7] font-semibold'>
                                YOUR TIME SAVER & PRODUCTIVITY BOOSTER</div>
                            <div className='flex justify-between gap-x-10'>
                                <div className='bg-[#FFFFFF] h-[394px] mt-[30px] px-[19px] py-[15px] flex flex-col rounded-[10px] justify-between shadow-[0px_20px_30px_rgba(98,91,247,0.25)]'>
                                    <div>
                                        <div className='text-[16px] text-[#000000] font-bold pb-[14px] pt-[12px] text-center'>FREE</div>
                                        <div className='w-[220px]' >
                                            <div className='flex gap-x-3 font-semibold'><p>&#x2022;</p><p>Access to basic mind-mapping features</p></div>
                                            <div className='flex gap-x-3 font-semibold'><p>&#x2022;</p><p>1 AI interaction/Month </p></div>
                                            <div className='flex gap-x-3 font-semibold'><p>&#x2022;</p><p>Up to 3 personal mind maps</p></div>
                                            <div className='flex gap-x-3 font-semibold'><p>&#x2022;</p><p>No collaboration features </p></div>
                                            <div className='flex gap-x-3 font-semibold'><p>&#x2022;</p><p>Limited export options</p></div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className=' rounded-[10px] flex justify-center self-center text-center  text-[#ffffff]'>
                                            <button className='text-[16px] bg-[#625BF7] font-bold rounded-[10px]  px-[15px] py-[10px]'>TRY OUT FOR FREE</button>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-[#FFFFFF] h-[470px] px-[19px] justify-between py-[26px] flex flex-col rounded-[10px]  shadow-[0px_20px_30px_rgba(98,91,247,0.25)]'>
                                    <div>
                                        <div className='text-[16px] font-bold text-[#000000] pb-[16px] text-center'>PRO $9.99/MONTH</div>
                                        <div className='w-[220px]' >
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Access to all mind mapping features</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>AI interaction Unlimited</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Unlimited personal mind maps</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Real-time collaboration with up to 4 team members</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Export options in multiple formats (PNG, SVG, and PDF)</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Voxer office hours for personal feedback</p></div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className=' rounded-[10px] flex justify-center self-center text-center  text-[#ffffff]'>
                                            <button className='text-[16px] font-bold bg-[#625BF7] rounded-[10px]  px-[15px] py-[10px] mt-[31px]'>I TAKE THAT</button>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-[#FFFFFF]  h-[394px] mt-[30px] px-[20px] justify-between py-[26px] flex flex-col rounded-[10px]  shadow-[0px_20px_30px_rgba(98,91,247,0.25)]'>
                                    <div>
                                        <div className='text-[16px] font-bold text-[#000000] pb-[10px]  text-center'>TEAM 15 DOLLAR/
                                            <br /> USER/MONTH</div>
                                        <div className='items-center w-[220px] '>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>6 video modules</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>4 live calls</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>worksheets, checklists and ​materials</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>1 free live event ticket </p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Supportive community</p></div>
                                            <div className='flex gap-x-3 font-bold'><p>&#x2022;</p><p>Voxer office hours for ​personal feedback</p></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' rounded-[10px] flex justify-center self-center text-center  text-[#ffffff]'>
                                            <button className='text-[16px] font-bold bg-[#625BF7] rounded-[10px]  px-[15px] py-[10px]'>ADD TO CALL-To-Action</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Search />
                </div>


            </div>

        </>
    )
}
export default Cards
