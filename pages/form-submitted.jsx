import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import SidebarCV from '../components/SidebarCV'
import GridTop from '../components/GridTop'
import contactInfo from '../data/textTop.json'

let contactTitle = contactInfo.contact.title
let contactSubtitle = contactInfo.contact.subtitle

function ContactTopComponent() {
  return GridTop({
    title: contactInfo.contact.title,
    subtitle:contactInfo.contact.subtitle,
  })
}

const Contact = () => { 
  const formRef= useRef(null)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Richard Ogujawa | Contact </title>
      </Head>

      <Layout hide={false} GridTop={ContactTopComponent} innerContainer>
        <div className="text-center">
          <p>Thanks for your message. I&apos;ll be in touch with you soon!</p>
        </div>
      </Layout>

      <SidebarCV hide />
    </>
  )
}

export default Contact
