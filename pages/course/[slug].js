import React from "react";
import Head from "next/head";
import Banner from "../../components/Banner";

import Error from "../../components/Error";

const Course = ({data, error}) => {

  const [instructors, setInstructors] = React.useState([]);

  React.useEffect(() => {
    let url = process.env.API_URL + 'course/course_instructions/?course='+data.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setInstructors(data);
       } else {
        
      }
    }).catch(error=>{  })
},[]);



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
              <a href="#">Home</a>
            </li>
            <li className="active">Course Details</li>
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
                    alt="Courses Details"
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

                {/* <h2 className="title">
                  {data.name}
                </h2> */}

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
                          data-bs-target="#instructors"
                        >
                          Instructors
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
                            <div>{data.overview}</div>
                          </div>
                          <div className="description-wrapper">
                            <h3 className="tab-title">Curriculum:</h3>
                            <div>{data.content}</div>
                          </div>
                         
                        </div>
                        {/* <!-- Tab Description End --> */}
                      </div>
                      <div className="tab-pane fade" id="instructors">
                        {/* <!-- Tab Instructors Start --> */}
                        <div className="tab-instructors">
                          <h3 className="tab-title">Course Instructor:</h3>

                          <div className="row">


                          {instructors.map((instructor, index) => (
                              <div key={index} className="col-md-3 col-6">
                              {/* <!-- Single Team Start --> */}
                              <div className="single-team">
                                <div className="team-thumb">
                                  <img
                                    src={instructor.instructor.profile_pic}
                                    alt="Author"
                                  />
                                </div>
                                <div className="team-content">
                                  {/* <div className="rating">
                                    <span className="count">4.9</span>
                                    <i className="icofont-star"></i>
                                    <span className="text">(rating)</span>
                                  </div> */}
                                  <h4 className="name">{instructor.instructor.firstname} {instructor.instructor.lastname}</h4>
                                  <span className="designation">
                                    {/* {instructor.instructor.firstname} {instructor.instructor.lastname} */}
                                  </span>
                                </div>
                              </div>
                              {/* <!-- Single Team End --> */}
                            </div>
                          ))} 


                            
                          </div>
                        </div>
                        {/* <!-- Tab Instructors End --> */}
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
                    <span className="price">₹ {data.upgrade_price}</span>
                  </div>
                  <div className="info-list">
                    <ul>
                      {/* <li>
                        <i className="icofont-man-in-glasses"></i>{" "}
                        <strong>Instructor</strong> <span>Pamela Foster</span>
                      </li> */}
                      <li>
                        <i className="icofont-clock-time"></i>{" "}
                        <strong>Duration</strong> <span>{data.time_required} hrs</span>
                      </li>
                      {/* <li>
                        <i className="icofont-ui-video-play"></i>{" "}
                        <strong>Lectures</strong> <span>29</span>
                      </li> */}
                      <li>
                        <i className="icofont-bars"></i> <strong>Level</strong>{" "}
                        <span>{data.difficult_level}</span>
                      </li>
                      <li>
                        <i className="icofont-book-alt"></i>{" "}
                        <strong>Language</strong> <span>{data.language}</span>
                      </li>
                      <li>
                        <i className="icofont-certificate-alt-1"></i>{" "}
                        <strong>Certificate</strong> <span>Yes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="info-btn">
                    <a href="#" className="btn btn-primary btn-hover-dark">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* <!-- Sidebar Widget Information End --> */}

                {/* <!-- Sidebar Widget Share Start --> */}
                <div className="sidebar-widget">
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
                </div>
                {/* <!-- Sidebar Widget Share End --> */}
              </div>
              {/* <!-- Courses Details Sidebar End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Courses End --> */}


    </div>
  );
};


export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"course/course/"+slug;

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return { 
      props: { 
          data:data, error:error
      } 

  }
}

Course.layout = "L1";
export default Course;
