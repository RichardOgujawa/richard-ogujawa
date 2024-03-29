//Next Imports
import Head from 'next/head'
import { useRouter } from 'next/router'
//React Imports
import React, { useEffect, useRef, useState } from 'react'
//Component Imports
import GridTop from '../components/GridTop'
import Layout from '../components/Layout'
import SidebarCV from '../components/SidebarCV'
//Data Imports && Grid Top Component
import contactInfo from '../data/textTop.json'
let contactTitle = contactInfo.contact.title
let contactSubtitle = contactInfo.contact.subtitle
function ContactTopComponent() {
  return GridTop({
    title: contactInfo.contact.title,
    subtitle: contactInfo.contact.subtitle,
  })
}
//MAIN COMPONENT
const Contact = () => {
  return (
    <>
      <Head>
        <title>Richard Ogujawa | Contact </title>
      </Head>
      <Layout hide={false} GridTop={ContactTopComponent} innerContainer center>
        {/* <div className="grid w-full place-items-center">
          <form
            method="post"
            action="https://www.flexyform.com/f/55379a9999b43447363e5dc105a9411ed231b1c0"
            className="inner-container grid gap-4 text-white"
          >
            <div className="flex w-full gap-5">
              <div className="grid flex-1">
                <label htmlFor="fname">First Name </label>
                <input
                  className=""
                  type="text"
                  name="fname"
                  placeholder="Jeremiah"
                  required
                />
              </div>
              <div className="grid flex-1">
                <label htmlFor="lname">Last Name </label>
                <input type="text" name="lname" placeholder="Doe" required />
              </div>
            </div>
            <div className="grid">
              <label htmlFor="email">Email Address </label>
              <input
                type="email"
                name="email"
                placeholder="jeremiah.doe@gmail.com"
                required
              />
            </div>
            <div className="grid">
              <label htmlFor="message">Message </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Write your message here..."
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full border border-col-neutral-250 py-1 text-center transition duration-500 hover:bg-col-neutral-100 hover:text-col-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div> */}
      </Layout>
      <SidebarCV hide />
    </>
  )
}
export default Contact
