import Breadcrumb from '@/common/breadcrumb'
import Footer from '@/common/footer'
import Header from '@/common/header'
import GetInTouch from '@/components/contact/get-in-touch'
import React from 'react'

const ContactPage = () => {
  return (
    <div><Header />
    <Breadcrumb title={'Contact Us'}  subtitle={'Contact Us'}/>
    <GetInTouch />
    <Footer />
    </div>
  )
}

export default ContactPage