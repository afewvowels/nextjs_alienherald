import Link from 'next/link'

import styles from 'styles/templates.module.css'

const Header = () => {
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
    </header>
  </>)
}

export default Header