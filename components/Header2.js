import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Header2 = () => {

    const { data: session } = useSession()
    
  return (
    <div className="section login-header">
        <div className="login-header-wrapper navbar navbar-expand">
            
            <div className="login-header-logo logo-2">
                    
            <Link href="/"><a><img src="/images/logo.png" alt="Logo" /></a></Link>
            </div>



            <div className="login-header-action action-2 ml-auto">
                {/* <div className="dropdown">
                    <button className="action notification" data-bs-toggle="dropdown">
                        <i className="flaticon-notification"></i>
                        <span className="active"></span>
                    </button>
                    <div className="dropdown-menu dropdown-notification">
                        <ul className="notification-items-list">
                            <li className="notification-item">
                                <span className="notify-icon bg-success text-white"><i className="icofont-ui-user"></i></span>
                                <div className="dropdown-body">
                                    <a href="#">
                                        <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                                        </p>
                                    </a>
                                </div>
                                <span className="notify-time">3:20 am</span>
                            </li>
                            <li className="notification-item">
                                <span className="notify-icon bg-success text-white"><i className="icofont-shopping-cart"></i></span>
                                <div className="dropdown-body">
                                    <a href="#">
                                        <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                    </a>
                                </div>
                                <span className="notify-time">3:20 am</span>
                            </li>
                            <li className="notification-item">
                                <span className="notify-icon bg-danger text-white"><i className="icofont-book-mark"></i></span>
                                <div className="dropdown-body">
                                    <a href="#">
                                        <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                        </p>
                                    </a>
                                </div>
                                <span className="notify-time">3:20 am</span>
                            </li>
                            <li className="notification-item">
                                <span className="notify-icon bg-success text-white"><i className="icofont-heart-alt"></i></span>
                                <div className="dropdown-body">
                                    <a href="#">
                                        <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                    </a>
                                </div>
                                <span className="notify-time">3:20 am</span>
                            </li>
                            <li className="notification-item">
                                <span className="notify-icon bg-success text-white"><i className="icofont-image"></i></span>
                                <div className="dropdown-body">
                                    <a href="#">
                                        <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                        </p>
                                    </a>
                                </div>
                                <span className="notify-time">3:20 am</span>
                            </li>
                        </ul>
                        <a className="all-notification" href="#">See all notifications <i className="icofont-simple-right"></i></a>
                    </div>
                </div> */}

                    {session && <a className="action author" href="#">
                        <img src={session.user.image} alt="Author" />
                    </a>}

                <div className="dropdown">
                    <button className="action more" data-bs-toggle="dropdown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    {session && <ul className="dropdown-menu">
                        <li><Link href={"/profile"}><a><i className="icofont-user"></i> Profile</a></Link></li>

                        {/* <li><a className="" href="#"><i className="icofont-inbox"></i> Inbox</a></li> */}
                        <li><a onClick={() => signOut()} className="" href="#"><i className="icofont-logout"></i> Sign Out</a></li>

                    </ul> }

                    {!session && <ul className="dropdown-menu">
                        <li><a className="sign-in" href="#" onClick={() => signIn()}>Login</a></li>

                    </ul>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header2