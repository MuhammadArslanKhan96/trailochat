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
  useEffect(() => {
    const isDoingTransaction = `${localStorage.getItem('transaction')}`;
    if (isDoingTransaction === 'null') {
      localStorage.setItem('transaction', 'false')
    }
    getUserOnReload(setUser)
  }, []);

  const getData = async () => {
    const data = await axios.get(`/api/mindmaps/getmaps?user=${user?.id}`).then(r => r.data);
    const data2 = await axios.get(`/api/trellotickets/gettrello?user=${user?.id}`).then(r => r.data);
    setMaps(data)
    setTrelloTickets(data2)
  }
  useEffect(() => {
    if (user) {
      getData()
    }
    // eslint-disable-next-line
  }, [user])

  return (
    <>
      <Script src='./components/js/jsmind.draggable-node.js' />
      <UseMarkdown >
        <UserContext.Provider value={{ user, setUser, maps, setMaps, trelloTickets, setTrelloTickets }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </UseMarkdown >
    </>
  )
}
