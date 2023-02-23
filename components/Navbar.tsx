// React Imports
import { useState } from 'react'
// Next Imports
import Link from 'next/link.js'
//Component Imports
import MainMenu from './MainMenu'
import MobileMenu from './MobileMenu'
import { SocialMedia } from './SocialMedia'
//External Imports
import { FaBars } from 'react-icons/fa'
//MAIN COMPONENT
const Navbar = () => {
    //Managing state for Mobile Menu
    const [active, setActive] = useState(false);
    const menuHandler = () => {
        setActive(current => !current)
    }
    return (
        <header className='w-full grid h-[7vh] bg-col-neutral-900 border-b border-col-neutral-500 fixed place-items-center z-50'>
            {/*Main Navigation*/}
            <nav className='w-full h-full bg-col-neutral-900 grid grid-cols-2 md:grid-cols-3 text-col-neutral-100 justify-center px-[2rem]'>
                {/*Logo*/}
                <div className='grid justify-start items-center'>
                    <Link href="/">
                        <span className="cursor-pointer font-serif">R.</span>
                    </Link>
                </div>
                {/*Main Menu*/}
                <div className="hidden md:grid justify-center h-full">
                    <MainMenu />
                </div>
                {/*Social Media Links*/}
                <div className="hidden md:grid justify-end items-center">
                    <SocialMedia gap='gap-5' textSize='text-xl' />
                </div>
                {/*Mobile Menu Hamburger Icon*/}
                <div className="flex md:hidden justify-end items-center cursor-pointer">
                    <FaBars onClick={menuHandler} />
                </div>
            </nav>
            {/*Mobile Menu*/}
            <MobileMenu active={active} click={menuHandler} />
        </header>
    )
}
export default Navbar