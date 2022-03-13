import React from "react";

import { useAppContext } from '../context/state';


import Banner from "../components/Banner";

import { Course2 } from "../components/Course";

const Courses = () => {
  
  const mycontext = useAppContext();
  const data = mycontext.courses;

  const [courses, setCourses] =  React.useState([]);
  const [count, setCount] = React.useState(0);
  const [next, setNext] = React.useState("");


  React.useEffect(() => {
    if (data){
      setCourses(data.results);
      setNext(data.next);
      setCount(data.count);
    }

},[data]);



  return (
    <div>
      <Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Courses</li>
          </ul>
          <h2 className="title">
            My <span>Courses</span>
          </h2>
        </div>
      </Banner>

      {/* <!-- Courses Start --> */}
      <div className="section section-padding">
        <div className="container">

          {/* <!-- Courses Wrapper Start  --> */}
          <div className="courses-wrapper-02">
            <div className="row">

            {courses.map((course, index) => (
                   <div key={{index}} className="col-lg-4 col-md-6">
                        <Course2 course={course} /> 
                    </div>
              ))} 
             
                {/* <!-- Single Courses Start --> */}
                {/* <!-- Single Courses End --> */}
              
            </div>
          </div>
          {/* <!-- Courses Wrapper End  --> */}
        </div>
      </div>
      {/* <!-- Courses End --> */}

    </div>
  );
};

export default Courses;
