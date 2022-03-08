
import React from 'react'

import { useSession, signIn, signOut } from "next-auth/react"

import Banner from "../components/Banner";


const Profile = () => {
    const { data: session } = useSession()
    if(session) {
      return <>
        <Banner>
        <div className="page-banner-content">
              <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Contact Us</li>
              </ul>
              <h2 className="title">About <span>Us</span></h2>
          </div>
      </Banner> 
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }
    return <>
    <Banner>
        <div className="page-banner-content">
              <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Contact Us</li>
              </ul>
              <h2 className="title">About <span>Us</span></h2>
          </div>
      </Banner>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>
}

export default Profile