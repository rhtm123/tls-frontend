import React from "react";

import Banner from "../components/Banner";

const courses = () => {
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
          {/* <!-- Courses Category Wrapper Start  --> */}
          <div className="courses-category-wrapper">
            <div className="courses-search search-2">
              <input type="text" placeholder="Search here" />
              <button>
                <i className="icofont-search"></i>
              </button>
            </div>

            <ul className="category-menu">
              <li>
                <a className="active" href="#">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Archived</a>
              </li>
            </ul>
          </div>
          {/* <!-- Courses Category Wrapper End  --> */}

          {/* <!-- Courses Wrapper Start  --> */}
          <div className="courses-wrapper-02">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* <!-- Single Courses Start --> */}
                <div className="single-courses">
                  <div className="courses-images">
                    <a href="courses-details.html">
                      <img src="/images/courses/courses-01.jpg" alt="Courses" />
                    </a>

                    <div className="courses-option dropdown">
                      <button
                        className="option-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <i className="icofont-share-alt"></i> Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-plus"></i> Create Collection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-star"></i> Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-archive"></i> Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="courses-author">
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
                    </div>

                    <h4 className="title">
                      <a href="courses-details.html">
                        Data Science and Machine Learning with Python - Hands
                        On!
                      </a>
                    </h4>

                    <div className="courses-rating">
                      <p>38% Complete</p>

                      <div className="rating-progress-bar">
                        <div
                          className="rating-line"
                          style={{ width: "38%" }}
                        ></div>
                      </div>

                      <div className="rating-meta">
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <p>Your rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Courses End --> */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!-- Single Courses Start --> */}
                <div className="single-courses">
                  <div className="courses-images">
                    <a href="courses-details.html">
                      <img src="/images/courses/courses-02.jpg" alt="Courses" />
                    </a>

                    <div className="courses-option dropdown">
                      <button
                        className="option-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <i className="icofont-share-alt"></i> Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-plus"></i> Create Collection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-star"></i> Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-archive"></i> Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="courses-author">
                      <div className="author">
                        <div className="author-thumb">
                          <a href="#">
                            <img
                              src="/images/author/author-02.jpg"
                              alt="Author"
                            />
                          </a>
                        </div>
                        <div className="author-name">
                          <a className="name" href="#">
                            Pamela Foster{" "}
                          </a>
                          <a className="name-2" href="#">
                            Ohula Malsh
                          </a>
                        </div>
                      </div>
                    </div>

                    <h4 className="title">
                      <a href="courses-details.html">
                        Create Amazing Color Schemes for Your UX Design Projects
                      </a>
                    </h4>

                    <div className="courses-rating">
                      <p>80% Complete</p>

                      <div className="rating-progress-bar">
                        <div
                          className="rating-line"
                          style={{ width: "80%" }}
                        ></div>
                      </div>

                      <div className="rating-meta">
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "0%" }}
                          ></span>
                        </span>
                        <p>
                          <a href="#">Leave a rating</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Courses End --> */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!-- Single Courses Start --> */}
                <div className="single-courses">
                  <div className="courses-images">
                    <a href="courses-details.html">
                      <img src="/images/courses/courses-03.jpg" alt="Courses" />
                    </a>

                    <div className="courses-option dropdown">
                      <button
                        className="option-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <i className="icofont-share-alt"></i> Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-plus"></i> Create Collection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-star"></i> Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-archive"></i> Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="courses-author">
                      <div className="author">
                        <div className="author-thumb">
                          <a href="#">
                            <img
                              src="/images/author/author-03.jpg"
                              alt="Author"
                            />
                          </a>
                        </div>
                        <div className="author-name">
                          <a className="name" href="#">
                            Rose Simmons
                          </a>
                          <a className="name-2" href="#">
                            Ohula Malsh
                          </a>
                        </div>
                      </div>
                    </div>

                    <h4 className="title">
                      <a href="courses-details.html">
                        Culture & Leadership: Strategies for a Successful
                        Business
                      </a>
                    </h4>

                    <div className="courses-rating">
                      <p>15% Complete</p>

                      <div className="rating-progress-bar">
                        <div
                          className="rating-line"
                          style={{ width: "15%" }}
                        ></div>
                      </div>

                      <div className="rating-meta">
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <p>Your rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Courses End --> */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!-- Single Courses Start --> */}
                <div className="single-courses">
                  <div className="courses-images">
                    <a href="courses-details.html">
                      <img src="/images/courses/courses-04.jpg" alt="Courses" />
                    </a>

                    <div className="courses-option dropdown">
                      <button
                        className="option-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <i className="icofont-share-alt"></i> Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-plus"></i> Create Collection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-star"></i> Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-archive"></i> Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="courses-author">
                      <div className="author">
                        <div className="author-thumb">
                          <a href="#">
                            <img
                              src="/images/author/author-04.jpg"
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
                    </div>

                    <h4 className="title">
                      <a href="courses-details.html">
                        Finance Series: Learn to Budget and Calculate your Net
                        Worth.
                      </a>
                    </h4>

                    <div className="courses-rating">
                      <p>45% Complete</p>

                      <div className="rating-progress-bar">
                        <div
                          className="rating-line"
                          style={{ width: "45%" }}
                        ></div>
                      </div>

                      <div className="rating-meta">
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <p>Your rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Courses End --> */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!-- Single Courses Start --> */}
                <div className="single-courses">
                  <div className="courses-images">
                    <a href="courses-details.html">
                      <img src="/images/courses/courses-05.jpg" alt="Courses" />
                    </a>

                    <div className="courses-option dropdown">
                      <button
                        className="option-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <i className="icofont-share-alt"></i> Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-plus"></i> Create Collection
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-star"></i> Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-archive"></i> Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="courses-author">
                      <div className="author">
                        <div className="author-thumb">
                          <a href="#">
                            <img
                              src="/images/author/author-05.jpg"
                              alt="Author"
                            />
                          </a>
                        </div>
                        <div className="author-name">
                          <a className="name" href="#">
                            Pamela Foster
                          </a>
                          <a className="name-2" href="#">
                            Ohula Malsh
                          </a>
                        </div>
                      </div>
                    </div>

                    <h4 className="title">
                      <a href="courses-details.html">
                        Build Brand Into Marketing: Tackling the New Marketing
                        Landscape
                      </a>
                    </h4>

                    <div className="courses-rating">
                      <p>38% Complete</p>

                      <div className="rating-progress-bar">
                        <div
                          className="rating-line"
                          style={{ width: "38%" }}
                        ></div>
                      </div>

                      <div className="rating-meta">
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <p>Your rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Courses End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Courses Wrapper End  --> */}
        </div>
      </div>
      {/* <!-- Courses End --> */}

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

export default courses;
