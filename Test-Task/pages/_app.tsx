import '../styles/global.scss'
import * as React from "react"
import { AppProps } from "next/app"

const MyApp: React.FC<AppProps> = ({ Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp;