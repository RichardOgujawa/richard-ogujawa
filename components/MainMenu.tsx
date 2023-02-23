//Next Imports
import Link from 'next/link'
//Props
interface Props {
    column?: boolean,
    underlineLeft?: boolean,
}
//MAIN COMPONENT
const MainMenu = ({ column, underlineLeft }: Props) => {
    return (
        <ul className={`flex ${column ? "flex-col" : ""} gap-5 ${underlineLeft ? "menuItemsWUnderlineLeft" : "menuItemsWUnderline"}`}>
            <li><Link href="/"><a className='h-full w-full grid items-center'>Home.</a></Link></li>
            <li><Link href="/portfolio"><a className='h-full w-full grid items-center'>Portfolio.</a></Link></li>
            <li><Link href="/contact"><a className='h-full w-full grid items-center'>Contact.</a></Link></li>
            <li><Link href="/skills"><a className='h-full w-full grid items-center'>Skills.</a></Link></li>
        </ul>
    );
}

export default MainMenu