import React, { useState } from 'react'
import Side from './Side'
import Header from './Header'
import Search from './Search'
import Image from 'next/image'

const Send = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] flex flex-col'>
                    <Header />

                    <div className='flex flex-col justify-between h-[75vh]'>
                        <div className='flex justify-end px-[90px] py-[20px]'>

                            <div className="relative" data-te-dropdown-ref>
                                <button onClick={() => setOpen(!open)}
                                    className="flex items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5 text-[16px] font-bold  leading-normal text-black  "
                                >
                                    Mindmap
                                    <span className="ml-4 w-2">
                                        <Image src="/arrow.svg" width={9} height={6} alt='' />
                                    </span>
                                </button>
                                {open && <ul
                                    className="absolute z-[1000] float-left m-0 px-[40px] min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Trello</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >MindMap</a
                                        >
                                    </li>

                                </ul>
                                }
                            </div>

                        </div>
                        <div className='bg-[#FFFFFF]  flex flex-col justify-center px-[13px]  pb-[13px]  self-center rounded-[10px]   shadow-[0px_6px_8px_rgba(0,0,0,0.06)]'>
                            <p className='text-[#625BF7] text-[16px] font-bold bg-[#EBEEF2]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7] text-[16px] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7] text-[16px] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7] text-[16px] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7] text-[16px] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                        </div>
                    </div>
                    <Search />
                </div>
            </div>
        </>
    )
}

export default Send
