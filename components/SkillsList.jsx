//Data Imports
import skillsData from '../data/skillsData'
//MAIN COMPONENT
const SkillsList = () => {
    return (
        <ul className="w-full inner-container skills-list" >
            {
                skillsData.map((item, index) => {
                    return (
                        <li key={index} className="text-col-neutral-250 border-col-neutral-500 w-full">
                            <a className='w-full h-full py-1 flex justify-between'>
                                {item.skill}
                            </a>
                        </li >
                    )
                })
            }
        </ul >
    )
}
export default SkillsList