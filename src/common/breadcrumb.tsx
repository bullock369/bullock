'use client';

import { Icon } from '@iconify/react'
import Link from 'next/link';
import React from 'react'

const Breadcrumb = ({ title , subtitle}: { title: string, subtitle: string }) => {
  return (
    <div
  className="site-breadcrumb"
  style={{ background: "url(assets/img/breadcrumb/main.jpg)" }}
>
  <div className="container">
    <h2 className="breadcrumb-title">{title}</h2>
    <ul className="breadcrumb-menu">
      <li>
        <Link href="/">Home</Link>
        <Icon icon="uiw:d-arrow-right" />
      </li>
      
      <li className="active">{subtitle}</li>
    </ul>
  </div>
</div>

  
  )
}

export default Breadcrumb