
import '../styles/plugins/animate.min.css'
import '../styles/plugins/apexcharts.css'
import '../styles/plugins/flaticon.css'

import '../styles/plugins/font-awesome.min.css'
import '../styles/plugins/icofont.min.css'
import '../styles/plugins/jqvmap.min.css'
import '../styles/plugins/magnific-popup.css'
import '../styles/plugins/nice-select.css'
import '../styles/plugins/swiper-bundle.min.css'




import '../styles/style.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />

  </Layout>
  
  )
}

export default MyApp
