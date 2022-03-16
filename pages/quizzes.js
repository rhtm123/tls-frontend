
import React from 'react';

import Head from 'next/head';

import Link from 'next/link';

import Banner from '../components/Banner';

import Quiz from '../components/Quiz';

import { useAppContext } from '../context/state';

const Quizzes = () => {

  
  const mycontext = useAppContext();
  const quizzes = mycontext.quizzes;

  return (
    <>
      <Head>
        <title>Quizzes - The Learning Setu</title>
        <meta name="description" content="Solve mcqs, quiz related to python, css, html, django, reactjs, nextjs" />
      </Head>

        <Banner>
        <div className="page-banner-content">
              <ul className="breadcrumb">
                  <li><Link href={"/"}><a>Home</a></Link></li>
                  <li className="active">Quizzes</li>
              </ul>
              <h2 className="title">Solve <span>MCQs</span></h2>
          </div>
        </Banner>

        <div className="section" style={{paddingBottom:60}}>
        <div className="container">
          {/* <!-- All Courses Top Start --> */}
          {/* <div className="courses-top"> */}
            {/* <!-- Section Title Start --> */}
            {/* <div className="section-title shape-01">
              <h2 className="main-title">
                All <span>Programs</span>
              </h2>
            </div> */}
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
          {/* </div> */}
          {/* <!-- All Courses Top End --> */}


          {/* <!-- All Courses tab content Start --> */}
          <div className="tab-content courses-tab-content">
            <div className="tab-pane fade show active" id="tabs1">
              {/* <!-- All Courses Wrapper Start --> */}
              <div className="courses-wrapper">
                
                  {quizzes && <div className="row">

                    {quizzes.results.map((quiz, index) => (
                        <div key={index} className="col-lg-4 col-md-6">

                        <Quiz quiz={quiz} />
                        </div>
                    ))}
                  </div>
                  }
                  
              </div>
              {/* <!-- All Courses Wrapper End --> */}
            </div>

          </div>
          {/* <!-- All Courses tab content End --> */}

        </div>
      </div>
    
    
    </>
  )
}

Quizzes.layout = "L1";
export default Quizzes