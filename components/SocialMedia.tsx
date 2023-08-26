//Next Imports
import Link from 'next/link'
//React Imports
import React from 'react'
//External Exports
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
//Props
interface Props {
  column?: boolean
  gap?: string
  textSize?: string
}
//MAIN COMPONENT
export const SocialMedia = ({ column, gap, textSize }: Props) => {
  return (
    <ul
      className={`flex ${textSize} ${gap} menuItems ${
        column ? 'flex-col' : ''
      }`}
    >
      {/*Github Link*/}
      <li>
        <Link href="https://github.com/RichardOgujawa">
          <a className="social-media-icon">
            <AiFillGithub />
          </a>
        </Link>
      </li>
      {/*Behance Link*/}
      <li>
        <Link href="https://www.behance.net/richardogujawa">
          <a className="grid h-full items-center">
            <AiFillBehanceSquare />
          </a>
        </Link>
      </li>
      {/*LinkedIn Link*/}
      <li>
        <Link href="https://www.linkedin.com/in/ogujawa-richard/">
          <a className="grid h-full items-center">
            <AiFillLinkedin />
          </a>
        </Link>
      </li>
    </ul>
  )
}
