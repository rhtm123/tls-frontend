
import React from 'react';
import Link from 'next/link';

export const Course1 = ({course}) => {


  return (
    <div className="courses-item">
        <div className="item-thumb">
        <Link href={"/course/"+course.slug}><a>
            <img src={course.image} alt={course.name} />
        </a></Link>
        </div>
        <div className="content-title">
            <div className="meta">
                <a href="#" className="action">Live</a>
            </div>
            <h3 className="title"><Link href={"/course/"+course.slug}><a>{course.name}</a></Link></h3>
        </div>

    </div>
  )
}


export const Course2 = ({course}) => {
  return (

    <div className="single-courses">
    <div className="courses-images">
      <Link href={"/course/"+course.slug}><a>
        <img src={course.image} alt="Courses" />
      </a>
      </Link>

    </div>
    <div className="courses-content">
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
            <a className="name-2" href="#">
              Ohula Malsh
            </a>
          </div>
        </div>
      </div> */}

      <h4 className="title">
        <Link href={"/course/"+course.slug}><a>
          {course.name}
        </a>
        </Link>
      </h4>
    </div>
  </div>
  )
}

