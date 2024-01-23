//Next Imports
import Image from 'next/image'
import Link from 'next/link.js'
//React Imports
import React, { useEffect, useState } from 'react'
//Component Imports
import Eth from './Eth'
import ProfilePicture from './ProfilePicture'
import ProjectsCarousel from './ProjectsCarousel'
import SkillsCarousel from './SkillsCarousel'
//Props
interface Props {
  hide?: boolean
}
//MAIN COMPONENT
const SidebarCV = ({ hide }: Props) => {
  const [transparency, setTransparency] = useState(0.3)
  const [scrollY, setScrollY] = useState(0)
  const changeTransparency = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollY(e.currentTarget.scrollTop)
  }
  useEffect(() => {
    let value = Math.floor(scrollY * 0.06) / 10 - 0.2

    if (value > 1) {
      setTransparency(1)
    } else if (value < 0.3) {
      setTransparency(0.3)
    } else {
      setTransparency(value)
    }
  }, [scrollY])

  return (
    <div
      onScroll={(e) => changeTransparency(e)}
      className={`${
        hide ? 'hidden w-0' : 'block w-full'
      } relative top-[7vh] right-0 h-full overflow-scroll border-l border-col-neutral-500 bg-mountain bg-cover pb-2 sm:fixed md:block md:w-[40%] xl:w-1/4`}
    >
      {/*Black Overlay*/}
      <div
        className={`fixed -z-20 h-[100vh] w-full transition duration-500 ease-out`}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${transparency})`,
        }}
      ></div>
      {/*Profile Picture and Ethereum Icons*/}
      <section className="mb-[4vh] flex h-fit w-full items-center justify-center gap-6 pt-[15vh]">
        <Eth />
        <ProfilePicture />
        <Eth />
      </section>
      {/*Bio*/}
      <section className="mb-6 grid justify-center">
        <div className="grid w-full place-items-center sm:hidden">
          <h1 className="din-light text-[3rem] leading-[4.5rem] -tracking-[0.01em] text-col-primary-100 md:text-[4rem]">
            Richard Ogujawa
          </h1>
          <h2 className="mb-10 text-col-neutral-100">
            An Irish-based Web Developer & Visual Designer.
          </h2>
        </div>
        <p className="mb-5 w-full px-6 text-justify text-col-neutral-100 ">
          A Master's student, who is considered to be hardworking, punctual,
          driven, and capable of working with a team or on own initiative.
          Always looking for opportunities to learn, grow, and contribute.
        </p>
      </section>

      {/*Skills Section*/}
      <section className="flex w-full justify-between bg-black-gradient px-6 py-2 text-col-neutral-100">
        <span>Skills:</span>
        <Link href="/skills">
          <span className="link cursor-pointer underline">
            See full list of skills
          </span>
        </Link>
      </section>
      <SkillsCarousel />
      {/*Projects Section*/}
      <ProjectsCarousel />
      {/*Footer Section*/}
      <footer className="mt-6 grid justify-center border-t-2 border-t-gray-500 py-2 text-col-neutral-250 sm:h-[10vh] md:border-t-0 md:text-transparent">
        <p>&copy; 2023</p>
      </footer>
    </div>
  )
}
export default SidebarCV
