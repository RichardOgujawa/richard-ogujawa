//Next Imports
import Image from 'next/image'
//External Imports
import { FiExternalLink } from 'react-icons/fi'
//Props
interface Props {
    index: number,
    gap?: string,
    slide?: number,
    item: projectProps,
}
export interface projectProps {
    _id?: string,
    mainUrl?: string,
    githubUrl?: string,
    description?: string,
    shortDescription?: string,
    img?: string,
    date?: number,
    technologyUsed?: string[],
    title?: string,
    projectId?: string,
    type?: string,
}
//MAIN COMPONENT
const Project = ({item}: Props) => {
    return (
        <a href={item.mainUrl ?? ""} target="_blank" rel="noreferrer">
            <div className={`relative carousel-item w-[225px] aspect-square grid overflow-hidden border-[7px] cursor-pointer`}>
                <div className={`relative w-[218px] hover:scale-110 aspect-square transition duration-700 ease-out`}>
                    <Image
                        src={item.img ?? ""}
                        alt=" "
                        objectFit="cover"
                        sizes="100"
                        layout="fill"
                        objectPosition="top center" />
                </div>
                <div className="absolute w-full h-[45%] bg-white bottom-0 px-4 pt-2 text-sm">
                    <div className="flex w-full justify-between pt-1 text-col-neutral-900">
                        <p className='cursor-pointer hover:underline'>{item.title}</p>
                        <FiExternalLink />
                    </div>
                    <p className="w-[100%] overflow-hidden text-ellipsis line-clamp-2 text-col-neutral-250">
                        {item.shortDescription}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Project