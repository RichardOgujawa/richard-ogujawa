import Link from 'next/link'
import React from 'react'

import { AiFillGithub, AiFillBehanceSquare, AiFillYoutube } from 'react-icons/ai'

interface Props {
    column?: boolean,
    gap?: string,
    textSize?: string,
}
export const SocialMedia = ({ column, gap, textSize }: Props) => {
    return (
        <ul className={`flex ${textSize} ${gap} menuItems ${column ? "flex-col" : ""}`}>
            <li>
                <Link href="https://github.com/RichardOgujawa">
                    <a className='h-full grid items-center' >
                        <AiFillGithub />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.behance.net/richardogujawa">
                    <a className='h-full grid items-center' >
                        <AiFillBehanceSquare />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/channel/UCSSp-RJ-X0rOIIQ1k5CJZ1A">
                    <a className='h-full grid items-center' >
                        <AiFillYoutube />
                    </a>
                </Link>
            </li>
        </ul >
    )
}
