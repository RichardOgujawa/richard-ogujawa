//Component Import
import Marquee from './Marquee'
//MAIN COMPONENT
const SkillsCarousel = () => {
    return (
        <div className='border-y border-col-neutral-500/40 overflow-hidden bg-black'>
            <div className='h-[7vh] w-full flex gap-1 -translate-x-10 items-center marquee'>
                <Marquee />
            </div>
        </div>
    )
}
export default SkillsCarousel