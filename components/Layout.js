
import Header from "./Header"

import Footer from "./Footer"

import Script from "next/script"


const Layout = ({children}) => {
  return (
    <body>
    <div className="main-wrapper">
        <Header />

        {/* <!-- Overlay Start --> */}
        <div className="overlay"></div>
        {/* <!-- Overlay End --> */}


        <main>{children}</main>


        {/* <!--Back To Start--> */}
        <a href="#" className="back-to-top">
            <i className="icofont-simple-up"></i>
        </a>
        {/* <!--Back To End--> */}

        <Footer />
    </div>


    {/* <!-- Modernizer & jQuery JS --> */}
    <Script src="/js/vendor/modernizr-3.11.2.min.js" />
    <Script src="/js/vendor/jquery-3.5.1.min.js" />

    {/* <!-- Bootstrap JS --> */}
    <Script src="/js/plugins/popper.min.js" />
    <Script src="/js/plugins/bootstrap.min.js" />



    {/* <!--====== Use the minified version files listed below for better performance and remove the files listed above ======--> */}
    <Script src="/js/plugins.min.js" />


    {/* <!-- Main JS --> */}
    <Script strategy="lazyOnload" src="/js/main.js" />

    </body>
  )
}

export default Layout