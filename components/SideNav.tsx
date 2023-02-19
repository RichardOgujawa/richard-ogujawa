/*Next/React Imports */
import React from 'react'
import MainMenu from './MainMenu'

/*External Imports*/
import { IoCloseSharp } from 'react-icons/io5'
import { SocialMedia } from './SocialMedia'

interface Props {
    active: boolean,
    click: any,
}

const sideBarStyle = {

}
const SideNav = ({ active, click }: Props) => {

    return (
        <nav className='fixed'>
            <div className={`sidebar top-0 h-[100vh] ${active ? "translate-x-0" : "translate-x-full"}`}>
                <div className="grid items-start justify-end p-6">
                    <button type="button" onClick={click}>
                        <IoCloseSharp className='text-2xl' />
                    </button>
                </div>
                <div className="grid items-start">
                    <MainMenu column underlineLeft />
                </div>
                <div className="grid self-end justify-start bottom-padding pl-[2rem]">
                    <SocialMedia gap="gap-7" textSize='text-2xl' />
                </div>
            </div>
        </nav >
    )
}

export default SideNav