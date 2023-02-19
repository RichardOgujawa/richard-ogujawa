// Next Imports

import Image from 'next/image'

// React Imports
import { useEffect, useState } from 'react'

// External Imports
import { FaBars } from 'react-icons/fa'

// Components 
import SideNav from './SideNav'
import MainMenu from './MainMenu'
import { SocialMedia } from './SocialMedia'
import Link from 'next/link'

const Navbar = () => {
    const [active, setActive] = useState(false);

    const menuHandler = () => {
        setActive(current => !current)
    }

    return (
        <header className='w-full grid h-[7vh] bg-col-neutral-900 border-b border-col-neutral-500 fixed place-items-center z-50'>
            <nav className='w-full h-full bg-col-neutral-900 grid grid-cols-2 md:grid-cols-3 text-col-neutral-100 justify-center px-[2rem]'>
                <div className='grid justify-start items-center'>
                    <span className="cursor-pointer font-serif">
                        <Link href="https://www.google.com" >
                            R.
                        </Link>
                    </span>
                </div>

                <div className="hidden md:grid justify-center h-full">
                    <MainMenu />
                </div>

                <div className="hidden md:grid justify-end items-center">
                    <SocialMedia gap='gap-5' textSize='text-xl' />
                </div>

                <div className="flex md:hidden justify-end items-center cursor-pointer">
                    <FaBars onClick={menuHandler} />
               
                </div>
            </nav>

            <SideNav active={active} click={menuHandler} />


        </header>
    )
}

export default Navbar