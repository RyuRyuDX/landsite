import '../styles/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Seo from './components/Seo/Seo'

export default function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Seo />
      <Header />
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}