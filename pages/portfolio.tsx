//React Imports
import { useEffect, useState } from 'react'
//Next Imports
import Head from 'next/head'
//Component Imports
import Layout from '../components/Layout'
import Project from '../components/Project'
import SidebarCV from '../components/SidebarCV'
import PortfolioGridTop from '../components/PortfolioGridTop'
//MAIN COMPONENT
const Portfolio = () => {
  //Get projects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`${window.location.origin}/api/projects`)
      let projectsJSON = (await res.json()).data;
      setProjects(projectsJSON)
    }
    getData();
  }, [])
  //Checking to see if there are any projects
  let display = false;
  if (projects.length === 0) {
    display = false
  } else {
    display = true
  }
  return (
    <>
      <Head>
        <title>Richard Ogujawa | Portfolio </title>
      </Head>
      <Layout GridTop={PortfolioGridTop} center={false}>
        <main className='grid h-full items-start justify-items-center p-4'>
          {!display ?
            <p>Projects loading...</p> // If there aren't any projects display "Projects Coming Soon"
            :
            <ul className='grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6 w-[90%]'> {/*If there are projects display them*/}
              {projects.map((item, index) => {
                return (
                  <li key={index} className="grid place-items-center">
                    <Project index={index} item={item} />
                  </li>
                )
              }
              )}
            </ul>
          }
        </main>
      </Layout>
      <SidebarCV hide />
    </>
  )
}
export default Portfolio
