
import React from 'react';
import Head from 'next/head';

import Banner from '../components/Banner';
import Link from 'next/link';

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Profile - The Learning Setu</title>
        <meta name="robots" content="noindex" />

        {/* <meta name="description" content={data.sub_header} /> */}
      </Head>

<Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="active">Profile</li>
          </ul>
          <h2 className="title">
            Profile <span></span>
          </h2>
        </div>
      </Banner>

      <div className="section">
        We are working on it
      </div>

    </div>
  )
}

Profile.layout = "L1";
export default Profile