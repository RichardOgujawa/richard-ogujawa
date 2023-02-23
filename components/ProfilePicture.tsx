//Next Imports
import Image from 'next/image'
//MAIN COMPONENTS
const ProfilePicture = () => {
    return (
        <div className='overflow-hidden rounded-full w-[150px] relative aspect-square border-col-neutral-500 border-4'>
            <Image
                src="/img/profile-pic.png"
                alt=" "
                objectFit = "cover"
                sizes="100"
                layout = "fill"
            />
        </div>
    )
}
export default ProfilePicture