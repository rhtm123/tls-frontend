import Head from "next/head";

import { useAppContext } from '../context/state';
import Program from "../components/Program";
import Link from "next/link";


function Home() {

  const mycontext = useAppContext();
  const programs = mycontext.programs;





  return (
    <div>
      <Head>
        <title>The Learning Setu | Online Courses, Programs, Micro Degree</title>
        <meta name="description" content="Website Development, Full stack web development, Python, Django, Html, CSS, Java Script" />
      </Head>

      {/* <!-- Slider Start --> */}
      <div className="section slider-section">
        {/* <!-- Slider Shape Start --> */}
        <div className="slider-shape">
          <img
            className="shape-1 animation-round"
            src="/images/shape/shape-8.png"
            alt="Shape"
          />
        </div>
        {/* <!-- Slider Shape End --> */}

        <div className="container">
          {/* <!-- Slider Content Start --> */}
          <div className="slider-content">
            <h4 className="sub-title">Welcome to The Learning Setu</h4>
            <h2 className="main-title">
              Join our online programs/courses and build a 
              <span> bright career</span>
            </h2>
            {/* <p>
              Our Programs will help you to get your first job.
            </p> */}
            <a className="btn btn-primary btn-hover-dark" href="#">
              All Programs
            </a>
          </div>
          {/* <!-- Slider Content End --> */}
        </div>

        {/* <!-- Slider Courses Box Start --> */}
        <div className="slider-courses-box">
          <img
            className="shape-1 animation-left"
            src="/images/shape/shape-5.png"
            alt="Shape"
          />

          <div className="box-content">
            <div className="box-wrapper">
              <i className="flaticon-open-book"></i>
              {programs && <span className="count">{programs.results.length}</span>}
              <p>Programs</p>
            </div>
          </div>

          <img
            className="shape-2"
            src="/images/shape/shape-6.png"
            alt="Shape"
          />
        </div>
        {/* <!-- Slider Courses Box End --> */}

        {/* <!-- Slider Rating Box Start --> */}
        <div className="slider-rating-box">
          {/* <div className="box-rating">
            <div className="box-wrapper">
              <span className="count">
                4.9 <i className="flaticon-star"></i>
              </span>
              <p>Rating</p>
            </div>
          </div> */}

          <img
            className="shape animation-up"
            src="/images/shape/shape-7.png"
            alt="Shape"
          />
        </div>
        {/* <!-- Slider Rating Box End --> */}

        {/* <!-- Slider Images Start --> */}
        <div className="slider-images">
          <div className="images">
            <img src="/images/slider/slider-1.png" alt="Slider" />
          </div>
        </div>
        {/* <!-- Slider Images End --> */}

        {/* <!-- Slider Video Start --> */}
        <div className="slider-video">
          <img
            className="shape-1"
            src="/images/shape/shape-9.png"
            alt="Shape"
          />

          <div className="video-play">
            <img src="/images/shape/shape-10.png" alt="Shape" />
            <a
              href="https://www.youtube.com/watch?v=BRvyWfuxGuU"
              className="play video-popup"
            >
              <i className="flaticon-play"></i>
            </a>
          </div>
        </div>
        {/* <!-- Slider Video End --> */}
      </div>
      {/* <!-- Slider End --> */}

      {/* <!-- All Courses Start --> */}
      <div className="section section-padding-02">
        <div className="container">
          {/* <!-- All Courses Top Start --> */}
          <div className="courses-top">
            {/* <!-- Section Title Start --> */}
            <div className="section-title shape-01">
              <h2 className="main-title">
                All <span>Programs</span>
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Courses Search Start --> */}
            {/* <div className="courses-search">
              <form action="#">
                <input type="text" placeholder="Search your course" />
                <button>
                  <i className="flaticon-magnifying-glass"></i>
                </button>
              </form>
            </div> */}
            {/* <!-- Courses Search End --> */}
          </div>
          {/* <!-- All Courses Top End --> */}


          <div className="tab-content courses-tab-content">
            <div className="tab-pane fade show active" id="tabs1">
              <div className="courses-wrapper">
                
                  {programs && <div className="row">
                    {programs.results.map((program, index) => (
                        <Program key={index} program={program} />
                    ))}
                  </div>
                  }
                  
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className="section section-padding mt-n1" style={{paddingBottom:0}}>
        <div className="container">
          {/* <!-- Section Title Start --> */}
          <div className="section-title shape-03 text-center">
            {/* {programs && <h5 className="sub-title">{programs.results.length} Programs</h5>} */}
            <h2 className="main-title">
              How It <span> Work?</span>
            </h2>
          </div>
          {/* <!-- Section Title End --> */}

          {/* <!-- How it Work Wrapper Start --> */}
          <div className="how-it-work-wrapper">
            {/* <!-- Single Work Start --> */}
            <div className="single-work">
              <img
                className="shape-1"
                src="/images/shape/shape-15.png"
                alt="Shape"
              />

              <div className="work-icon">
                <i className="flaticon-transparency"></i>
              </div>
              <div className="work-content">
                <h3 className="title">Search Program</h3>
                <p>
                  Find the program that suits your career goals. 
                </p>
              </div>
            </div>
            {/* <!-- Single Work End --> */}

            {/* <!-- Single Work Start --> */}
            <div className="work-arrow">
              <img
                className="arrow"
                src="/images/shape/shape-17.png"
                alt="Shape"
              />
            </div>
            {/* <!-- Single Work End --> */}

            {/* <!-- Single Work Start --> */}
            <div className="single-work">
              <img
                className="shape-2"
                src="/images/shape/shape-15.png"
                alt="Shape"
              />

              <div className="work-icon">
                <i className="flaticon-badge"></i>
              </div>
              <div className="work-content">
                <h3 className="title">Complete the Program</h3>
                <p>
                  Our trainers/mentors will help you to complete the program.
                </p>
              </div>
            </div>
            {/* <!-- Single Work End --> */}

            {/* <!-- Single Work Start --> */}
            <div className="work-arrow">
              <img
                className="arrow"
                src="/images/shape/shape-17.png"
                alt="Shape"
              />
            </div>
            {/* <!-- Single Work End --> */}

            {/* <!-- Single Work Start --> */}
            <div className="single-work">
              <img
                className="shape-3"
                src="/images/shape/shape-16.png"
                alt="Shape"
              />

              <div className="work-icon">
                <i className="flaticon-coding"></i>
              </div>
              <div className="work-content">
                <h3 className="title">Get the Job</h3>
                <p>
                  Our consultancy team will help you to get the dream job.
                </p>
              </div>
            </div>
            {/* <!-- Single Work End --> */}
          </div>
        </div>
      </div>


      {/* <!-- Call to Action Start --> */}
      <div className="section section-padding">
        <div className="container">
          {/* <!-- Call to Action Wrapper Start --> */}
          <div className="call-to-action-wrapper">
            <img
              className="cat-shape-01 animation-round"
              src="/images/shape/shape-12.png"
              alt="Shape"
            />
            <img
              className="cat-shape-02"
              src="/images/shape/shape-13.svg"
              alt="Shape"
            />
            <img
              className="cat-shape-03 animation-round"
              src="/images/shape/shape-12.png"
              alt="Shape"
            />

            <div className="row align-items-center">
              <div className="col-md-6">
                {/* <!-- Section Title Start --> */}
                <div className="section-title shape-02">
                  <h5 className="sub-title">Become An Instructor</h5>
                  <h2 className="main-title">
                    You can join us as a <span>trainer</span> or <span>mentor</span>?
                  </h2>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
              <div className="col-md-6">
                <div className="call-to-action-btn">
                  <Link href="/contact">
                  <a
                    className="btn btn-primary btn-hover-dark"
                  >
                    Contact us
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Call to Action Wrapper End --> */}
        </div>
      </div>
      {/* <!-- Call to Action End --> */}

      {/* <!-- How It Work End --> */}

      {/* <!-- How It Work End --> */}
    </div>
  );
}


Home.layout = "L1";

export default Home;