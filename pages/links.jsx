import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import SocialLink from 'components/elements/SocialLink'

import styles from 'styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt } from '@fortawesome/pro-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faPatreon, faPaypal, faTwitch, faTwitter, faVimeo, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'

const links = () => {
  return(<>
    <section className={styles.linkWrapper}>
      <Image src='/logo.svg' alt="AlienHerald logo" height={512} width={512} className={styles.logoLinks} />
      <Link href="https://alienherald.threadless.com/designs/alienherald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faTshirt} />
          <p>Threadless</p>
        </div>
      </Link>
      <Link href="https://www.patreon.com/AlienHerald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faPatreon} />
          <p>Patreon</p>
        </div>
      </Link>
      <Link href="https://www.instagram.com/alienheraldworkshop" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faInstagram} />
          <p>Instagram</p>
        </div>
      </Link>
      <Link href="https://www.facebook.com/AlienHerald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faFacebookF} />
          <p>Facebook</p>
        </div>
      </Link>
      <Link href="https://www.twitch.tv/alienherald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faTwitch} />
          <p>Twitch</p>
        </div>
      </Link>
      <Link href="https://www.facebook.com/AlienHerald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faFacebookF} />
          <p>Facebook</p>
        </div>
      </Link>
      <Link href="https://www.github.com/AlienHerald" passHref>
        <div className={styles.socialLink}>
          <FontAwesomeIcon icon={faGithub} />
          <p>Github</p>
        </div>
      </Link>
    </section>
  </>)
}

export default links