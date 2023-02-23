//Next Imports
import Image from 'next/image'
import Link from 'next/link.js'
//External Imports
import { FiExternalLink } from 'react-icons/fi'
//Props
interface Props {
    index: number,
    slide?: number,
    item: obj,
}
interface obj {
    projectName: string,
    mainUrl: string,
    githubUrl: string,
    description: string,
    img: string,
    date: number,
    technologyUsed: string[],
}
//MAIN COMPONENT
const Project = ({ index, slide, item }: Props) => {
    return (
        <Link href={`${item.mainUrl}`}>
            <div className="relative carousel-item w-[225px] aspect-square grid place-content-center overflow-hidden border-[7px] cursor-pointer">
                <div className={`relative w-[218px] aspect-square`}>
                    <Image
                        src={item.img}
                        alt=" "
                        objectFit="cover"
                        sizes="100"
                        layout="fill"
                        objectPosition="top center" />
                </div>
                <div className="absolute w-full h-[45%] bg-white bottom-0 px-4 pt-2 text-sm">
                    <div className="flex w-full justify-between pt-1 text-col-neutral-900">
                        <p className='cursor-pointer hover:underline'>{item.projectName}</p>
                        <FiExternalLink />
                    </div>
                    <p className="w-[100%] overflow-hidden text-ellipsis line-clamp-2 text-col-neutral-250">
                        {item.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Project