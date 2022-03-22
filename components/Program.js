import React from 'react';
import Link from 'next/link';

const Program = ({program}) => {

  const [count, setCount] = React.useState();

  React.useEffect(() => {
    let url = process.env.API_URL + 'course/program_courses/?course=&program='+program.id;
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setCount(data.length);
       } else {
        

      }
    }).catch(error=>{  })


},[]);

  return (
    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Courses Start --> */}
                        <div className="single-courses">
                          <div className="courses-images">
                            <Link href={"/program/"+program.slug}><a>
                              <img
                                src={program.image}
                                alt={program.name}
                              />
                            </a>
                            </Link>
                          </div>
                          <div className="courses-content" style={{ paddingTop:10}}>
                            {/* <div className="courses-author">
                              <div className="author">
                                <div className="author-thumb">
                                  <a href="#">
                                    <img
                                      src="/images/author/author-01.jpg"
                                      alt="Author"
                                    />
                                  </a>
                                </div>
                                <div className="author-name">
                                  <a className="name" href="#">
                                    Jason Williams
                                  </a>
                                </div>
                              </div>
                              <div className="tag">
                                <a href="#">Science</a>
                              </div>
                            </div> */}
    
                            <h4 className="title">
                            <Link href={"/program/"+program.slug}><a>
                                {program.name}
                              </a>
                              </Link>
                            </h4>
                            <div className="courses-meta">
{/* 
                              <span>
                                {" "}
                                <i className="icofont-clock-home"></i> {}
                              </span>
                               */}
                              <span>
                                {" "}
                                <i className="icofont-read-book"></i> {count} Courses{" "}
                              </span>

                              

                            </div>
                            <div className="courses-price-review">
                              <div className="courses-price">
                                <span className="sale-parice">₹ {program.price.toLocaleString()}</span>
                                {/* <span className="old-parice">$440.00</span> */}
                              </div>
                              <div className="courses-review">
                                {/* <span className="rating-count">4.9</span>
                                <span className="rating-star">
                                  <span
                                    className="rating-bar"
                                    style={{ width: "80%" }}
                                  ></span>
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Single Courses End --> */}
                      </div>
  )
}

export default Program