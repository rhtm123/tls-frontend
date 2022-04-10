
import React from 'react';
import Head from 'next/head';

import Link from 'next/link';

import { useSession } from "next-auth/react"

import LoginRequired from '../components/LoginRequired';

import { postData } from '../functions/auth';

import JoinedBatch from '../components/JoinedBatch';




const Profile = () => {

  const { data: session } = useSession();
  const [user, setUser] = React.useState();
  const [batches, setBatches] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  const getEnrolledBatches = (user) => {
    let url = process.env.API_URL + `lesson/userbatches/?ordering=-updated&user=${user.user.id}`;
    console.log(url);
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data1 = await response.json();
        // console.log(data1);
        setBatches(data1.results);
        setLoading(false);
        
      }
    }).catch(error=>{ console.log(error) })

  }


  const getUser = () => {
    if (session){
        let url = process.env.API_URL + 'auth/get-user-email/';
        postData(url, {"email":session.user.email})
          .then(data => {
            setUser(data);
            getEnrolledBatches(data);
          }).catch(error => {
            console.log(error)
        })
      }
  }


  React.useEffect(() => {
    getUser();
    setInterval(function() {
      getUser();
    }, 120000);

  },[session]);



  if (!session) {
    return (<LoginRequired />)
}

  if (loading) {
    return (<div>loading...</div>)
  }


  return (
    <div>
      <Head>
        <title>Profile - The Learning Setu</title>
        <meta name="robots" content="noindex" />

        {/* <meta name="description" content={data.sub_header} /> */}
      </Head>

      <div className="section" style={{ background:"#e7f8ee", paddingTop:10 }}>
        <div className='container'>
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
        </div>
      </div>





      <div className="section">
        <div className='container'>

            <div className="section-title shape-01">
              <br />
              <h2 className="main-title">
                Joined Programs
              </h2>
            </div>


            <div className="tab-content courses-tab-content">
              <div className="courses-meta">
                <br />

                {batches.length==0 && 
                <p>You have not joined any program yet. Join the <Link href="/programs"><a>programs now</a></Link>
                  
                </p>}

                {batches.map(( userbatch, index) => (
                        <JoinedBatch key={index} userbatch={userbatch} />
                ))}

              </div>

          </div>


          <br /> <br />
          <br />

        </div>
      </div>

    </div>
  )
}

Profile.layout = "L2";
export default Profile