//Styles
import '../styles/globals.css'
//Next Imports
import Head from 'next/head.js'
import type { AppProps } from 'next/app'
//Components
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="./r-favicon-with-bg.ico" />
        <link rel="mask-icon" href="./r-favicon.png"
          color="#000000"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
