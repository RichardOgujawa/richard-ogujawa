//Next Imports
import type {NextPage } from 'next'
import Head from 'next/head'
//Component Imports
import SidebarCV from '../components/SidebarCV'
//MAIN COMPONENT
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Richard Ogujawa</title>
      </Head>
      <main className='hidden sm:grid  bg-hero-img-gone md:bg-mobile-hero-img md:bg-[right] xl:bg-hero-img w-full h-[100vh] bg-cover bg-center justify-start'>
        <div className="text-white pl-[2rem] md:pl-[4rem] w-full h-full grid items-center">
          <div className=''>
            <h1 className="text-[3rem] text-col-primary-100 din-light leading-[4.5rem] md:text-[4rem] -tracking-[0.01em]">Richard Ogujawa</h1>
            <h2 className="mb-10 text-col-neutral-100">An Irish-based Web Developer & Visual Designer.</h2>
          </div>
        </div>
        <footer className='absolute bottom-0 pl-[2rem] w-full bottom-padding'>
          <span className='text-white text-sm'>&copy; 2023 </span>
        </footer>
      </main >
      <SidebarCV/>
    </>
  )
}
export default Home

