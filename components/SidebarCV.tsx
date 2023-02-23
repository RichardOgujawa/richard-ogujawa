//Next Imports
import Image from 'next/image'
import Link from 'next/link.js' 
//React Imports
import React, { useEffect, useRef, useState } from 'react'
//Component Imports
import Eth from './Eth'
import ProfilePicture from './ProfilePicture'
import ProjectsCarousel from './ProjectsCarousel'
import SkillsCarousel from './SkillsCarousel'
//Props
interface Props {
    hide?: boolean,
}
//MAIN COMPONENT
const SidebarCV = ({ hide }: Props) => {
    //My Attempt at changing the opacity when the scroll changes
    const [opacity, setOpacity] = useState(0)
    let scrollY = 0;
    
    const okay = (e: any) => {
        scrollY = e.target.scrollTop
        if(opacity > 1) {
            setOpacity(1)
        }
        setOpacity(Math.floor(scrollY * 0.01));
        console.log(scrollY, opacity)
        return scrollY
    }
    
    useEffect(() => {
        console.log(scrollY)
    }, [scrollY]);
    
    let opacityStr = `${opacity}`
    //End of my Attempt at changing the opacity when the scroll changes
    return (
        <div onScroll={okay} className={`${hide ? "hidden" : "block"} md:block w-full md:w-[40%] xl:w-1/4 h-full relative sm:fixed top-[7vh] right-0 bg-mountain bg-cover border-l border-col-neutral-500 overflow-scroll pb-2`}>
            {/*Black Overlay*/}
            <div className={`w-full h-[100vh] bg-black absolute transition`} 
             style={{
                opacity: `0.${opacity}`,
            }}></div>
            {/*Profile Picture and Ethereum Icons*/}
            <section className='flex w-full h-fit pt-[15vh] mb-[4vh] items-center justify-center gap-6'>
                <Eth />
                <ProfilePicture />
                <Eth />
            </section>
            {/*Bio*/}
            <section className='grid justify-center mb-6'>
                <div className='grid place-items-center w-full sm:hidden'>
                    <h1 className="text-[3rem] text-col-primary-100 din-light leading-[4.5rem] md:text-[4rem] -tracking-[0.01em]">Richard Ogujawa</h1>
                    <h2 className="mb-10 text-col-neutral-100">An Irish-based Web Developer & Visual Designer.</h2>
                </div>
                <p className='w-full px-6 mb-5 text-col-neutral-100 '>I am a recent NUIG graduate, with a degree in Film and Digital Media (BA Hons). The other subject that I’m studying is Economics. Studying Economics, and other areas of business (in my spare time), has allowed me to develop a good business mindset. This, I believe, along with my sociable personality and interest in understanding the human mind (psychology, philosophy etc.) would and has aided me greatly in the service of others.
                </p>
                <a href="/assets/richard-ogujawas-cv.pdf" target="_blank" className="grid place-items-center" download><button type="button" className='underline cursor-pointer text-white'>Check Out My CV</button></a> {/*Used a tag instead of Link components because Link component doesn't support downloads yet */}
            </section>

            {/*Skills Section*/}
            <section className='text-col-neutral-100 flex w-full px-6 justify-between py-2 bg-black-gradient'>
                <span>Skills:</span>
                <Link href="/skills">
                    <span className='link underline'>See full list of skills</span>
                </Link>
            </section>
            <SkillsCarousel />
            {/*Projects Section*/}
            <ProjectsCarousel />
            {/*Footer Section*/}
            <footer className='border-t-gray-500 border-t-2 text-col-neutral-250 grid justify-center h-[10vh] mt-6 py-2'>
                <p>&copy; 2023</p>
            </footer>
        </div>
    )
}
export default SidebarCV