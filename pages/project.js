import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Configuration, OpenAIApi } from 'openai';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { MdEdit } from "react-icons/md";
import { RxCross1 } from 'react-icons/rx';
import { v4 as uuidv4 } from "uuid";
import useOutside from '../hooks/useOutside';
import Header from './Header';
import Search from './Search';
import Side from './Side';
import { StrictModeDroppable } from '../libs/StrictModeDroppable';
import { UserContext } from "./_app";
import Column from './components/Column';
import TrelloPopup from './components/TrelloPopup';

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
                mapId: data.mapId,
            }]
            let d = newtrello.filter((obj, index) => {
                return (index === newtrello.findIndex((o) => (obj.mapId === o.mapId)));
            })
            setTrelloTickets(d)
            addMyDocs(d)
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
                const newData = {
                    ...int, mapId: newId, subtopics: int.subtopics.map(i => {
                        count++
                        let id = uuidv4();
                        return ({
                            ...i, created_at: count, id: count, keys: id, subtopics: i.subtopics.map(i => {

                                let sid = uuidv4();
                                subsubtopicsIds.push(sid)
                                return ({ ...i, keys: sid })
                            })
                        })
                    })
                };
                setData(newData)
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
    }, [router]);


    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };



    const onDragEnd = (result) => {
        let newOrder = data.subtopics;
        // dropped nowhere
        if (!result.destination) {
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // reordering column
        if (result.type === "COLUMN") {
            const reorderedorder = reorder(newOrder, source.index, destination.index);

            setData(pre => ({ ...pre, subtopics: reorderedorder }));

            return;
        }

        // Set start and end variables
        const start = data.subtopics.filter(i => i.keys === source.droppableId)[0]
        const end = data.subtopics.filter(i => i.keys === destination.droppableId)[0]
        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            let arr = data.subtopics;
            const newList = start.subtopics.filter(
                (_, idx) => idx !== source.index
            )

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.subtopics[source.index])
            const [removed] = arr.splice(arr.indexOf(start), 1);
            arr.splice(data.subtopics.indexOf(removed), 0, { ...start, subtopics: newList })

            setData(pre => ({ ...pre, subtopics: arr }));
            return null
        } else {
            // If start is different from end, we need to update multiple columns
            // Filter the start list like before
            const newStartList = start.subtopics.filter(
                (_, idx) => idx !== source.index
            )

            // Create a new start column
            const newStartCol = { ...start, subtopics: newStartList }

            // Make a new end list array
            const newEndList = end.subtopics

            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.subtopics[source.index])

            // Create a new end column
            const newEndCol = {
                ...end,
                subtopics: newEndList
            }
            let arr = data.subtopics
            const [removed] = arr.splice(arr.indexOf(start), 1);
            arr.splice(data.subtopics.indexOf(removed), 0, newStartCol)
            const [removedItem] = arr.splice(arr.indexOf(end), 1);
            arr.splice(data.subtopics.indexOf(removedItem), 0, newEndCol)
            // const ordered = reorder(arr, arr.indexOf(newEndCol), arr.indexOf(newStartCol));
            // Update the state
            setData(state => ({ ...state, subtopics: arr }))
            return null
        }

    };

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
                            {data && !load ? <>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <StrictModeDroppable
                                        droppableId="board"
                                        type="COLUMN"
                                        direction="horizontal"
                                    >
                                        {(provided) => (
                                            <div className={'flex gap-x-7 '} ref={provided.innerRef} {...provided.droppableProps}>
                                                {data.subtopics.map((column, idx) => {

                                                    return (
                                                        <>
                                                            <Column
                                                                setPopup={setPopup}
                                                                key={column.keys}
                                                                keys={idx} onDragEnd={onDragEnd}
                                                                setCreatePopup={setCreatePopup} setData={setData} column={column} data={data} />
                                                        </>

                                                    )
                                                })}
                                                {provided.placeholder}

                                            </div>
                                        )}
                                    </StrictModeDroppable>
                                </DragDropContext>
                                <button className='px-8 py-3  gap-1.5 bg-blue-400 text-white min-w-fit h-fit rounded text-sm flex justify-between items-center' onClick={function () {
                                    const id = uuidv4()
                                    setData(pre => ({
                                        ...pre, subtopics: [...pre.subtopics, {
                                            topic: 'Title',
                                            created_at: pre.subtopics[pre.subtopics.length - 1].created_at,
                                            keys: id,
                                        }]
                                    }));

                                    setSubtopicIds(pre => ([...pre, id]))
                                }}>
                                    <p>+</p>
                                    <p>Add another list</p>
                                </button>
                            </>
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
