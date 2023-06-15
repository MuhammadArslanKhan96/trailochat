import '@/styles/globals.css';
import './components/css/jsmind.css'
import UseMarkdown from "./components/js/useMarkdown";
import type { AppProps } from 'next/app'
import React from 'react'
import { createContext } from "react";
import Script from 'next/script';
export const DataContext = createContext(null);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
<Script src='./components/js/jsmind.draggable-node.js' />
    <UseMarkdown >
      <Component {...pageProps} />
    </UseMarkdown >
    </>
  )
}
