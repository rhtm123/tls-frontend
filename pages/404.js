import React from 'react';
import Head from 'next/head';

import Error from '../components/Error'

const Error404 = () => {
  return (
    <>
      <Head>
        <title>404 not found - The Learning Setu</title>
      </Head>
        <Error />
    </>
  )
}

Error404.layout = "L1";
export default Error404