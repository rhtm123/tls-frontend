import React from 'react'

const EnrolledCourse = ({course, user}) => {

//   console.log(course);

  const [usercourse, setUserCourse] = React.useState();


    const getUserCourse = () => {

        let url = process.env.API_URL + `lesson/user_courses/?user=${user.id}&course=${course.id}`;

        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            var data = await response.json();

            // console.log(data);
            if (data.count>0){
                setUserCourse(data.results[0]);
                console.log(data.results[0])
                // console.log(course);
            }
            
           } else {
            
          }
        }).catch(error=>{  })
          
      }


    React.useEffect(() => {
        getUserCourse();
    },[]);

  
  return (
    <div className="courses-item" style={{ alignItems:"normal" }}>
            <div className="item-thumb">
                <a href="#">
                    <img src={course.image} alt="Courses" />
                </a>
            </div>

            <div className="content-title">
                <div className="meta">
                    <a href="#" className="action">Live</a>
                    {/* <a href="#" className="action">Free</a>
                    <a href="#" className="action">Public</a> */}
                </div>
                <h5 className="title">{course.name}</h5>
            </div>

            <div className="content-wrapper">

                <div className="content-box" style={{ width:"auto" }}>
                    <p>Continue learning</p>
                    {usercourse && <span className="count">{usercourse.current_lession && usercourse.current_lession.name}</span>}
                </div>

                {/* <div className="content-box">
                    <p>Enrollment’s</p>
                    <span className="count">1,852</span>
                </div> */}

                {/* <div className="content-box">
                    <p>Course Rating</p>
                    <span className="count">
                            4.5
                            <span className="rating-star">
                                <span className="rating-bar" style={{"width": "80%"}}></span>
                    </span>
                    </span>
                </div> */}

                {/* <div className="courses-select">
                    <select>
                        <option data-display="This Month">This Month</option>
                        <option value="1">This Year</option>
                        <option value="2">This Week</option>
                    </select>
                </div> */}

            </div>
        </div>
  )
}

export default EnrolledCourse