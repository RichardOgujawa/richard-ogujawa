//React Imports
import React, { useEffect, useState, useRef } from "react";
//Next Imports
import Image from "next/image";
import Link from "next/link.js";
//Data Imports
import projectsData from "../data/projectsData.js";
//External Imports
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
//MAIN COMPONENT
const ProjectsCarousel = () => {
    const [slide, setSlide] = useState(0); //This will keep track of which slide we are on
    const [translation, setTranslation] = useState(0); //This will keep track of how far along the slider has moved
    // const ref = React.useRef(null); 
    // const refWidth = ref.current?.clientWidth
    const imgW = 218; //Image Width
    const forwards = () => setSlide(slide < projectsData.length - 1 ? slide + 1 : slide); //Move carousel forward
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
                        return (
                            <li
                                key={index}
                                className={`bg-white transition duration-500 ${index === slide ? "opacity-100 scale-105" : "opacity-70"
                                    }`}>
                                <div className="relative w-[225px] aspect-square border-red-500 grid place-content-center caro">
                                    <div className={`relative w-[218px] aspect-square`}>
                                        <Image
                                            src={item.img}
                                            alt=" "
                                            objectFit="cover"
                                            sizes="100"
                                            layout="fill"
                                            objectPosition="top center" />
                                    </div>
                                    <div className="absolute w-full h-[40%] bg-white bottom-0 px-4 pt-2 text-sm">
                                        <div className="flex w-full justify-between pt-1">
                                            <p>{item.projectName}</p>
                                            <Link href={`${item.url}`} className="cursor-pointer">
                                                <FiExternalLink />
                                            </Link>
                                        </div>
                                        <p className="w-[100%] overflow-hidden text-ellipsis line-clamp-2 text-col-neutral-250">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
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
            <div className="flex gap-4 mt-14 w-full h-fit justify-center">
                {projectsData.map((item, index) => (
                    <span key={index} onClick = {() => setSlide(index)}
                        className={` min-w-[40px] h-[5px] hover:bg-white cursor-pointer transition duration-500 ${index === slide ? "bg-white" : "bg-white/60"
                            }`}
                    ></span>
                ))}
            </div>
            {/*See rest of portfolio link*/}
            <Link href="/portfolio">
                <span className="underline text-white mt-10 w-full flex justify-center">{" "} See More</span>
            </Link>
        </>
    );
};
export default ProjectsCarousel;
