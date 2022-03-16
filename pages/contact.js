
import React from 'react';
import Banner from '../components/Banner';

import Head from 'next/head';

import { postData } from '../functions/auth';

import Link from 'next/link';

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState(false);

    const [requesting, setRequesting] = React.useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setRequesting(true);
        var url = process.env.API_URL + 'auth/contact-us/';
        // console.log(name, email, subject, msg);
    
        postData(url, {email: email, name: name, message:msg, subject:subject})
          .then(data => {
            setEmail("");setMsg("");setName("");setSubject("");
            setRequesting(false);
            setMsgSet(true);
            setError({});
            
        }).catch(error => {
            setRequesting(false);
            setError(error);
            // console.log(error);
        })
    
    }

  return (
    <div>

      <Head>
        <title>Contact us - The Learning Setu</title>
        <meta name="description" content="Feel free to contact us at contact@thelearningsetu.com" />
      </Head>

        <Banner>
        <div className="page-banner-content">
              <ul className="breadcrumb">
                  <li><Link href={"/"}><a>Home</a></Link></li>
                  <li className="active">Contact Us</li>
              </ul>
              <h2 className="title">Contact <span>Us</span></h2>
          </div>
        </Banner>

        {/* contact us */}

        <div className="section section-padding">
            <div className="container">

                {/* <!-- Contact Wrapper Start --> */}
                <div className="contact-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                            {/* <!-- Contact Info Start --> */}
                            <div className="contact-info">

                                <img className="shape animation-round" src="/images/shape/shape-12.png" alt="Shape" />

                                {/* <!-- Single Contact Info Start --> */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Phone No.</h6>
                                        <p><a href="tel:+919518901902">(+91) 951-890-1902</a></p>
                                    </div>
                                </div>
                                {/* <!-- Single Contact Info End --> */}
                                {/* <!-- Single Contact Info Start --> */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Email Address.</h6>
                                        <p><a href="mailto:cc@thelearningsetu.com">cc@thelearningsetu.com</a></p>
                                    </div>
                                </div>
                                {/* <!-- Single Contact Info End --> */}
                                {/* <!-- Single Contact Info Start --> */}
                                {/* <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-pin"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Office Address.</h6>
                                        <p>Talga, Alabama, USA</p>
                                    </div>
                                </div> */}
                                {/* <!-- Single Contact Info End --> */}
                            </div>
                            {/* <!-- Contact Info End --> */}

                        </div>
                        <div className="col-lg-6">

                            {/* <!-- Contact Form Start --> */}
                            <div className="contact-form">
                                <h3 className="title">Get in Touch <span>With Us</span></h3>

                                <div className="form-wrapper">
                                    <form method="post">
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input value={name} onChange={e=>setName(e.target.value)}  type="text" name="name" placeholder="Name" />
                                            {error.name && <p className='text-danger'>{error.name}</p>}

                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input value={email} onChange={e=>setEmail(e.target.value)}  type="email" name="email" placeholder="Email" />
                                            {error.email && <p className='text-danger'>{error.email}</p>}

                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <input value={subject} onChange={e=>setSubject(e.target.value)}  type="text" name="subject" placeholder="Subject" />
                                            {error.subject && <p className='text-danger'>{error.subject}</p>}

                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        {/* <!-- Single Form Start --> */}
                                        <div className="single-form">
                                            <textarea value={msg} onChange={e=>setMsg(e.target.value)}  name="message" placeholder="Message"></textarea>
                                            {error.message && <p className='text-danger'>{error.message}</p>}
                                            
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                        <p className="form-message"></p>
                                        {/* <!-- Single Form Start --> */}
                                        {!requesting && <div className="single-form">
                                            <button onClick={handleClick} className="btn btn-primary btn-hover-dark w-100">Send Message <i className="flaticon-right"></i></button>
                                        </div> }
                                        {/* <!-- Single Form End --> */}
                                    </form>
                                    {msgSent && <p className="text-success">Thank You for sending your message. Our team will contact you soon.</p>}
                                </div>
                            </div>
                            {/* <!-- Contact Form End --> */}

                        </div>
                    </div>
                </div>
                {/* <!-- Contact Wrapper End --> */}

            </div>
        </div>


    </div>
  )
}

Contact.layout = "L1";
export default Contact