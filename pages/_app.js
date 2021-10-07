import '../styles/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Header />
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}