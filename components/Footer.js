import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="section footer-section">
      {/* <!-- Footer Widget Section Start --> */}
      <div className="footer-widget-section">
        <img
          className="shape-1 animation-down"
          src="/images/shape/shape-21.png"
          alt="Shape"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 order-md-1 order-lg-1">
              {/* <!-- Footer Widget Start --> */}
              <div className="footer-widget">
                <div className="widget-logo">
                  <a href="#">
                    <img src="/images/logo.png" alt="Logo" />
                  </a>
                </div>

                <div className="widget-address">
                  {/* <h4 className="footer-widget-title">Caribbean Ct</h4>
                  <p>Haymarket, Virginia (VA).</p> */}
                  <p>We are an educational institute. We envision a future of our fellow Indian students as Leaders, Innovators, and creators.</p>
                </div>

                <ul className="widget-info">
                  <li>
                    <p>
                      {" "}
                      <i className="flaticon-email"></i>{" "}
                      <a href="#">contact@thelearningsetu.com</a>{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <i className="flaticon-phone-call"></i>{" "}
                      <a href="tel:+919518901902">(+91) 951-890-1902</a>{" "}
                    </p>
                  </li>
                </ul>

                <ul className="widget-social">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/thelearningsetu/">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/thelearningsetu">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="flaticon-skype"></i>
                    </a>
                  </li> */}
                  <li>
                    <a target={"_blank"} href="https://www.instagram.com/thelearningsetu/">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Footer Widget End --> */}
            </div>
            <div className="col-lg-6 order-md-3 order-lg-2">
              {/* <!-- Footer Widget Link Start --> */}
              <div className="footer-widget-link">
                {/* <!-- Footer Widget Start --> */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Category</h4>

                  <ul className="widget-link">
                    <li>
                      <Link href="/programs"><a>Our Programs</a></Link>
                    </li>
                    {/* <li>
                      <Link href="/courses"><a>Our Courses</a></Link>
                    </li> */}
                    <li>
                      <Link href="/quick-tutorials"><a>Quick Tutorials</a></Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Footer Widget End --> */}

                {/* <!-- Footer Widget Start --> */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Quick Links</h4>

                  <ul className="widget-link">
                    <li>
                      <Link href="/about"><a>About us</a></Link>
                    </li>
                    <li>
                      <Link href="/contact"><a>Contact us</a></Link>
                      
                    </li>

                  </ul>
                </div>
                {/* <!-- Footer Widget End --> */}
              </div>
              {/* <!-- Footer Widget Link End --> */}
            </div>
          </div>
        </div>

        <img
          className="shape-2 animation-left"
          src="/images/shape/shape-22.png"
          alt="Shape"
        />
      </div>
      {/* <!-- Footer Widget Section End --> */}

      {/* <!-- Footer Copyright Start --> */}
      <div className="footer-copyright">
        <div className="container">
          {/* <!-- Footer Copyright Start --> */}
          <div className="copyright-wrapper">
            <div className="copyright-link">
              <Link href="/terms-of-service"><a>Terms of service</a></Link>
              <Link href="/privacy-policy"><a>Provicy policy</a></Link>
              {/* <a href="#">Sitemap</a>
              <a href="#">Security</a> */}
            </div>
            <div className="copyright-text">
              <p>
                &copy; 2020 <span> The Learning Setu </span>
                {/* <a href="#">Codecarnival</a> */}
              </p>
            </div>
          </div>
          {/* <!-- Footer Copyright End --> */}
        </div>
      </div>
      {/* <!-- Footer Copyright End --> */}
    </div>
  );
};

export default Footer;
