import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import logo from '../public/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrafficCone } from '@fortawesome/pro-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faPatreon, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | AlienHerald</title>
        <meta name="description" content="Homepage for AlienHerald related media channels" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="AlienHerald logo" className={styles.logo} />
        <section className={styles.linkIcons}>
          <Link href="https://www.facebook.com/105695311770374">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="https://www.github.com/afewvowels">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link href="https://www.instagram.com/alienheraldworkshop">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.patreon.com/AlienHerald">
            <FontAwesomeIcon icon={faPatreon} />
          </Link>
          <Link href="https://www.twitch.tv/alienherald">
            <FontAwesomeIcon icon={faTwitch} />
          </Link>
          <Link href="https://twitter.com/AlienHerald">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <h6>Code by AlienHerald using Next.js + Vercel</h6>
      </footer>
    </div>
  )
}
