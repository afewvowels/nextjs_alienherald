import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from '../public/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrafficCone } from '@fortawesome/pro-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | AlienHerald</title>
        <meta name="description" content="Homepage for AlienHerald related media channels" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="AlienHerald logo" className={styles.logo} />
        <section className={styles.iconsTitle}>
          <FontAwesomeIcon icon={faTrafficCone}/>
          <h1 className={styles.heading}>AlienHerald</h1>
          <FontAwesomeIcon icon={faTrafficCone}/>
        </section>
      </main>

      <footer className={styles.footer}>
        <h6>Code by AlienHerald using Next.js + Vercel</h6>
      </footer>
    </div>
  )
}
