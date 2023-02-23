//Next Imports
import Image from 'next/image'
//MAIN COMPONENT
const Eth = () => {
    return (
        <div className='relative w-[13px] h-[23px]'>
            <Image
                src="/img/eth.png"
                alt=""
                objectFit='contain'
                sizes="100"
                layout="fill"/>
        </div>
    )
}
export default Eth