//Next Imports
import Image from 'next/image'
//External Imports
import { FiExternalLink } from 'react-icons/fi'
//Props
interface Props {
  index: number
  gap?: string
  slide?: number
  item: projectProps
}
export interface projectProps {
  _id?: string
  status?: string
  mainUrl?: string
  githubUrl?: string
  description?: string
  shortDescription?: string
  img?: string
  date?: number
  technologyUsed?: string[]
  title?: string
  projectId?: string
  type?: string
}
//MAIN COMPONENT
const Project = ({ item }: Props) => {
  return (
    <a href={item.mainUrl ?? ''} target="_blank" rel="noreferrer">
      <div
        className={`carousel-item relative grid aspect-square w-[225px] cursor-pointer overflow-hidden border-[7px]`}
      >
        <div
          className={`relative aspect-square w-[250px] justify-center ease-out`}
        >
          <div
            id="project-img-pointer"
            className="absolute top-0 left-0 h-full w-full bg-black"
          />
          <Image
            src={item.img || ''}
            alt=" "
            objectFit="cover"
            sizes="100"
            layout="fill"
            objectPosition="top center"
            className=" transition-all duration-700 hover:scale-110 hover:opacity-70"
            id="project-img"
          />
          {item.status && (
            <div
              className={`${
                item.status == 'Completed'
                  ? 'bg-green-600/50 text-green-200 '
                  : 'bg-blue-600/60 text-blue-200'
              } pointer-events-none absolute top-0 left-0 m-3 rounded-sm py-1  px-2 backdrop-blur-md`}
            >
              <span className="">{item.status}</span>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 h-[45%] w-full bg-white px-4 pt-2 text-sm">
          <div className="flex w-full justify-between pt-1 text-col-neutral-900">
            <p className="cursor-pointer line-clamp-1 hover:underline">
              {item.title}
            </p>
            <FiExternalLink />
          </div>
          <p className="w-[100%] overflow-hidden text-ellipsis text-col-neutral-250 line-clamp-2">
            {item.shortDescription}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Project
