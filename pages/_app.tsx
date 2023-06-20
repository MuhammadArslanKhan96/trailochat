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
  useEffect(() => {
    getUserOnReload(setUser)
  }, []);

  const getData = async () => {
    const data = await axios.get(`/api/mindmaps/getmaps?user=${user?.email}`).then(r => r.data);
    setMaps(data)
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
        <UserContext.Provider value={{ user, setUser, maps, setMaps }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </UseMarkdown >
    </>
  )
}
