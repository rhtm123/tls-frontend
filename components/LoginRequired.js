
import React from 'react'
import { signIn } from "next-auth/react";
import Banner from './Banner';


const LoginRequired = () => {
  return (
    <div>      
    
    <Banner>
    <div className="page-banner-content">
      <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="active">Login Required</li>
      </ul>
      <h2 className="title">
        Login Required<span></span>
        
      </h2>

      <p> Login is required to access this page. Go to <a href="#" onClick={() => signIn()}>Login</a>
        </p>
    </div>
  </Banner>





    </div>
  )
}

export default LoginRequired