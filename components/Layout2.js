

import Header2 from "./Header2"

import Footer from "./Footer"

import Script from "next/script"


const Layout2 = ({children}) => {
  return (
    <body>
    <div className="main-wrapper">
        <Header2 />


        <main>{children}</main>


        {/* <!--Back To Start--> */}
        <a href="#" className="back-to-top">
            <i className="icofont-simple-up"></i>
        </a>
        {/* <!--Back To End--> */}

        <Footer />
    </div>


    {/* <!-- Modernizer & jQuery JS --> */}
    <Script strategy="beforeInteractive" src="/js/vendor/modernizr-3.11.2.min.js" />
    <Script strategy="beforeInteractive" src="/js/vendor/jquery-3.5.1.min.js" />



    {/* <!--====== Use the minified version files listed below for better performance and remove the files listed above ======--> */}

    <Script  strategy="beforeInteractive" src="/js/plugins.min.js" />

    <Script strategy="lazyOnload" src="/js/main.js" />



    </body>
  )
}

export default Layout2