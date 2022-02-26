import React from "react";
import Banner from "../../components/Banner";

const article = () => {
  return (
    <div>
      <Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Article</li>
          </ul>
          <h2 className="title">
            The principles every <span>UI/UX</span>
            <div>designer needs</div>
          </h2>
        </div>
      </Banner>

      {/* <!-- Blog Details Start --> */}
      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="row gx-10">
            <div className="col-lg-8">
              {/* <!-- Blog Details Wrapper Start --> */}
              <div className="blog-details-wrapper">
                <div className="blog-details-admin-meta">
                  <div className="author">
                    <div className="author-thumb">
                      <a href="#">
                        <img src="/images/author/author-01.jpg" alt="Author" />
                      </a>
                    </div>
                    <div className="author-name">
                      <a className="name" href="#">
                        Jason Williams
                      </a>
                    </div>
                  </div>
                  <div className="blog-meta">
                    <span>
                      {" "}
                      <i className="icofont-calendar"></i> 21 March, 2021
                    </span>
                    <span>
                      {" "}
                      <i className="icofont-heart"></i> 2,568+{" "}
                    </span>
                    <span className="tag">
                      <a href="#">Science</a>
                    </span>
                  </div>
                </div>

                <h2 className="title">
                  I will touch upon the Intrinsic and germane type as think that
                  these are the most applicable to UX design.
                </h2>

                <div className="blog-details-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting ndustry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and crambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularsed in the 1960 with
                    release containing Lorem Ipsum passages desktop publishing
                    software.
                  </p>

                  <img src="/images/blog/blog-details.jpg" alt="Blog Details" />

                  <h3>Intrinsic Cognitive Load</h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularsed in the 1960 with
                    release containing Lorem Ipsum passages desktop publishing
                    software.
                  </p>

                  <h3>
                    A very nice example of Hick’s Law that applies to user
                    experience design are lists:
                  </h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularsed in the 1960 with
                    release containing Lorem Ipsum passages desktop publishing
                    software.
                  </p>

                  <h3>Law of Proximity</h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularsed in the 1960 with
                    release containing Lorem Ipsum passages desktop publishing
                    software.
                  </p>

                  <blockquote className="blockquote">
                    <span className="quote">“</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and types
                      industry's standard dummy text ever since the 1500s when
                      scrambled it to make a type specimen book.
                    </p>
                  </blockquote>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularsed in the 1960 with
                    release containing Lorem Ipsum passages desktop publishing
                    software.
                  </p>
                </div>

                <div className="blog-details-label">
                  <h4 className="label">Tags:</h4>
                  <ul className="tag-list">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                  </ul>
                </div>

                <div className="blog-details-label">
                  <h4 className="label">Share:</h4>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Blog Details Wrapper End --> */}

              {/* <!-- Blog Details Comment End --> */}
              <div className="blog-details-comment">
                <div className="comment-wrapper">
                  <h3 className="title">Comments (03)</h3>

                  <ul className="comment-items">
                    <li>
                      {/* <!-- Single Comment Start --> */}
                      <div className="single-comment">
                        <div className="comment-author">
                          <div className="author-thumb">
                            <img
                              src="/images/author/author-01.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="author-content">
                            <h4 className="name">Sara Alexander</h4>
                            <div className="meta">
                              <span className="designation">
                                Product Designer, USA
                              </span>
                              <span className="time">35 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text since the 1500 when unknown printer took a galley
                          type and scrambled to make type specimen’s book has
                          survived not five centuries but also the leap into
                          electronic type and book.
                        </p>
                        <a href="#" className="reply">
                          {" "}
                          <i className="icofont-reply"></i> Reply
                        </a>
                      </div>
                      {/* <!-- Single Comment End --> */}

                      <ul className="comment-reply">
                        <li>
                          {/* <!-- Single Comment Start --> */}
                          <div className="single-comment">
                            <div className="comment-author">
                              <div className="author-thumb">
                                <img
                                  src="/images/author/author-03.jpg"
                                  alt="Author"
                                />
                              </div>
                              <div className="author-content">
                                <h4 className="name">Robert Morgan</h4>
                                <div className="meta">
                                  <span className="designation">
                                    Product Designer, USA
                                  </span>
                                  <span className="time">35 minutes ago</span>
                                </div>
                              </div>
                            </div>
                            <p>
                              Lorem Ipsum has been the industry's standard dumm
                              text since the 1500 when printer took a galley
                              type and scrambled to make type specimen book
                              survived centuries but also the electronic type
                              and book.
                            </p>
                            <a href="#" className="reply">
                              {" "}
                              <i className="icofont-reply"></i> Reply
                            </a>
                          </div>
                          {/* <!-- Single Comment End --> */}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {/* <!-- Single Comment Start --> */}
                      <div className="single-comment">
                        <div className="comment-author">
                          <div className="author-thumb">
                            <img
                              src="/images/author/author-07.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="author-content">
                            <h4 className="name">Rochelle Hunt</h4>
                            <div className="meta">
                              <span className="designation">
                                Product Designer, USA
                              </span>
                              <span className="time">35 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text since the 1500 when unknown printer took a galley
                          type and scrambled to make type specimen’s book has
                          survived not five centuries but also the leap into
                          electronic type and book.
                        </p>
                        <a href="#" className="reply">
                          {" "}
                          <i className="icofont-reply"></i> Reply
                        </a>
                      </div>
                      {/* <!-- Single Comment End --> */}
                    </li>
                  </ul>
                </div>
                <div className="comment-form">
                  <h3 className="title">Leave a comment</h3>

                  {/* <!-- Form Wrapper Start --> */}
                  <div className="form-wrapper">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <!-- Form Wrapper Start --> */}
                          <div className="single-form">
                            <input type="text" placeholder="Name" />
                          </div>
                          {/* <!-- Form Wrapper End --> */}
                        </div>
                        <div className="col-md-6">
                          {/* <!-- Form Wrapper Start --> */}
                          <div className="single-form">
                            <input type="email" placeholder="Email" />
                          </div>
                          {/* <!-- Form Wrapper End --> */}
                        </div>
                        <div className="col-md-12">
                          {/* <!-- Form Wrapper Start --> */}
                          <div className="single-form">
                            <textarea placeholder="Massage"></textarea>
                          </div>
                          {/* <!-- Form Wrapper End --> */}
                        </div>
                        <div className="col-md-12">
                          {/* <!-- Form Wrapper Start --> */}
                          <div className="single-form text-center">
                            <button className="btn btn-primary btn-hover-dark">
                              Submit Now
                            </button>
                          </div>
                          {/* <!-- Form Wrapper End --> */}
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!-- Form Wrapper End --> */}
                </div>
              </div>
              {/* <!-- Blog Details Comment End --> */}
            </div>
            <div className="col-lg-4">
              {/* <!-- Blog Sidebar Start --> */}
              <div className="sidebar">
                {/* <!-- Sidebar Widget Search Start --> */}
                <div className="sidebar-widget widget-search">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button>
                      <i className="icofont-search-1"></i>
                    </button>
                  </form>
                </div>
                {/* <!-- Sidebar Widget Search End --> */}

                {/* <!-- Sidebar Widget Category Start --> */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Post Category</h4>

                  <div className="widget-category">
                    <ul className="category-list">
                      <li>
                        <a href="#">
                          UI/UX Design <span>(16)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Creative Writing <span>(03)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Graphic Design <span>(08)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Fine Arts <span>(18)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Business Analytics <span>(02)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Marketing <span>(14)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Sidebar Widget Category End --> */}

                {/* <!-- Sidebar Widget Post Start --> */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Recent Post</h4>

                  <div className="widget-post">
                    <ul className="post-items">
                      <li>
                        {/* <!-- Sidebar Widget Post Start --> */}
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="blog-details-left-sidebar.html">
                              <img src="/images/blog/blog-01.jpg" alt="Post" />
                            </a>
                          </div>
                          <div className="post-content">
                            <h5 className="title">
                              <a href="blog-details-left-sidebar.html">
                                Create Amazing Color Schemes Design
                              </a>
                            </h5>
                            <span className="date">
                              <i className="icofont-calendar"></i> 21 March,
                              2021
                            </span>
                          </div>
                        </div>
                        {/* <!-- Sidebar Widget Post End --> */}
                      </li>
                      <li>
                        {/* <!-- Sidebar Widget Post Start --> */}
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="blog-details-left-sidebar.html">
                              <img src="/images/blog/blog-02.jpg" alt="Post" />
                            </a>
                          </div>
                          <div className="post-content">
                            <h5 className="title">
                              <a href="blog-details-left-sidebar.html">
                                Data Science Machine Learning with Python
                              </a>
                            </h5>
                            <span className="date">
                              <i className="icofont-calendar"></i> 21 March,
                              2021
                            </span>
                          </div>
                        </div>
                        {/* <!-- Sidebar Widget Post End --> */}
                      </li>
                      <li>
                        {/* <!-- Sidebar Widget Post Start --> */}
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="blog-details-left-sidebar.html">
                              <img src="/images/blog/blog-03.jpg" alt="Post" />
                            </a>
                          </div>
                          <div className="post-content">
                            <h5 className="title">
                              <a href="blog-details-left-sidebar.html">
                                Leadership: Strategies for Business
                              </a>
                            </h5>
                            <span className="date">
                              <i className="icofont-calendar"></i> 21 March,
                              2021
                            </span>
                          </div>
                        </div>
                        {/* <!-- Sidebar Widget Post End --> */}
                      </li>
                      <li>
                        {/* <!-- Sidebar Widget Post Start --> */}
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="blog-details-left-sidebar.html">
                              <img src="/images/blog/blog-04.jpg" alt="Post" />
                            </a>
                          </div>
                          <div className="post-content">
                            <h5 className="title">
                              <a href="blog-details-left-sidebar.html">
                                Illustrating Badges & Geometric Shapes
                              </a>
                            </h5>
                            <span className="date">
                              <i className="icofont-calendar"></i> 21 March,
                              2021
                            </span>
                          </div>
                        </div>
                        {/* <!-- Sidebar Widget Post End --> */}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Sidebar Widget Post End --> */}

                {/* <!-- Sidebar Widget Tags Start --> */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Popular Tags</h4>

                  <div className="widget-tags">
                    <ul className="tags-list">
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Sidebar Widget Tags End --> */}

                {/* <!-- Sidebar Widget Share Start --> */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Share Course:</h4>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Sidebar Widget Share End --> */}
              </div>
              {/* <!-- Blog Sidebar End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Details End --> */}

      {/* <!-- Download App Start --> */}
      <div className="section section-padding download-section">
        <div className="app-shape-1"></div>
        <div className="app-shape-2"></div>
        <div className="app-shape-3"></div>
        <div className="app-shape-4"></div>

        <div className="container">
          {/* <!-- Download App Wrapper Start --> */}
          <div className="download-app-wrapper mt-n6">
            {/* <!-- Section Title Start --> */}
            <div className="section-title section-title-white">
              <h5 className="sub-title">Ready to start?</h5>
              <h2 className="main-title">
                Download our mobile app. for easy to start your course.
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            <img
              className="shape-1 animation-right"
              src="/images/shape/shape-14.png"
              alt="Shape"
            />

            {/* <!-- Download App Button End --> */}
            <div className="download-app-btn">
              <ul className="app-btn">
                <li>
                  <a href="#">
                    <img src="/images/google-play.png" alt="Google Play" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/app-store.png" alt="App Store" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Download App Button End --> */}
          </div>
          {/* <!-- Download App Wrapper End --> */}
        </div>
      </div>
      {/* <!-- Download App End --> */}
    </div>
  );
};

export default article;
