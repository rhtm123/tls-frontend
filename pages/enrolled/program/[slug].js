import React from 'react';

import Error from '../../../components/Error';

import { useSession } from "next-auth/react";

// import Banner from '../../../components/Banner';

// import { Course1 } from '../../../components/Course';

import Link from 'next/link';
import { postData } from '../../../functions/auth';

import LoginRequired from '../../../components/LoginRequired';
// import { useState } from 'react/cjs/react.production.min';
import EnrolledCourse from '../../../components/EnrolledCourse';
import JoinedBatch from '../../../components/JoinedBatch';


const EnrolledProgram = ({data, error}) => {

  const [loading, setLoading] = React.useState(true);

  const [upgraded, setUpgraded] = React.useState(false);
  const [user, setUser] = React.useState();
  const { data: session } = useSession();

  const [error1, setError1] = React.useState(false);

  const [courses, setCourses] = React.useState([]);
  const [userBatch, setUserBatch] = React.useState({});



  const handleUpgrade = () => {
    let url = process.env.API_URL + `payment/createpaymentbatch/${userBatch.id}/`;

    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data1 = await response.json();
          window.location.href = data1['payment_request']['longurl'];
        } else{
        }
    }).catch(error=>{  })
  }

  const getUserBatch = (user) => {
    let url = process.env.API_URL + `lesson/userbatches/?ordering=-updated&user=${user.user.id}`;
    fetch(url)
              .then(async (response) => {
                if (response.ok) {
                  var data1 = await response.json();
                  if (data1.count ==0){
                      setError1(true);
                      setLoading(false);
                  } else{
                   setUserBatch(data1.results[0]);
                   setUpgraded(data1.results[0].is_upgraded)
                   setLoading(false)
                  }
                }
              }).catch(error=>{  })
  }


  const getUser = () => {
    if (session){
        let url = process.env.API_URL + 'auth/get-user-email/';
        postData(url, {"email":session.user.email})
          .then(data => {
            setUser(data);
            getUserBatch(data);
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


  React.useEffect(() => {

    // getUserBatch();


    let url = process.env.API_URL + 'course/program_courses/?course=&program='+data.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setCourses(data);
        // console.log(data);
       } else {
        
      }
    }).catch(error=>{ console.log(error) })
},[]);



  if (error || error1){
        return (<Error />)
  }


  if (!session) {
    return (<LoginRequired />)
}

  return (
    <div className='container'>

        <div className='section'>

        <div className="page-banner-content">
              <br />
              <ul className="breadcrumb">
                  <li><Link href={"/"}><a>Home</a></Link></li>
                  <li className="">Profile</li>
                  <li className="active">Enrolled Program</li>
              </ul>
          </div>

        



        {loading && <div>
            <p>loading..</p>
        </div>}

        {!loading && <div className='container-fluid custom-container'> 

          {!upgraded && <div className="message row" style={{ paddingTop:20 }}>

          <h3 >{data.name}<span></span></h3>

          

          <div className="col-lg-4">
    
                  <div className="info-list">
                    <ul>
                      <li>
                        <i className="icofont-price"></i>{" "}
                        <strong>Total Price</strong> <span>₹ {data.price.toLocaleString()}</span>
                      </li>

                      <li>
                        <i className="icofont-bars"></i> 
                        <strong>Upfront Percent</strong>{" "}
                        <span>40%</span>
                      </li>
                      <li>
                        <i className="icofont-price"></i>{" "}
                        <strong>Upfront Pay</strong> <span>₹ {Math.floor(data.price*.4).toLocaleString()}</span>
                      </li>

                    </ul>
                  </div>


            </div>

            <br />


                <div className="message-content" style={{ paddingTop:20 }}>
                    <button onClick={()=>handleUpgrade()} className="btn btn-primary btn-hover-dark">Pay & Upgrade</button>
                </div>
          </div> }

          
          {upgraded && 

          <div>
            <br />

            <JoinedBatch userbatch={userBatch} />


          
          {/* <div className="admin-courses-tab">
                <h4 >Courses in this program</h4>       
          </div>

          <div className="admin-courses-tab-content">
                <div className="tab-content">

                {courses.map((course, index) => (
                      <div key={index} className="courses-item">
                        <div className="item-thumb">
                        <Link href={"/course/"+course.course.slug}><a>
                            <img src={course.course.image} alt={course.course.name} />
                        </a></Link>
                        </div>
                        <div className="content-title">
                            <div className="meta">
                                <a href="#" className="action">Live</a>
                            </div>
                            <h3 className="title"><Link href={"/course/"+course.course.slug}><a>{course.course.name}</a></Link></h3>
                        </div>
                
                    </div>
                ))}

                </div>
          </div> */}

          </div>
          }


          <br />
          <br />

          
          
        </div>}

        </div>
    </div>
  )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const url = process.env.API_URL+"course/program/"+slug;
  
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
  }



EnrolledProgram.layout = "L2";
export default EnrolledProgram