//React Imports
import type { NextPage } from 'next'
//Next Imports
import Head from 'next/head'
import Link from 'next/link'
//Component Imports
import Layout from '../components/Layout'
import SidebarCV from '../components/SidebarCV'
import SkillsList from '../components/SkillsList'
import GridTop from '../components/GridTop'
//Data Imports
import skillsJSON from '../data/skillsData'
import skillsInfo from '../data/textTop.json'
//Function that renders custom top component of grid in layout component
function ContactTopComponent() {
    return GridTop({
        title: skillsInfo.skills.title,
        subtitle: skillsInfo.skills.subtitle,
    })
}
//MAIN COMPONENT
const Skills: NextPage = () => {
    return (
        <>
            <Head>
                <title>Richard Ogujawa | Skills</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout GridTop={ContactTopComponent} innerContainer>
                <div className='grid place-items-center'>
                    <SkillsList />
                </div>
            </Layout>
            <SidebarCV hide/>
        </>
    )
}
export default Skills