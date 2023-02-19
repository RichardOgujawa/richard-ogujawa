//Styles
import '../styles/globals.css'
//Next Imports
import Head from 'next/head'
import type { AppProps } from 'next/app'
//Components
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
