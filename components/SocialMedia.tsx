//Next Imports
import Link from 'next/link'
//React Imports
import React from 'react'
//External Exports
import { AiFillGithub, AiFillBehanceSquare, AiFillYoutube } from 'react-icons/ai'
//Props
interface Props {
    column?: boolean,
    gap?: string,
    textSize?: string,
}
//MAIN COMPONENT
export const SocialMedia = ({ column, gap, textSize }: Props) => {
    return (
        <ul className={`flex ${textSize} ${gap} menuItems ${column ? "flex-col" : ""}`}>
            {/*Github Link*/}
            <li>
                <Link href="https://github.com/RichardOgujawa">
                    <a className='social-media-icon'>
                        <AiFillGithub />
                    </a>
                </Link>
            </li>
            {/*Behance Link*/}
            <li>
                <Link href="https://www.behance.net/richardogujawa">
                    <a className='h-full grid items-center'>
                        <AiFillBehanceSquare />

                    </a>
                </Link>
            </li>
            {/*Youtube Link*/}
            <li>
                <Link href="https://www.youtube.com/channel/UCSSp-RJ-X0rOIIQ1k5CJZ1A">
                    <a className='h-full grid items-center'>
                        <AiFillYoutube />

                    </a>
                </Link>
            </li>
        </ul >
    );
}
