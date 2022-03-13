
import React from 'react'

const Article = ({article}) => {
  return (
<div className="col-lg-4 col-md-6">

<div className="single-blog">
    <div className="blog-image">
        <a href="blog-details-left-sidebar.html"><img src={article.feature_img} alt="Blog" /></a>
    </div>
    <div className="blog-content">
        {/* <div className="blog-author">
            <div className="author">
                <div className="author-thumb">
                    <a href="#"><img src="/images/author/author-01.jpg" alt="Author" /></a>
                </div>
                <div className="author-name">
                    <a className="name" href="#">Jason Williams</a>
                </div>
            </div>
            <div className="tag">
                <a href="#">Science</a>
            </div>
        </div> */}

        <h3 className="title"><a href="blog-details-left-sidebar.html">{article.header}</a></h3>

        <div className="blog-meta">
            <span> <i className="icofont-calendar"></i>{article.created}</span>
            <span> <i className="icofont-heart"></i> 2,568+ </span>
        </div>

        <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
    </div>
</div>

</div>
  )
}

export default Article