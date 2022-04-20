import React from 'react';
import Head from 'next/head';

import Error from '../components/Error'

const Error404 = () => {
  return (
    <>
    <div>
      <Head>
        <title>Redirecting to Coding Chaska</title>
        {/* <meta name="description" content="Website Development, Full stack web development, Python, Django, Html, CSS, Java Script" /> */}
        <meta httpEquiv="refresh" content="10; url=https://www.codingchaska.com/" />
      </Head>

    <div style={{ padding:60 }}>
  <h3 style={{"textAlign":"center","color":"green"}}>
    The Learning Setu is now available at Coding Chaska
  </h3>
    <p style={{"textAlign":"center"}}>
        If your browser supports Refresh, 
        you will be redirected to Coding Chaska 
        Homepage, in 10 seconds. 
    </p>

    </div>

    </div>
    </>
  )
}

Error404.layout = "L1";
export default Error404