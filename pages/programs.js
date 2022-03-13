
import React from 'react'

import Banner from '../components/Banner'
import { useAppContext } from '../context/state';

import Program from '../components/Program';


const Programs = () => {

  const mycontext = useAppContext();
  const programs = mycontext.programs;

  return (
    <div>
      <Banner>
        <div className="page-banner-content">
              <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Programs</li>
              </ul>
              <h2 className="title">Programs<span></span></h2>
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
                
                  {programs && <div className="row">
                    {programs.results.map((program, index) => (
                        <Program key={index} program={program} />
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


    </div>
  )
}

export default Programs