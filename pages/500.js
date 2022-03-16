import React from 'react'

import Error from '../components/Error'

import Banner from '../components/Banner'

import Link from 'next/link'

const Error500 = () => {
  return (
    <>
      <Banner>
      <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li className="active">404 Error</li>
                    </ul>
                    <h2 className="title">Page Not <span>Found</span></h2>
        </div>
      </Banner>
    </>
  )
}

Error500.layout = "L1";
export default Error500