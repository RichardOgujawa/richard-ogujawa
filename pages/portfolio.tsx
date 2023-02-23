import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
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

const Portfolio = () => {
  return (
    <>
    <Head>
      <title>Richard Ogujawa | Portfolio </title>
    </Head>
      <Layout GridTop={GridTop}>
        <main>
          {!projectsData ? 
          <p>Projects coming soon.</p> 
          : 
          <div className='grid grid-cols-3'>
            {projectsData.map((items, index) => {
              return(
                <p key={index}>{items.description}</p>
              )}
            )}  
          </div>
          }
        </main>
      </Layout>

      <SidebarCV/>
    </>
  )
}

export default Portfolio