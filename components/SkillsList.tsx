//Data Imports
import skillsData from '../data/skillsData'
//MAIN COMPONENT
const SkillsList = (): JSX.Element => {
  return (
    <ul className="inner-container skills-list w-full">
      {skillsData.map((item, index) => {
        return (
          <li
            key={index}
            className="w-full border-col-neutral-500 text-col-neutral-250"
          >
            <a className="flex h-full w-full justify-between py-1">
              {item.skill}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SkillsList
