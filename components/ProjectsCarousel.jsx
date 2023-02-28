//React Imports
import React, { useEffect, useState, useRef } from "react";
//Next Imports
import Image from "next/image";
import Link from "next/link.js";
//Data Imports
import projectsData from "../data/projectsData.js";
//External Imports
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Project from './Project'

//MAIN COMPONENT
const ProjectsCarousel = () => {
    const [slide, setSlide] = useState(0); //This will keep track of which slide we are on
    const [translation, setTranslation] = useState(0); //This will keep track of how far along the slider has moved
    // const ref = React.useRef(null); 
    // const refWidth = ref.current?.clientWidth
    const imgW = 218; //Image Width
    const forwards = () => {
        if(slide < 2) {
            setSlide(slide < projectsData.length - 1 ? slide + 1 : slide); //Move carousel forward
        } else {
            setSlide(2)
        }
    }
    const backwards = () => setSlide(slide > 0 ? slide - 1 : slide); //Move carousel backwards
    useEffect(() => {
        setTranslation(slide * imgW);
    }, [slide]);
    return (
        <>
            <div className="relative overflow-hidden h-[300px]">
                {/*Populating carousel with slides*/}
                <ul
                    className={`flex mt-16 gap-4 transition duration-500 select-none`}
                    style={{
                        transform: `translateX(-${translation}px)`,
                    }}>
                    {projectsData.map((item, index) => {
                        if (index > 2) {
                        return null
                        }
                        else {
                        return (
                            <li key={index}
                            className={`bg-white transition duration-500 ${index === slide ? "opacity-100 scale-105" : "opacity-70"
                                }`}>
                                <Project index={index} item={item} slide={slide} />
                            </li>
                        )}
                    })}
                </ul>
                {/*Backwards Arrow for Carousel*/}
                <div
                    className="absolute left-0 bg-black shadow-none hover:shadow-[0px_5px_25px_darkgray] top-1/2 -translate-y-[40%] w-[30px] aspect-square grid place-content-center hover:-translate-y-1/2 cursor-pointer transition duration-700 text-xl text-white"
                    onClick={backwards}>
                    <BiChevronLeft />
                </div>
                {/*Forwards Arrow for Carousel */}
                <div
                    className="absolute right-0 bg-black shadow-none hover:shadow-[0px_5px_25px_darkgray] top-1/2 -translate-y-[40%] w-[30px] aspect-square grid place-content-center hover:-translate-y-1/2 cursor-pointer transition duration-700 text-xl text-white"
                    onClick={forwards}>
                    <BiChevronRight />
                </div>
            </div>
            {/*Slide indicators*/}
            <div className="flex gap-4 mt-14 h-fit w-full justify-center">
                {projectsData.map((item, index) => {
                    if (index > 2) {
                    return null
                    } else {
                    return (<span key={index} onClick = {() => setSlide(index)}
                        className={` min-w-[40px] h-[5px] hover:bg-white cursor-pointer transition duration-500 ${index === slide ? "bg-white" : "bg-white/60"
                            }`}
                    ></span>)
                    }
                }
                )}
            </div>
            {/*See rest of portfolio link*/}
            <Link href="/portfolio">
                <span className="underline text-white mt-10 w-full flex justify-center cursor-pointer">{" "} See More</span>
            </Link>
        </>
    );
};
export default ProjectsCarousel
