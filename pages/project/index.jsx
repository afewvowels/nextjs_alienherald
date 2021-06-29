import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/pages.module.css'

const Home = () => {
  return(<>
    <Head>
      <title>Projects | AlienHerald</title>
      <meta name="description" content="Projects homepage for AlienHerald related projects from the workshop" />
      <link rel="icon" href="/logo.svg" />
    </Head>

    <Link href='/' passHref>
      <h1>Projects</h1>
    </Link>
  </>)
}

export default Home