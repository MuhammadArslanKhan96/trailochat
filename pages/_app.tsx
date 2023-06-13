import '@/styles/globals.css';
import './components/css/jsmind.css'
import UseMarkdown from "./components/js/useMarkdown";
import type { AppProps } from 'next/app'
import React from 'react'
import { createContext } from "react";
export const DataContext = createContext(null);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <UseMarkdown >
      <Component {...pageProps} />
    </UseMarkdown >
    </>
  )
}
