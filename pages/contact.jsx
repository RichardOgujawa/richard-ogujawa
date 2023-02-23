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

  /*Form submission handler*/
  
  async function handleOnSubmit(e) {
    //this will prevent the default action of submitting to browser
    e.preventDefault()
    console.log(e)
    const formArr = Array.from(e.currentTarget)
    const formArrWithoutBtn = formArr.pop()

    const formData = {}
    formArr.forEach((field) => {
      if (field == 'button') {
        console.log('found button')
      }
      if (!field.value) {
        field.classList.add('warning')
      } else {
        field.classList.remove('warning')
        formData[field.name] = field.value
      }
    })

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    })

    console.log(formData)
    const email = formData.email
    const fname = formData.fname
    const lname = formData.lname
    const msg = formData.message
    const url = `mailto:richardogujawa7@gmail.com?subject=${"Let\\'s work"}&body=${msg}`

    if (msg && email && fname && lname) {
      router.push(url)
    }
    
  }
  // console.log(formRef.current[0])

  return (
    <>
      <Head>
        <title>Richard Ogujawa | Contact </title>
      </Head>

      <Layout hide={false} GridTop={ContactTopComponent} innerContainer>
        <div className="grid w-full place-items-center">
          <form
           ref={formRef}
            method="post"
            className="inner-container grid gap-4 text-white"
            onSubmit={handleOnSubmit}
          >
            <div className="flex w-full gap-5">
              <div className="grid flex-1">
                <label htmlFor="fname">First Name</label>
                <input
                  className=""
                  type="text"
                  name="fname"
                  placeholder="Jeremiah"
                />
              </div>
              <div className="grid flex-1">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" placeholder="Doe" />
              </div>
            </div>
            <div className="grid">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="sebastian.doe@gmail.com"
              />
            </div>
            <div className="grid">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Write your message here..."
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full border border-col-neutral-250 py-1 text-center transition duration-500 hover:bg-col-neutral-250 hover:text-col-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Layout>

      <SidebarCV hide />
    </>
  )
}

export default Contact

//Check if all inputs are filled (useEffect)
//If so change state to true
//If not keep state false

// mongodb://mongos0.example.com:27017,mongos1.example.com:27017,mongos2.example.com:27017