import Footer from 'components/layout/Footer'

const Layout = ({children}) => {
  return(<>
    <main>{children}</main>
    <Footer />
  </>)
}

export default Layout