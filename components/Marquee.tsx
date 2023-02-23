//Next Imports
import Image from 'next/image'
//Data Imports
import skillsData from '../data/skillsData'
//MAIN COMPONENT
const Marquee = () => {
    return (
        <>
            {
                skillsData.map((item, index) => {
                    return (
                        <li key={index} className="">
                            <div className='relative w-[100px] h-[40px] opacity-50 flex place-items-center'>
                                <Image
                                    src={item.img} 
                                    alt=" "
                                    objectFit="contain"
                                    sizes="100"
                                    layout="fill"
                                />
                            </div>
                        </li >
                    )})
            }
    </>
    )
}
export default Marquee