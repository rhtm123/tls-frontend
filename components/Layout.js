
import Header from "./Header"

import Footer from "./Footer"


const Layout = ({children}) => {
  return (
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
  )
}

export default Layout