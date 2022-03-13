
// import '../styles/plugins/animate.min.css'
// import '../styles/plugins/apexcharts.css'
// import '../styles/plugins/flaticon.css'

// import '../styles/plugins/font-awesome.min.css'
// import '../styles/plugins/icofont.min.css'
// import '../styles/plugins/jqvmap.min.css'
// import '../styles/plugins/magnific-popup.css'
// import '../styles/plugins/nice-select.css'

import '../styles/vendor/plugins.min.css'

import '../styles/style.css'

import Layout from '../components/Layout';
import Layout2 from '../components/Layout2';

import { SessionProvider } from "next-auth/react"

import AppWrapper from '../context/state';

import NextNProgress from "nextjs-progressbar";


const layouts = {
  L1: Layout,
  L2: Layout2,
};


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);


  return (
  <>
  
  <NextNProgress />
  <AppWrapper>

  <SessionProvider session={session}>

  <Layout>
    <Component {...pageProps} />

  </Layout>
  </SessionProvider>
  </AppWrapper>

  </>
  
  )
}

export default MyApp
