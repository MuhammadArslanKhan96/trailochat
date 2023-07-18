import '@/styles/globals.css';
import './components/css/jsmind.css'
import UseMarkdown from "./components/js/useMarkdown";
import getUserOnReload from "@/libs/getUserOnReload";
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import Script from 'next/script';
import axios from 'axios';
export const DataContext = createContext(null);
export const UserContext = createContext<any>({ user: '' });
export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<{ email?: string; name?: string; image?: string; tier?: string; id?: string; }>();
  const [maps, setMaps] = useState([]);
  const [trelloTickets, setTrelloTickets] = useState([]);
  const [Mymaps, setMyMaps] = useState([]);
  const [MytrelloTickets, setMyTrelloTickets] = useState([]);
  useEffect(() => {
    const isDoingTransaction = `${localStorage.getItem('transaction')}`;
    if (isDoingTransaction === 'null') {
      localStorage.setItem('transaction', 'false')
    }
    getUserOnReload(setUser)
  }, []);

  const getData = async () => {
    const data = await axios.get(`/api/mindmaps/getallmaps`).then(r => r.data);
    const data2 = await axios.get(`/api/trellotickets/getalltickets`).then(r => r.data);
    console.log(data, data2)
    setMaps(data)
    setTrelloTickets(data2)
  }

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    if (user) {
      setMyMaps(maps.filter(i => i.user === user.email));
      setMyTrelloTickets(trelloTickets.filter(i => i.users.includes(user.email)));
    }
    // eslint-disable-next-line
  }, [user, maps, trelloTickets])

  return (
    <>
      <Script src='./components/js/jsmind.draggable-node.js' />
      <UseMarkdown >
        <UserContext.Provider value={{ user, setUser, maps: Mymaps, setMaps, trelloTickets: MytrelloTickets, setTrelloTickets, getData }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </UseMarkdown >
    </>
  )
}
