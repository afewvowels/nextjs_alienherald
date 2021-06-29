import Link from 'next/link'

import styles from 'styles/templates.module.css'

const Header = () => {
  return(<>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>A<span>H</span></h1>
      <nav className={styles.headerNav}>
        <ul>
          <li><Link href='/' passHref>Home</Link></li>
          <li><Link href='/project' passHref>Projects</Link></li>
        </ul>
      </nav>
    </header>
  </>)
}

export default Header