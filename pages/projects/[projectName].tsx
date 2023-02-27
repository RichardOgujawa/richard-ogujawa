import { useRouter } from 'next/router'
// import Link from 'next/link.js'
import Head from 'next/head.js'
import Layout from '../../components/Layout'
import SidebarCV from '../../components/SidebarCV'
// import obj from '../../pages/portfolio'

interface Project {
    _id: string,
    mainUrl: string,
    githubUrl: string,
    description: string,
    img: string,
    date: number,
    technologyUsed: string[],
    projectId: string,
    title: string,
    shortDescription: string,
}
interface Props {
  project : Project
}



const ProjectName = ({ project } : Props ) => {
  const router = useRouter()
  const { projectName } = router.query

  // function GridTop(){

  //   console.log(project)
  //   return(<p>{project.date}</p>)
  // }

  // console.log(project)
  return (
    <>
      <Head>
        <title>Richard Ogujawa | {project.title}</title>
      </Head>

      <Layout innerContainer>
        
      </Layout>
      <SidebarCV/>
    </>
  )
}

export default ProjectName

export async function getServerSideProps(context : any) {
  console.log(context)
  const res = await fetch(`http://localhost:3000/api/projects?project=${context.query.projectName}`)
  const project = (await res.json()).data
  return {
    props: { project }
  }
}