//Next Imports
import Link from 'next/link'
//Props
interface Props {
  column?: boolean
}
const mobileMenuLinks = ['Home', 'Portfolio', 'Skills']
//MAIN COMPONENT
const MainMenu = ({ column }: Props) => {
  return (
    <ul
      className={`flex ${
        column ? 'flex-col' : 'menuItemsWUnderline'
      } gap-5 pl-4`}
    >
      {mobileMenuLinks.map((linkName, index) => {
        let link = `/${linkName.toLowerCase().trim()}`
        if (linkName === 'Home') {
          link = '/'
        }
        return (
          <li key={linkName}>
            <Link href={link}>
              <a className="grid h-fit w-full items-center">{linkName}.</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default MainMenu
