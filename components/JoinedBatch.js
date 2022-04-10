
import React from 'react';

import EnrolledCourse from './EnrolledCourse';

const JoinedBatch = ({userbatch}) => {

  const [courses, setCourses] = React.useState([]);

  const getCourses = () => {
    let url = process.env.API_URL + 'course/program_courses/?course=&program='+userbatch.batch.program.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        // console.log(data);
        setCourses(data);
       } else {
        
      }
    }).catch(error=>{  })

  }

  React.useEffect(() => {
    getCourses();
  },[userbatch]);

  
  return (
    <div className="card" style={{ padding:20 }}>
        <h3>{userbatch.batch.program.name}</h3>

        {courses.map((course, index) => (
            <EnrolledCourse key={index} course={course.course} user={userbatch.user}/>
        ))}
        



</div>
  )
}

export default JoinedBatch