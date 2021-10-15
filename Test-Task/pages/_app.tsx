import '../styles/global.scss'
import * as React from "react"
import { AppProps } from "next/app"
import SentContextProvider from '../shared/SentContextProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps}: AppProps) => {
  return <SentContextProvider><Component {...pageProps} /></SentContextProvider>
}

export default MyApp;