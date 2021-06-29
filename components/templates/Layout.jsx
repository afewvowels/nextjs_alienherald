import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'

const Layout = ({children}) => {
  return(<>
    <Header />
    <main>{children}</main>
    <Footer />
  </>)
}

export default Layout