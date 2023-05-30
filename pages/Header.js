import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between  px-[90px] py-[20px]'>
                <div className='text-transparent'> john doe</div>
                <Link href="/signin">
                    <div className='flex gap-x-4 items-center'>
                        <div className='text-black text-[16px] font-bold'>John Doe</div>
                        <div className='bg-[#D9D9D9] rounded-full w-[50px] h-[50px]'></div>
                    </div>
                </Link>
            </div>
            <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full">
                m
            </div>
        </div>
    )
}

export default Header