import Link from 'next/link'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-solid-svg-icons'

import styles from 'styles/templates.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const hideResponsiveNav = () => setIsOpen(false)
  const showResponsiveNav = () => setIsOpen(true)

  let responsiveNav
  if (isOpen) {
    responsiveNav =
    <span>
      <div className={styles.responsiveIcon} onClick={hideResponsiveNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav id='responsiveHeaderNavId' className={styles.responsiveHeaderNav}>
        <ul>
          <li><Link href='https://warehouse.alienherald.earth/' passHref>Warehouse</Link></li>
          <li><Link href='/project' passHref>Projects</Link></li>
          <li><Link href='https://alienherald.threadless.com/designs/alienherald' passHref>Merch</Link></li>
        </ul>
      </nav>
    </span>
  } else {
    responsiveNav =
    <div className={styles.responsiveIcon} onClick={showResponsiveNav}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  }

  return(<>
    <header className={styles.header}>
      <Link href='/' passHref>
        <h1 className={styles.headerTitle}>A<span>H</span></h1>
      </Link>
      <nav className={styles.headerNav}>
        <ul>
          <li><Link href='https://warehouse.alienherald.earth/' passHref>Warehouse</Link></li>
          <li><Link href='/project' passHref>Projects</Link></li>
          <li><Link href='https://alienherald.threadless.com/designs/alienherald' passHref>Merch</Link></li>
        </ul>
      </nav>
      {responsiveNav}
    </header>
  </>)
}

export default Header