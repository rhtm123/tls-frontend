import React from "react";

const Banner = ({ children }) => {
  return (
    <div className="section page-banner">
      {/* <img
        className="shape-1 animation-round"
        src="/images/shape/shape-8.png"
        alt="Shape"
      /> */}

      <img className="shape-2" src="/images/shape/shape-23.png" alt="Shape" />

      <div className="container">
        {/* <!-- Page Banner Start --> */}
        {children}
        {/* <!-- Page Banner End --> */}
      </div>

      {/* <!-- Shape Icon Box Start --> */}
      <div className="shape-icon-box">
        {/* <img
          className="icon-shape-1 animation-left"
          src="/images/shape/shape-5.png"
          alt="Shape"
        /> */}

        <div className="box-content">
          <div className="box-wrapper">
            <i className="flaticon-badge"></i>
          </div>
        </div>

        <img
          className="icon-shape-2"
          src="/images/shape/shape-6.png"
          alt="Shape"
        />
      </div>
      {/* <!-- Shape Icon Box End --> */}

      <img className="shape-3" src="/images/shape/shape-24.png" alt="Shape" />

      {/* <img
        className="shape-author"
        src="/images/author/author-11.jpg"
        alt="Shape"
      /> */}
    </div>
  );
};

export default Banner;
