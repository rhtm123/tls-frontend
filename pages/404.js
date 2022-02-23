import React from 'react'
import Banner from '../components/Banner'

const Error404 = () => {
  return (
    <div>

      <Banner>
        <div className="page-banner-content">
                      <ul className="breadcrumb">
                          <li><a href="#">Home</a></li>
                          <li className="active">404 Error</li>
                      </ul>
                      <h2 className="title">Page Not <span>Found</span></h2>
          </div>
      </Banner>


      <div className="section section-padding mt-n10">
            <div className="container">

                {/* <!-- Error Wrapper Start --> */}
                <div className="error-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* <!-- Error Images Start --> */}
                            <div className="error-images">
                                <img src="/images/error.png" alt="Error" />
                            </div>
                            {/* <!-- Error Images End --> */}
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Error Content Start --> */}
                            <div className="error-content">
                                <h5 className="sub-title">This Page is Not Found.</h5>
                                <h2 className="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                                <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                                <a href="index.html" className="btn btn-primary btn-hover-dark">Back To Home</a>
                            </div>
                            {/* <!-- Error Content End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Error Wrapper End --> */}

            </div>
        </div>




    </div>
  )
}

export default Error404