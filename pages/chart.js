import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search';
import Side from './Side';
const { Configuration, OpenAIApi } = require('openai');
import Mindmap from "./components/Mindmap";
import Link from "next/link";
const Chart = () => {
    const [data, setData] = useState('')
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false)
    const [topic, setTopic] = useState('');
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
                    messages: [{ role: 'user', content: `Create a mind map for ${topic} without hashtags in markdown format with desc of each topic after adding colon` }],
                });
                const str = response.data.choices[0].message.content;

                setData(str)
                setLoad(false)
            } catch (error) {
                setLoad(false)

            }
        }
    }

    const mind = {
        version: 1,
        meta: {
            name: "demo",
            author: "hizzgdev@163.com",
            version: "0.2",
        },
        format: "node_array",
        data: [],
    };
    const options = {
        container: "jsmind_container",
        theme: "clouds",
        editable: false,
        support_html: true,
        view: {
            draggable: false /* это для того чтоб если увеличить мап то его можно было переместить целиком */,
            hide_scrollbars_when_draggable: true,
        },
    };
    return (
        <>
            <div className='flex'>
                <Side />
                <div className='w-[80%] relative flex flex-col'>
                    <Header />

                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-end px-[90px] py-[20px]'>

                            <div className="relative" data-te-dropdown-ref >
                                <button
                                    className="flex items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5 text-[16px] font-bold  leading-normal text-black  "
                                    onClick={() => setOpen(!open)}>
                                    Mindmap
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
                        {/*<div className='flex flex-col justify-center items-center  '>
                            <div className='flex items-center gap-x-4 mb-6'>
                                <div>
                                    <Image src="/images/Profile.svg" width={50} height={50} alt='' />
                                </div>
                                <div className='text-[16px] text-[#625BF7] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                            </div>
                            <div className='bg-[#03003D] mb-6 py-[34px] gap-y-28 px-[50px] rounded-[10px] items-center flex flex-col justify-center'>
                                <div className='flex justify-around gap-x-[250px] '>
                                    <div className='bg-[#46F7B7] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                    <div className='bg-[#1B3CE9] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className='flex justify-around gap-x-[250px] '>
                                    <div className='bg-[#FFA775] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                    <div className='bg-[#CC0707] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            </div>*/}

                    </div>

                    {
                        data && !load ?
                            <Mindmap options={options} showMap={true} mind={mind} data={data} topic={topic} />
                            : <div
                                style={{
                                    width: "100%",
                                    height: "70%",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.4rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>{!load && !data ? 'Enter Topic In the Input 🤔' : 'Loading...'}</div>
                    }
                    <div className='bg-white  w-full mb-4  z-10'>
                        <Search topic={topic} load={load} setTopic={setTopic} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart;