import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt } from '@fortawesome/pro-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faPatreon, faPaypal, faTwitch, faTwitter, faVimeo, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'

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
        <span>
          <Link href="https://www.facebook.com/AlienHerald" passHref>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="https://www.github.com/AlienHerald" passHref>
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
          <Link href="https://alienherald.threadless.com/designs/alienherald" passHref>
            <FontAwesomeIcon icon={faTshirt} />
          </Link>
        </span>
        <span>
          <Link href="https://www.tiktok.com/@alienherald" passHref>
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
          <Link href="https://thingiverse.com/AlienHerald" passHref>
            <FontAwesomeIcon icon={faToolbox} />
          </Link>
          <Link href="https://twitter.com/AlienHerald" passHref>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://paypal.me/AlienHerald" passHref>
            <FontAwesomeIcon icon={faPaypal} />
          </Link>
          <Link href="https://vimeo.com/user144700268" passHref>
            <FontAwesomeIcon icon={faVimeo} />
          </Link>
        </span>
      </section>
    </div>
  </>)
}

export default Home
