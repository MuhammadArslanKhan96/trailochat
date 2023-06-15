import React from 'react'
import { BsSend } from "react-icons/bs";


const Search = ({ topic, setTopic, handleClick }) => {
    return (
        <div>
            <div className='flex flex-col justify-center  self-center items-center'>
                <div className='bg-[#625BF74D] items-center flex justify-between border-[1px] border-[#625BF7] rounded-[15px] py-[4px] px-[30px]  w-[60vw]'>
                    <input placeholder='Send a message' value={topic} onChange={(e) => setTopic(e.target.value)} className='placeholder:text-[#625BF7] w-full text-[16px] font-bold bg-transparent border-none outline-none' />
                    <div onClick={handleClick} className='text-[#625BF7] text-[20px] cursor-pointer font-bold'> <BsSend size={30} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Search