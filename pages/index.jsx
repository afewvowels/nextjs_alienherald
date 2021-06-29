import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrafficCone } from '@fortawesome/pro-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faPatreon, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (<>
    <Head>
      <title>Home | AlienHerald</title>
      <meta name="description" content="Homepage for AlienHerald related media channels" />
      <link rel="icon" href="/logo.svg" />
    </Head>

    <div className={styles.container}>
      <Image src='/logo.svg' alt="AlienHerald logo" height={512} width={512} className={styles.logo} />
      <section className={styles.linkIcons}>
        <Link href="https://www.facebook.com/105695311770374" passHref>
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="https://www.github.com/afewvowels" passHref>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/alienheraldworkshop" passHref>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://www.patreon.com/AlienHerald" passHref>
          <FontAwesomeIcon icon={faPatreon} />
        </Link>
        <Link href="https://www.twitch.tv/alienherald" passHref>
          <FontAwesomeIcon icon={faTwitch} />
        </Link>
        <Link href="https://twitter.com/AlienHerald" passHref>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </section>
    </div>
  </>)
}

export default Home
