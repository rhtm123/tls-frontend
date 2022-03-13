import React from "react";

import Link from "next/link";

import Banner from "../components/Banner";

const about = () => {
  return (
    <div>
      <Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="active">About us</li>
          </ul>
          <h2 className="title">
            About <span>Us</span>
          </h2>
        </div>
      </Banner>
      {/* <!-- About Start --> */}
      <div className="section">
        <div className="section-padding-02 mt-n10">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- About Images Start --> */}
                <div className="about-images">
                  <div className="images">
                    <img src="/images/about.jpg" alt="About" />
                  </div>

                  <div className="about-years">
                    <div className="years-icon">
                      <img src="/images/logo-icon.png" alt="About" />
                    </div>
                    <p>
                      <strong>4+</strong> Years Experience
                    </p>
                  </div>
                </div>
                {/* <!-- About Images End --> */}
              </div>
              <div className="col-lg-6">
                {/* <!-- About Content Start --> */}
                <div className="about-content">
                  <h5 className="sub-title">Welcome to The Learning Setu</h5>
                  <h2 className="main-title">
                    You can join our programs & courses and upgrade your skill for your{" "}
                    <span>bright future.</span>
                  </h2>
                  {/* <p>
                    Lorem Ipsum has been the industr’s standard dummy text ever
                    since unknown printer took galley type and scmbled make type
                    specimen book. It has survived not only five centuries.
                  </p> */}
                  <Link href="/programs"><a className="btn btn-primary btn-hover-dark">
                   All Programs
                  </a>
                  </Link>
                </div>
                {/* <!-- About Content End --> */}
              </div>
            </div>
          </div>
        </div>

        <div className="section-padding-02 mt-n6">
          <div className="container">
            {/* <!-- About Items Wrapper Start --> */}
            <div className="about-items-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  {/* <!-- About Item Start --> */}
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-tutor"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Top Instructors</h3>
                      </div>
                    </div>
                    {/* <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p> */}
                  </div>
                  {/* <!-- About Item End --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- About Item Start --> */}
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-coding"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Best Programs</h3>
                      </div>
                    </div>
                    {/* <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p> */}
                  </div>
                  {/* <!-- About Item End --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- About Item Start --> */}
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="item-title">
                        <h3 className="title">Quick Support</h3>
                      </div>
                    </div>
                    {/* <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled to make type specimen
                      book has survived.
                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dumy text
                      since the when took and scrambled make.
                    </p> */}
                  </div>
                  {/* <!-- About Item End --> */}
                </div>
              </div>
            </div>
            {/* <!-- About Items Wrapper End --> */}
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Call to Action Start --> */}
      <div className="section" style={{ padding:"70px 0px" }}>
        <div className="container">
          {/* <!-- Call to Action Wrapper Start --> */}
          <div className="call-to-action-wrapper">
            <img
              className="cat-shape-01 animation-round"
              src="/images/shape/shape-12.png"
              alt="Shape"
            />
            <img
              className="cat-shape-02"
              src="/images/shape/shape-13.svg"
              alt="Shape"
            />
            <img
              className="cat-shape-03 animation-round"
              src="/images/shape/shape-12.png"
              alt="Shape"
            />

            <div className="row align-items-center">
              <div className="col-md-6">
                {/* <!-- Section Title Start --> */}
                <div className="section-title shape-02">
                  <h5 className="sub-title">Become A Instructor</h5>
                  <h2 className="main-title">
                    You can join with Edule as <span>a instructor?</span>
                  </h2>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
              <div className="col-md-6">
                <div className="call-to-action-btn">
                  <Link href={"/contact"}>
                  <a
                    className="btn btn-primary btn-hover-dark"
                  >
                    Contact us
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Call to Action Wrapper End --> */}
        </div>
      </div>
      {/* <!-- Call to Action End --> */}
    </div>
  );
};

export default about;
