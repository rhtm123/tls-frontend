import React from "react";
import Head from "next/head";
import Article from "../../components/Article";
import Banner from "../../components/Banner";

import Error from "../../components/Error";

const ArticlePage = ({data, error}) => {

  if (error){
    return (<Error />)
  }

  return (
    <div>
      <Head>
        <title>{data.header} - The Learning Setu</title>
        <meta name="description" content={data.sub_header} />
      </Head>
      <Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Quick Tutorial</li>
          </ul>
          <h2 className="title">
            {data.header}<span></span>
            
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
                {/* <div className="blog-details-admin-meta">
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
                </div> */}

                <h2 className="title">
                  {data.sub_header}
                </h2>

                <div className="blog-details-description">
                  <div  dangerouslySetInnerHTML={{ __html: data.detail }}></div>
                  
                </div>

                {/* <div className="blog-details-label">
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
                </div> */}

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
              
              {/* <!-- Blog Details Comment End --> */}
            </div>
            <div className="col-lg-4">
              {/* <!-- Blog Sidebar Start --> */}
              <div className="sidebar">
                {/* <!-- Sidebar Widget Search Start --> */}
                
                {/* <!-- Sidebar Widget Search End --> */}

                {/* <!-- Sidebar Widget Category Start --> */}
                
                {/* <!-- Sidebar Widget Category End --> */}

                {/* <!-- Sidebar Widget Post Start --> */}
                
                {/* <!-- Sidebar Widget Post End --> */}

                {/* <!-- Sidebar Widget Tags Start --> */}
                
                {/* <!-- Sidebar Widget Tags End --> */}

                
              </div>
              {/* <!-- Blog Sidebar End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Details End --> */}

    </div>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"short-tutorial/short-tut/"+slug;

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return { 
      props: { 
          data:data, error:error
      } 

  }
}

ArticlePage.layout = "L1";
export default ArticlePage;
