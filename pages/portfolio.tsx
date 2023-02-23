import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SidebarCV from '../components/SidebarCV'
import projectsData from '../data/projectsData'

const GridTop = () => {
  return (
    <section className='portfolio-buttons'>
      <button>
        <span>All</span>
        <span>[/ˈsəʊləʊ/] adjective.</span>
        <span>All my projects.</span>
      </button>
      <button>
        <span>Solo</span>
        <span>/ɔːl/ adjective.</span>
        <span>All the projects I did by myself, or with very little external help from resources or other people.</span>
      </button>
      <button>
        <span>Community</span>
        <span>/ɔːl/ adjective.</span>
        <span>All the projects that I built with help from people on the online community I was fortunate to build through coding on livestreams.</span>
      </button>
      <button>
        <span>Team</span>
        <span>[/ˈsəʊləʊ/] adjective.</span>
        <span>All the projects that I built with a pre-defined set of people, or another person.</span>
      </button>
    </section>
  )
}

let display = false;

if (projectsData.length === 0) {
  display = false
} else {
  display = true
}
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Richard Ogujawa | Portfolio </title>
      </Head>

      <Layout GridTop={GridTop} center={false}>
        <main className='grid h-full items-start justify-items-center p-4'>
          {!display ?
            <p>Projects coming soon.</p>
            :
            <ul className='grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6 w-[90%]'>
              {projectsData.map((item, index) => {
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