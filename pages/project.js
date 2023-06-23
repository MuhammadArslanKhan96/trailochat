import React, { useContext, useEffect, useRef, useState } from 'react'
import Search from './Search'
import Header from './Header'
import { RxCross1 } from 'react-icons/rx';
import { UserContext } from "./_app";
import Side from './Side'
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { Configuration, OpenAIApi } from 'openai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import TrelloPopup from './components/TrelloPopup';
import useOutside from '../hooks/useOutside';


const Project = () => {
    const [data, setData] = useState()
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false)
    const [topic, setTopic] = useState('');
    const [createPopup, setCreatePopup] = useState('');
    const [popup, setPopup] = useState(false);
    const [input, setInput] = useState('');
    const [text, setNewText] = useState('');
    const router = useRouter()
    const { user, trelloTickets, setTrelloTickets } = useContext(UserContext);
    const newId = uuidv4()
    const popupRef = useRef()
    useOutside(popupRef, setPopup)
    useOutside(popupRef, setCreatePopup)
    useEffect(() => {
        if (!user) {
            router.replace(`/signin`)
        }
        // eslint-disable-next-line
    }, [user])
    const addMyDocs = async (tickets) => {
        await axios.post(`/api/trellotickets/addtrello?user=${user.id}`, (tickets), {
            timeout: 300000
        })
    };
    useEffect(() => {
        if (data) {
            let newtrello = [...trelloTickets.filter(i => i.mapId !== data.mapId), {
                ...trelloTickets.filter(i => i.mapId === data.mapId)[0],
                topic: input ? input : data.topic,
                data: data,
                updated_at: new Date().getTime(),
                user: user.id,
                mapId: data.mapId
            }]
            setTrelloTickets(newtrello.filter((obj, index) => {
                return index === newtrello.findIndex((o) => obj.mapId === o.mapId);
            }))
            addMyDocs(newtrello.filter((obj, index) => {
                return index === newtrello.findIndex((o) => obj.mapId === o.mapId);
            }))
        }
        // eslint-disable-next-line
    }, [data]);
    const handleClick = async () => {

        if (topic !== '') {
            try {
                let count = 0;
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
                setData({
                    ...int, mapId: newId, subtopics: int.subtopics.map(i => {
                        count++
                        return ({ ...i, created_at: count })
                    })
                })
                setLoad(false)
            } catch (error) {
                setLoad(false)

            }
        }
    }

    useEffect(() => {
        if (router && router.query.topic && trelloTickets.length) {
            setLoad(true);
            setInput(trelloTickets.filter(i => i.mapId === router.query.topic)[0].topic)
            setData({
                ...trelloTickets.filter(i => i.mapId === router.query.topic)[0].data, mapId: router.query.topic
            });
            setLoad(false)
        }
        // eslint-disable-next-line
    }, [router])

    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] overflow-hidden h-screen relative flex flex-col scrollStyle'>
                    <Header />

                    <div className='flex flex-col justify-between'>
                        <div className='flex justify-between px-[90px] py-[20px]'>

                            <div className='flex items-center gap-x-3'>
                                <div className='text-[#625BF7]  font-bold'><input type="text" value={input} onChange={e => {
                                    setInput(e.target.value)
                                    if (data) setData(pre => ({ ...pre, topic: input }))
                                }} placeholder='Project Name' className='placeholder:text-[#625BF7] w-fit focus:online-none  outline-none focus:border-0' required /></div>
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
                        <div className='flex justify-start h-[80vh] pr-16 lg:ml-14 overflow-x-scroll gap-x-7 scrollStyle'>
                            {data && !load ? <>{data.subtopics.sort(function (a, b) {
                                return b.created_at - a.created_at
                            }).map((column, idx) => (
                                <div className='flex items-start justify-center ' key={idx}>
                                    <div className='bg-[#DDDFE7] relative p-[16px] min-w-[16rem] max-w-[16rem] rounded-[4px]'>
                                        <div className='text-[18px] py-[10px]'>

                                            <input className='bg-transparent text-[18px] w-48 absolute top-3 z-10 outline-none focus:outline-none focus:border-none' type="text" value={column.topic || column.name} onChange={e => {
                                                // setSelected(e.target.value)
                                                setData({
                                                    ...data, subtopics: [...data.subtopics.filter((i) => (i.topic !== column.topic || i.name !== column.name || i !== column)), {
                                                        ...data.subtopics.filter((i) => (i.topic === column.topic || i.name === column.name || i === column))[0],
                                                        name: e.target.value, topic: e.target.value,
                                                    }]
                                                })
                                            }} />
                                        </div>

                                        <div className="flex flex-col overflow-y-scroll scrollStyle max-h-[60vh] mt-4 gap-y-3">
                                            {column.subtopics && column.subtopics.length ? column.subtopics.map((item, index) => (
                                                <div className="px-4 py-2 bg-white rounded-lg cursor-pointer" onClick={() => {
                                                    setPopup([column, item])
                                                }} key={index}>
                                                    {/* <div className="flex justify-between gap-x-40"> */}
                                                    <div className="flex flex-col gap-y-[14px]">
                                                        {/* <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                            <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div> */}
                                                        {/* <div className='flex flex-col gap-y-3'> */}
                                                        {item && item.cover ? <div className='flex items-center justify-center'><Image src={item.cover} width={50} height={50} className='w-full h-w-full ' alt='' /></div> : null}
                                                        <p className="text-[14px] break-words max-w-[12rem] text-[#1B1C1D]">
                                                            {item.topic || item.name || item}
                                                        </p>
                                                        {/* </div> */}

                                                        {/* <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                            <div>
                                                                <Image src="/images/calendar_today.svg" width={10} height={11} alt='' />
                                                            </div>
                                                            <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                        </div> */}
                                                    </div>

                                                    {/* </div> */}

                                                </div>)) : null}
                                            <div className="px-[24px] cursor-pointer py-2 bg-white rounded-lg" onClick={() => {
                                                setCreatePopup(column.topic)
                                            }}>
                                                <div className='flex justify-center gap-x-1 items-center'> <p className="text-[14px] text-[#1B1C1D]">
                                                    +
                                                </p> <p>Add a task</p></div>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}


                                <button className='px-4 py-2 min-w-fit gap-1.5 bg-blue-400 text-white h-fit rounded text-sm w-full flex justify-between items-start' onClick={function () {
                                    setData(pre => ({
                                        ...pre, subtopics: [...pre.subtopics, {
                                            topic: 'Title'
                                        }]
                                    }))
                                }}>
                                    <p>+</p>
                                    <p>Add another list</p>
                                </button>



                            </> : <div
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


            <div zIndex={'1000'} position={'relative'}>
                {popup && (
                    <div
                        className='flex items-center z-10 fixed flex-row justify-center top-0'
                    >
                        <div className='bg-black/80 w-screen h-screen'></div>
                        <div
                            ref={popupRef}
                            className={'scrollStyle max-lg:w-[90vw] lg:w-[1000px] md:p-4 absolute overflow-y-scroll min-h-[97vh] max-h-[97vh] bg-white rounded-2xl text-black'}
                        ><div className='relative z-20'>
                                <div
                                    className='w-fit cursor-pointer absolute top-2 right-2'
                                    onClick={() => setPopup(undefined)}
                                >
                                    <RxCross1 color={'black'} size={16} />
                                </div>
                            </div>
                            {popup[1].cover ? <div className='flex items-center justify-center'><Image src={popup[1].cover} alt='' width={50} height={50} className='w-1/4 h-1/4' /></div> : ''}



                            <TrelloPopup setPopup={setPopup} popup={popup} data={data} setData={setData} />

                        </div>
                    </div>
                )}
                {createPopup && (
                    <div
                        className='flex items-center z-10 fixed flex-row justify-center top-0'
                    >
                        <div className='bg-black/80 w-screen h-screen'></div>
                        <div
                            ref={popupRef}
                            className={'scrollStyle max-lg:w-[90vw] lg:w-[1000px] md:p-4 absolute overflow-y-scroll min-h-[19vh] max-h-[19vh] bg-white rounded-2xl text-black'}
                        ><div className='relative z-20'>
                                <div
                                    className='w-fit cursor-pointer absolute top-2 right-2'
                                    onClick={() => { setCreatePopup(''); setNewText('') }}
                                >
                                    <RxCross1 color={'black'} size={16} />
                                </div>
                            </div>

                            <div className='p-2 relative'>
                                <textarea rows={5} value={text} onChange={e => setNewText(e.target.value)} className='scrollStyle border-none outline-none focus:outline-none focus:border focus:border-solid rounded p-4 focus:border-blue-500 w-full resize-none ' placeholder='Write Task..'></textarea>
                                <button onClick={() => {
                                    setData(pre => ({
                                        ...pre, subtopics: [...pre.subtopics.filter(i => i.topic !== createPopup), {
                                            ...pre.subtopics.filter(i => i.topic === createPopup)[0],
                                            subtopics: [...pre.subtopics.filter(i => i.topic === createPopup)[0].subtopics, {
                                                topic: text,
                                                name: text
                                            }]
                                        }]
                                    }))
                                    setCreatePopup('')
                                    setNewText('')
                                }} className="bg-blue-400 absolute bottom-5 right-5 px-8 py-2 text-white rounded">Add</button>
                            </div>


                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Project
