import Link from 'next/link'

const NotFound = () => {
  return(<>
    <Link href='/' passHref>
      <section>
        <h1>404</h1>
        <p>Page not found. Please go back or click here to go to the homepage.</p>
      </section>
    </Link>
  </>)
}

export default NotFound