
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/Banner';
import Error from '../../components/Error';

import { useSession, signIn, } from "next-auth/react";

import { useRouter } from 'next/router';



import { postData, postDataAuth } from '../../functions/auth';

import {Course1} from '../../components/Course';

const ProgramPage = ({data, error}) => {

  const router = useRouter();

  const { data: session } = useSession();

  const [courses, setCourses] = React.useState([]);
  const [batches, setBatches] = React.useState([]);
  const [user, setUser] = React.useState();

  
  const getUser = () => {
    // console.log("fhdj")
    if (session){
        let url = process.env.API_URL + 'auth/get-user-email/';
        postData(url, {"email":session.user.email})
          .then(data => {
            setUser(data);
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


  const getBatches = () => {
    let url = process.env.API_URL + 'lesson/batches/?program='+data.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        let data1 = await response.json();
        // console.log(data)
        setBatches(data1.results);
        // console.log(data)
       } else {
      }
    }).catch(error=>{  })

  }


  const joinBatch = (batch) => {
      // console.log(batch);
      // console.log(data)

      let url = process.env.API_URL + `lesson/userbatches/?user=${user.user.id}&batch=${batch.id}&ordering=-updated`;


      if (session){

            fetch(url)
              .then(async (response) => {
                if (response.ok) {
                  let data1 = await response.json();
                  if (data1.count ==0){

                    postDataAuth(url, user.access, {"user_id":user.user.id, "batch_id":batch.id})
                    .then(data2 => {
                      router.push("/enrolled/program/"+data.slug);
                    }).catch(error => {
                      console.log(error)
                  })

                  } else{
                    let last_user_batch = data1.results[0]
                    let url = process.env.API_URL +`lesson/userbatch/${last_user_batch.id}/`
                    postDataAuth(url, user.access, {}, "PATCH")
                    .then(data3 => {
                      console.log(data3);
                    }).catch(error => {
                      console.log(error)
                  })



                    router.push("/enrolled/program/"+data.slug);
                  }
                }
              }).catch(error=>{  })
           
      } else {
        signIn();
      }

  }


  const getCourses = () => {
    let url = process.env.API_URL + 'course/program_courses/?course=&program='+data.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setCourses(data);
       } else {
        
      }
    }).catch(error=>{  })

  }

  React.useEffect(() => {

    getBatches();
    getCourses();

  },[data]);

  if (error){
    return (<Error />)
  }

  return (
    <div>

      <Head>
        <title>{data.name} - The Learning Setu</title>
        <meta name="robots" content="noindex" />

        {/* <meta name="description" content={data.sub_header} /> */}
      </Head>
    <Banner>
      <div className="page-banner-content">
        <ul className="breadcrumb">
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className="active">Courses Details</li>
        </ul>
        <h2 className="title">
          {data.name} <span></span>
        </h2>
      </div>
    </Banner>

    {/* <!-- Courses Start --> */}
    <div className="section section-padding mt-n10">
      <div className="container">
        <div className="row gx-10">
          <div className="col-lg-8">
            {/* <!-- Courses Details Start --> */}
            <div className="courses-details">
              <div className="courses-details-images">
                <img
                  src={data.image}
                  alt={data.name}
                />
                {/* <span className="tags">Finance</span> */}

                {/* <div className="courses-play">
                  <img
                    src="/images/courses/circle-shape.png"
                    alt="Play"
                  />
                  <a
                    className="play video-popup"
                    href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                  >
                    <i className="flaticon-play"></i>
                  </a>
                </div> */}
              </div>

              <h2 className="title">
                {data.name}
              </h2>

              {/* <!-- Courses Details Tab Start --> */}
              <div className="courses-details-tab">
                {/* <!-- Details Tab Menu Start --> */}
                <div className="details-tab-menu">
                  <ul className="nav justify-content-center">
                    <li>
                      <button
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                      >
                        Description
                      </button>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="tab"
                        data-bs-target="#courses"
                      >
                        Courses
                      </button>
                    </li>
                    {/* <li>
                      <button data-bs-toggle="tab" data-bs-target="#reviews">
                        Reviews
                      </button>
                    </li> */}
                  </ul>
                </div>
                {/* <!-- Details Tab Menu End --> */}

                {/* <!-- Details Tab Content Start --> */}
                <div className="details-tab-content">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="description">
                      {/* <!-- Tab Description Start --> */}
                      <div className="tab-description">
                        <div className="description-wrapper">
                          <h3 className="tab-title">Overview</h3>
                          <div  dangerouslySetInnerHTML={{ __html: data.detail }}></div>

                        </div>
                        
                       
                      </div>
                      {/* <!-- Tab Description End --> */}
                    </div>
                    <div className="tab-pane fade" id="courses">

                    {courses.map((course, index) => (
                        <Course1 key={index} course={course.course} />
                    ))}
                      
                    </div>
                    
                  </div>
                </div>
                {/* <!-- Details Tab Content End --> */}
              </div>
              {/* <!-- Courses Details Tab End --> */}
            </div>
            {/* <!-- Courses Details End --> */}
          </div>
          <div className="col-lg-4">
            {/* <!-- Courses Details Sidebar Start --> */}
            <div className="sidebar">
              {/* <!-- Sidebar Widget Information Start --> */}
              <div className="sidebar-widget widget-information">
                <div className="info-price">
                  <span className="price">₹ {data.price.toLocaleString()}</span>
                </div>
                <div className="info-list">
                  <ul>

                    {/* <li>
                      <i className="icofont-book-alt"></i>{" "}
                      <strong>Language</strong> <span>{data.language}</span>
                    </li> */}
                    <li>
                      <i className="icofont-certificate-alt-1"></i>{" "}
                      <strong>Certificate</strong> <span>Yes</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="info-btn">
                  <a href="#" className="btn btn-primary btn-hover-dark">
                    Enroll Now
                  </a>
                </div> */}
              </div>
              {/* <!-- Sidebar Widget Information End --> */}

              {/* <!-- Sidebar Widget Share Start --> */}

              <div className="sidebar-widget widget-information">
                <div className="info-price">
                  <h4>Upcoming Batches</h4>
                </div>
                {batches.length >0 && <div className="info-list">
                  <ul>

                  {batches.map((batch, index) => (
                          <li key={index}>
                              <i className="icofont-clock-time"></i>{" "}
                              <strong>{new Date(batch.start_date).toDateString()}</strong> 
                              
                              <span>
                                <a onClick={() => joinBatch(batch)} href="#" className="">
                                Enroll
                                </a>
                              </span>
                        </li> 
                    ))}


                  </ul>
                </div> }

                {batches.length ==0 &&
                  <div>

                <div className="info-price">
                  <br />
                  <h6>No batch</h6>
                </div>
                  
                  </div>
                }
              </div>



              {/* <div className="sidebar-widget">
                <h4 className="widget-title">Share Course:</h4>

                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <!-- Sidebar Widget Share End --> */}
            </div>
            {/* <!-- Courses Details Sidebar End --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Courses End --> */}


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

ProgramPage.layout = "L1";
export default ProgramPage