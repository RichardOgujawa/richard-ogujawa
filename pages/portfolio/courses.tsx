//Next Imports
import Head from 'next/head'
//React Imports
import React, { useEffect, useState } from 'react'
//Component Imports
import Layout from '../../components/Layout'
import PortfolioGridTop from '../../components/PortfolioGridTop'
import Project from '../../components/Project'
import SidebarCV from '../../components/SidebarCV'
const GridTop = () => {
  return (
    <section className="portfolio-buttons">
      <div className="grid items-end">
        <h1 className="heading">\Portfolio</h1>
      </div>
      <button className="grid place-content-center">
        <span>Coding</span>
        <span>[ˈkəʊdɪŋ] noun.</span>
      </button>
      <button>
        <span>Creative</span>
        <span>[dɪˈzʌɪn] noun.</span>
      </button>
      <button>
        <span>Current</span>
        <span>[/ɔːl/] noun.</span>
      </button>
    </section>
  )
}
//MAIN COMPONENT
const Portfolio = () => {
  //Get projects
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(
        `${window.location.origin}/api/projects?filter=course`
      )
      let projectsJSON = (await res.json()).data

      setProjects(projectsJSON)
    }
    getData()
  }, [])
  //Checking to see if there are any projects
  let display = false
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
        <main className="grid h-full items-start justify-items-center p-4">
          {!display ? (
            <p>Projects loading...</p> // If there aren't any projects display "Projects Coming Soon"
          ) : (
            <ul className="grid w-[90%] grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6">
              {' '}
              {/*If there are projects display them*/}
              {projects.map((item, index) => {
                return (
                  <li key={index} className="grid place-items-center">
                    <Project index={index} item={item} />
                  </li>
                )
              })}
            </ul>
          )}
        </main>
      </Layout>
      <SidebarCV hide />
    </>
  )
}
export default Portfolio
