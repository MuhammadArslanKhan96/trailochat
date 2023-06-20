import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import Header from './Header'
import { UserContext } from "./_app";
import Side from './Side'
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { Configuration, OpenAIApi } from 'openai';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Project = () => {
    const [data, setData] = useState()
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false)
    const [topic, setTopic] = useState('');
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        if (!user) {
            router.replace(`/signin`)
        }
        // eslint-disable-next-line
    }, [user])
    const handleClick = async () => {

        if (topic !== '') {
            try {
                setLoad(true)
                setData('');
                const configuration = new Configuration({
                    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
                });
                const openai = new OpenAIApi(configuration);

                const response = await openai.createChatCompletion({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: `Create a mind map for ${topic} in json format with names: topic,subtopics` }],
                });
                const str = response.data.choices[0].message.content;

                const int = JSON.parse(str);
                setData(int)
                setLoad(false)
            } catch (error) {
                setLoad(false)

            }
        }
    }

    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] overflow-hidden h-screen relative flex flex-col scrollStyle'>
                    <Header />

                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between px-[90px] py-[20px]'>
                            <div className='flex items-center gap-x-3'>
                                <div className='text-[#625BF7] font-bold'>Project Name</div>
                                <div className='text-[#625BF7]'><MdEdit /></div>
                            </div>
                            <div className="relative " data-te-dropdown-ref>
                                <button
                                    className="flex items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5 text-[16px] font-bold  leading-normal text-black  "
                                    onClick={() => setOpen(!open)}>
                                    Trello
                                    <span className="ml-4 w-2">
                                        <Image src="/images/arrow.svg" width={9} height={6} alt='' />
                                    </span>
                                </button>
                                {open && <ul
                                    className="absolute z-[1000] px-[40px] float-center m-0  min-w-max list-none overflow-hidden rounded-lg border-none text-black bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/project"
                                            data-te-dropdown-item-ref
                                        >Trello</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/chart"
                                            data-te-dropdown-item-ref
                                        >MindMap</Link>
                                    </li>

                                </ul>
                                }
                            </div>

                        </div>
                        <div className='flex justify-start h-[80vh] lg:ml-14 overflow-x-scroll gap-x-7 scrollStyle'>
                            {data && !load ? data.subtopics.map((column, idx) => (
                                <div className='flex items-start justify-center ' key={idx}>
                                    <div className='bg-[#DDDFE7] p-[16px] rounded-[4px]'>
                                        <div className='text-[18px] py-[10px]'>{column.topic || column.name || column}</div>
                                        <div className="flex flex-col overflow-y-scroll scrollStyle max-h-[50vh] gap-y-3">
                                            {column.subtopics.length ? column.subtopics.map((item, index) => (<div className="p-[24px]  bg-white rounded-lg" key={index}>
                                                <div className="flex justify-between gap-x-40">
                                                    <div className="flex flex-col gap-y-[14px]">
                                                        <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                            <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div>
                                                        <div > <p className="text-[14px] text-[#1B1C1D]">
                                                            {item.topic || item.name || item}
                                                        </p> </div>

                                                        <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                            <div>
                                                                <Image src="/images/calendar_today.svg" width={10} height={11} alt='' />
                                                            </div>
                                                            <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>)) : <div className="px-[24px] py-2 bg-white rounded-lg">
                                                <div className="flex justify-between gap-x-40">
                                                    <div className="flex flex-col gap-y-[2px]">
                                                        {/* <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                            <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div> */}
                                                        <div > <p className="text-[14px] text-[#1B1C1D]">
                                                            {column.title === 'Done' ? 'Nothing done yet!' : '+ Create a task'}
                                                        </p> </div>

                                                        {/* <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                            <div>
                                                                <Image src="/images/calendar_today.svg" width={10} height={11} alt='' />
                                                            </div>
                                                            <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                        </div> */}
                                                    </div>

                                                </div>

                                            </div>}
                                        </div>

                                    </div>
                                </div>
                            )) : <div
                                style={{
                                    width: "100%",
                                    height: "70%",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.4rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>{!load && !data ? 'Enter Topic In the Input 🤔' : 'Loading...'}</div>}

                        </div>
                    </div>
                    <div className='bg-white fixed bottom-4 w-[80%]  right-20 z-10'>
                        <Search topic={topic} load={load} setTopic={setTopic} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
