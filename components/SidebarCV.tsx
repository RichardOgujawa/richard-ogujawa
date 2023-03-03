//Next Imports
import Image from 'next/image'
import Link from 'next/link.js' 
//React Imports
import React, { useEffect, useState } from 'react'
//Component Imports
import Eth from './Eth'
import ProfilePicture from './ProfilePicture'
import SkillsCarousel from './SkillsCarousel'
import ProjectsCarousel from './ProjectsCarousel'
//Props
interface Props {
    hide?: boolean,
}
//MAIN COMPONENT
const SidebarCV = ({ hide }: Props) => {
    const [transparency, setTransparency] = useState(0.3)
    const [scrollY, setScrollY] = useState(0);
    const changeTransparency = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollY(e.currentTarget.scrollTop);
        console.log(scrollY)
    }
    useEffect(()=> {
        console.log("Use effect:" + scrollY)
        let value = Math.floor(scrollY * 0.06) / 10 - 0.2

        if(value > 1) {
            setTransparency(1)
        }
        else if (value < 0.3) {
            setTransparency(0.3)
        }
        else {
            setTransparency(value);
        }
    }, [scrollY])

    return (
        <div onScroll={e => changeTransparency(e)} className={`${hide ? "hidden w-0" : "block w-full"} md:block md:w-[40%] xl:w-1/4 h-full relative sm:fixed top-[7vh] right-0 bg-mountain bg-cover border-l border-col-neutral-500 overflow-scroll pb-2`}>
            {/*Black Overlay*/}
            <div className={`w-full h-[100vh] fixed transition duration-500 ease-out -z-20`} 
             style={{
                backgroundColor: `rgba(0, 0, 0, ${transparency})`,
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
                <p className='w-full px-6 mb-5 text-col-neutral-100 text-justify '>A recent graduate with a flexible schedule ready to help you and your team achieve your company’s goals. Considered to be hardworking, punctual, driven, and capable of working with a team or on own initiative. Always looking for opportunities to learn and grow. 
                </p>
       
            </section>

            {/*Skills Section*/}
            <section className='text-col-neutral-100 flex w-full px-6 justify-between py-2 bg-black-gradient'>
                <span>Skills:</span>
                <Link href="/skills">
                    <span className='link underline cursor-pointer'>See full list of skills</span>
                </Link>
            </section>
            <SkillsCarousel />
            {/*Projects Section*/}
            <ProjectsCarousel />
            {/*Footer Section*/}
            <footer className='border-t-gray-500 border-t-2 text-col-neutral-250 grid justify-center mt-6 py-2 sm:h-[10vh] md:text-transparent md:border-t-0'>
                <p>&copy; 2023</p>
            </footer>
        </div>
    )
}
export default SidebarCV