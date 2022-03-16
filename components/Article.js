
import React from 'react';

import Link from 'next/link';

const Article = ({article}) => {
  return (
<div className="col-lg-4 col-md-6">

<div className="single-blog">
    <div className="blog-image">
        <Link href={"/quick-tutorial/"+article.slug}><a><img src={article.feature_img} alt="Blog" /></a></Link>
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

        {/* <div className="blog-meta"> */}
            {/* <span> <i className="icofont-clock-time"></i>{article.time_required}</span> */}
            {/* <span> <i className="icofont-heart"></i> 2,568+ </span> */}
        {/* </div> */}

        <Link href={"/quick-tutorial/"+article.slug}><a className="btn btn-secondary btn-hover-primary">Read More</a></Link>
    </div>
</div>

</div>
  )
}

export default Article