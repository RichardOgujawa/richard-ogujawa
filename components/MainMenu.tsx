//Next Imports
import Link from 'next/link'
//Props
interface Props {
    column?: boolean,
}
//MAIN COMPONENT
const MainMenu = ({ column }: Props) => {
    return (
        <ul className={`flex ${column ? "flex-col" : "menuItemsWUnderline"} gap-5 pl-4`}>
            <li><Link href="/"><a className='h-fit w-full grid items-center'>Home.</a></Link></li>
            <li><Link href="/portfolio"><a className='h-fit w-full grid items-center'>Portfolio.</a></Link></li>
            <li><Link href="/contact"><a className='h-fit w-full grid items-center'>Contact.</a></Link></li>
            <li><Link href="/skills"><a className='h-fit w-full grid items-center'>Skills.</a></Link></li>
        </ul>
    );
}
export default MainMenu