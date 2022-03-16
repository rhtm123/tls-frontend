
import React from 'react'
import Link from 'next/link'

const Quiz = ({quiz}) => {
  return (
    <div className="single-courses">
    <div className="courses-images">
      <Link href={"/quiz/"+quiz.slug}><a>
        <img src={quiz.image} alt={quiz.name} />
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
        <Link href={"/quiz/"+quiz.slug}><a>
          {quiz.name}
        </a>
        </Link>
      </h4>
    </div>
  </div>
  )
}

export default Quiz