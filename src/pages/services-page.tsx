import Breadcrumb from '@/common/breadcrumb'
import Footer from '@/common/footer'
import Header from '@/common/header'
import ServiceWeOffer from '@/components/service-we-offer'
import React from 'react'

const Services_Page = () => {
  return (
    <div>
        <Header />
        <Breadcrumb title={'Services'} subtitle={'Services'} />
        <ServiceWeOffer />
        <Footer />
    </div>
  )
}

export default Services_Page