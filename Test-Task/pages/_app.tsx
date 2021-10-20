import '../styles/global.scss'
import * as React from "react"
import { AppProps } from "next/app"
import SentContextProvider from '../shared/SentContextProvider'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache
})



const MyApp: React.FC<AppProps> = ({ Component, pageProps}: AppProps) => {
  return (
      <ApolloProvider client={client}>
            <SentContextProvider>
                <Component {...pageProps} />
            </SentContextProvider>
          </ApolloProvider>
  )
}

export default MyApp;