import Breadcrumb from '@/common/breadcrumb'
import Footer from '@/common/footer'
import Header from '@/common/header'
import AboutUs from '@/components/about-us'
import ChooseUs from '@/components/choose-us'
import OurTeam from '@/components/our-team'
import Testimonial from '@/components/testimonial'
import React from 'react'

const About_Us = () => {
  return (
    <div>
        <Header />
        <Breadcrumb title={'About Us'} subtitle={'About Us'} />
        <AboutUs />
        <ChooseUs />
        <OurTeam />
        <Footer />
    </div>
  )
}

export default About_Us