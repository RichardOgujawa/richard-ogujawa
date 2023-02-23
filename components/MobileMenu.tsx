//Component Imports
import MainMenu from './MainMenu'
//External Imports
import { IoCloseSharp } from 'react-icons/io5'
import { SocialMedia } from './SocialMedia'
//Props
interface Props {
    active: boolean,
    click: any,
}
//MAIN COMPONENT
const SideNav : React.FC<Props> = ({ active, click }) => {
    return (
        <nav className='fixed'>
            <div className={`mobile-menu ${active ? "translate-x-0" : "translate-x-full"}`}>
                {/*Close Button*/}
                <div className="grid items-start justify-end p-6">
                    <button type="button" onClick={click}>
                        <IoCloseSharp className='text-2xl' />
                    </button>
                </div>
                {/*Side Navigation Menu*/}
                <div className="grid items-start">
                    <MainMenu column underlineLeft />
                </div>
                {/*Social Media Menu*/}
                <div className="grid self-end justify-start bottom-padding pl-[2rem]">
                    <SocialMedia gap="gap-7" textSize='text-2xl' />
                </div>
            </div>
        </nav >
    )
}
export default SideNav